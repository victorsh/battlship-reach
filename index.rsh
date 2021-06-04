/*
  1. Deployer sets the wager
  2. Attacher accepts or rejects the wager.
  3. Attacher selects where to place ships. Deployer does not know.
  4. Deployer selects where to place ships. Attacher does not know.
  5. Deployer and Attacher take turns guessing where the opponents battleships are.
  6. First to sink opposing battleships wins.
  7. Funds are transferred to winner.
*/

/*
  1. Deployer sets the wager
  2. Attacher accepts or rejects the wager.
  3. Attacher selects where to place ships. Deployer does not know.
  4. Deployer selects where to place ships. Attacher does not know.
  5. Deployer and Attacher guess their opponents peice ship locations until all ships are found.
  6. The number of turns taken is then used to determine the winner.
  7. Funds are transferred to winner.
*/

/*
  1. A & B Select their ship locations.
  2. Locations for each are made into commitments.
  3. A & B have X number of guesses out of Y grid selections.
  4. Winner is determined by whoever guesses the most correct ship locations.
  5. If a Draw occurs, the game starts over at (1).
*/

/*
  There can be a DRAW
*/

'reach 0.1';

const GRID_SIZE = 16;
const DEADLINE = 5;
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
  guessShips: Fun([], Array(UInt, GRID_SIZE))
};
const deployer = {
  ...player,
  wager: UInt
};
const attacher = {
  ...player,
  acceptWager: Fun([UInt], Null)
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
    });
    B.pay(wager).timeout(DEADLINE, () => closeTo(A, informTimeout));

    // -> ON DRAW LOOP STARTS HERE
    var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome))
    while (outcome == DRAW) {
      commit();

      // A selects locations for ships and stores it in contract private.
      A.only(() => {
        const _shipsA = interact.selectShips();
        const [_commitA, _saltA] = makeCommitment(interact, _shipsA);
        const commitA = declassify(_commitA);
      });
      A.publish(commitA).timeout(DEADLINE, () => closeTo(B, informTimeout));
      commit();
      // B should not know the location of A's ships
      // B selects locations for ships and stores them in contract public
      // unknowable(B, A(_shipsA, _saltA));
      B.only(() => {
        const _shipsB = interact.selectShips();
        const [_commitB, _saltB] = makeCommitment(interact, _shipsB);
        const commitB = declassify(_commitB);
      });
      B.publish(commitB).timeout(DEADLINE, () => closeTo(A, informTimeout));
      commit();
      // A should not know the location of B's ships
      // unknowable(A, B(_shipsB, _saltB));


      // Take Guesses A
      A.only(() => {
        const guessesA = declassify(interact.guessShips())
      });
      A.publish(guessesA).timeout(DEADLINE, () => closeTo(B, informTimeout));
      commit();
      // Take Guesses B
      B.only(() => {
        const guessesB = declassify(interact.guessShips());
      });
      B.publish(guessesB).timeout(DEADLINE, () => closeTo(A, informTimeout));
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
        commit();
        Anybody.publish();

        [ x, countA, countB ] = [
          x + 1,
          ieq(shipsB[x], guessesA[x]) ? countA + 1 : countA,
          ieq(shipsA[x], guessesB[x]) ? countB + 1 : countB
        ];

        continue;
      }

      outcome = winner(countA, countB);
      // outcome = A_WINS;
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