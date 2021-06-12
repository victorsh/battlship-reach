/*
  1. A & B Select their ship locations.
  2. Locations for each are made into commitments.
  3. A & B have X number of guesses out of Y grid selections.
  4. Winner is determined by whoever guesses the most correct ship locations.
  5. If a Draw occurs, the game starts over at (1).
*/

'reach 0.1';

const GRID_SIZE = 9;
const ACCEPT_WAGER_DEADLINE = 10;
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

const winner = (countA, countB) => {
  if (countA > countB) {
    return A_WINS;
  } else if (countB > countA) {
    return B_WINS;
  } else {
    return DRAW;
  }
}

assert(winner(1, 0) == A_WINS);
assert(winner(0, 1) == B_WINS);
assert(winner(1, 1) == DRAW);

const player = {
  ...hasRandom,
  wager: UInt,
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  selectShips: Fun([], Array(UInt, GRID_SIZE)),
  guessShips: Fun([], Array(UInt, GRID_SIZE)),
  loadingResult: Fun([UInt], Null)
};
const deployer = {
  ...player,
  wager: UInt,
  // informReject: Fun([UInt], Null)
};
const attacher = {
  ...player,
  acceptWager: Fun([UInt], Null)
  // acceptWager: Fun([UInt], [Boolean])
};

export const main = Reach.App(
  {},
  [Participant('deployer', deployer), Participant('attacher', attacher)],
  (A, B) => {
    const informTimeout = () => {
      each([A, B], () => {
        interact.informTimeout();
      });
    };

    // A declassifies and submits wager
    A.only(() => {
      const wager = declassify(interact.wager);
    });
    A.publish(wager).pay(wager);
    commit();

    // B accepts wager given an amount of time to accept
    B.only(() => {
      interact.acceptWager(wager);
      // const accepted = interact.acceptWager(wager); // ADD BOOLEAN TO REJECT WAGER
    });
    // if (accepted) {
      B.pay(wager).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(A, informTimeout));
    // } else { 
      // A.only(() => { interact.informReject() })}
      // exit();
    // }
    B.pay(wager).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(A, informTimeout));

    // -> ON DRAW LOOP STARTS HERE
    var [ loopCount, outcome ] = [ 0, DRAW ];
    invariant(balance() == 2 * wager && isOutcome(outcome));
    while (outcome == DRAW) {
      commit();

      if (outcome == DRAW && loopCount > 0) {
        each([A, B], () => {
          interact.seeOutcome(outcome);
        });
      }

      // A selects locations for ships and stores it in contract private.
      A.only(() => {
        const _shipsA = interact.selectShips();
        const [_commitA, _saltA] = makeCommitment(interact, _shipsA);
        const commitA = declassify(_commitA);
      });
      A.publish(commitA).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(B, informTimeout));
      commit();
      // B should not know the location of A's ships
      unknowable(B, A(_shipsA, _saltA));

      // B selects locations for ships and stores them in contract public
      B.only(() => {
        const _shipsB = interact.selectShips();
        const [_commitB, _saltB] = makeCommitment(interact, _shipsB);
        const commitB = declassify(_commitB);
      });
      B.publish(commitB).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(A, informTimeout));
      commit();
      // A should not know the location of B's ships
      unknowable(A, B(_shipsB, _saltB));


      // A guesses B's ship locations
      A.only(() => {
        const guessesA = declassify(interact.guessShips());
      });
      A.publish(guessesA).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(B, informTimeout));
      commit();
      // B guesses A's ship locations
      B.only(() => {
        const guessesB = declassify(interact.guessShips());
      });
      B.publish(guessesB).timeout(ACCEPT_WAGER_DEADLINE, () => closeTo(A, informTimeout));
      commit();


      // A decrypts and stores ships locations on contract public
      A.only(() => {
        const [saltA, shipsA] = declassify([_saltA, _shipsA]);
      });
      A.publish(saltA, shipsA);
      checkCommitment(commitA, saltA, shipsA);
      commit();
      // A decrypts and stores ships locations on contract public
      B.only(() => {
        const [saltB, shipsB] = declassify([_saltB, _shipsB]);
      });
      B.publish(saltB, shipsB);
      checkCommitment(commitB, saltB, shipsB);

      // winner = max(ships A cmpr guesses B, ships B cmpr guesses A)
      var [ x, countA, countB ] = [ 0, 0, 0 ];
      invariant(balance() == wager * 2);
      while(x < GRID_SIZE) {
        each([A, B], () => {
          interact.loadingResult(x);
        });
        commit();
        // B is always the first to pick up this task.
        // This was originally set to Anybody.publish()
        // but this caused A to Post bad request (400)
        // When A tried to pick up the task.
        B.publish();

        [ x, countA, countB ] = [
          x + 1,
          ieq(shipsB[x], guessesA[x]) ? countA + 1 : countA,
          ieq(shipsA[x], guessesB[x]) ? countB + 1 : countB
        ];

        continue;
      }

      [ loopCount, outcome ] = [
        loopCount + 1,
        winner(countA, countB)
      ];

      continue;
    }

    assert(outcome == A_WINS || outcome == B_WINS);
    transfer(2 * wager).to(outcome == A_WINS ? A : B);
    commit();

    each([A, B], () => {
      interact.seeOutcome(outcome);
    });

    exit();
  }
)