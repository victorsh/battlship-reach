import React from 'react';
import * as reach from '@reach-sh/stdlib/ALGO';
import * as backend from './backend/index.main.mjs';
import './App.css';

const { standardUnit } = reach;
const intToOutcome = ['Attacher wins!', 'Draw!', 'Deployer wins!'];
const GRID_SIZE = 16;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { defaultFundAmount: '10', defaultWager: '3', standardUnit }
  }

  async componentDidMount() {
    // const account = await reach.getDefaultAccount();
    // const balanceAtomic = await reach.balanceOf(account);
    // const balance = reach.formatCurrency(balanceAtomic, 4);
    // this.setState({ account, balance })
    // try {
    //   const faucet = await reach.getFaucet();
    // } catch (e) {
    //   //
    // }
  }

  async connectAccount() {
    const account = await reach.getDefaultAccount();
    const balanceAtomic = await reach.balanceOf(account);
    const balance = reach.formatCurrency(balanceAtomic, 4);
    this.setState({ account, balance })
    try {
      const faucet = await reach.getFaucet();
    } catch (e) {
      //
    }
  }

  async fundAccount(fundAmount) {
    await reach.transfer(this.state.faucet, this.state.account, reach.parseCurrency(fundAmount));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.connectAccount}>Connect Algo</button>
      </div>
    );
  }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random() }
  seeOutcome(i) { this.setState({ outcome: intToOutcome[i] }) }
  informTimeout() { console.log('A timeout has occured from player') }

  async getShips() {
    const board = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      board.push(Math.random() > 0.5 ? 1 : 0)
    }

    return board
  }

  async selectTargets() {
    const board = [];
    let guess_count = 0;
    for (let i = 0; i < GRID_SIZE; i++) {
      if (guess_count < GRID_SIZE / 2 && Math.random() > 0.5) {
        board.push(1);
        guess_count++;
      } else {
        board.push(0);
      }
    }

    return board
  }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
  }

  async deploy() {
    const ctc = this.props.account.deploy(backend);
    this.wager = reach.parseCurrency(this.state.wager);
    backend.deployer(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
  }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
    backend.attacher(ctc, this);
  }
  async acceptWager(wagerAtomic) {
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolve => {
      this.setState({wager, resolve})
    });
  }
  termsAccepted() {
    this.state.resolve();
  }
}

export default App;
