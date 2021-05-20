import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  console.log('Starting Battleship...');

  const stdlib = await loadStdlib();
  const startingBalance = stdlib.parseCurrency(10);
  const accDeployer = await stdlib.newTestAccount(startingBalance);
  const accAttacher = await stdlib.newTestAccount(startingBalance);

  const fmt = (x) => stdlib.formatCurrency(x, 4);
  const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

  const deployerInitialBalance = await getBalance(accDeployer);
  const attacherInitialBalance = await getBalance(accAttacher);

  const ctcDeployer = accDeployer.deploy(backend);
  const ctcAttacher = accAttacher.attach(backend, ctcDeployer.getInfo());

  const Player = (Who) => ({
    ...stdlib.hasRandom,
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${outcome}`);
    },
    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
    },
    getShips: () => {
      const board = [];
      for (let i = 0; i < 32; i++) {
        board.push(Math.random() > 0.5 ? 1 : 0)
      }
      console.log(board)
      return board
    },
    getLocations: () => {
      const board = [];
      let guess_count = 0;
      for (let i = 0; i < 32; i++) {
        if (guess_count < 16 && Math.random() > 0.5) {
          board.push(1);
          guess_count++;
        } else {
          board.push(0);
        }
      }
      console.log(board)
      return board
    }
  });

  await Promise.all([
    backend.deployer(
      ctcDeployer,
      {
        ...Player('Deployer'),
        wager: stdlib.parseCurrency(5)
      }
    ),
    backend.attacher(
      ctcAttacher,
      {
        ...Player('Attacher'),
        acceptWager: async (amt) => {
          console.log(`Attacher accpeted the wager of ${fmt(amt)}`)
        }
      }
    )
  ]);

  const balanceAfterDeployer = await getBalance(accDeployer);
  const balanceAfterAttacher = await getBalance(accAttacher);

  console.log(`Deployer: ${balanceAfterDeployer}, Attacher: ${balanceAfterAttacher}`)
})();
