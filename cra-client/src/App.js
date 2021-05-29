import React from 'react';
import Description from './components/Description'

import * as reach from '@reach-sh/stdlib/ALGO';
import * as backend from './backend/index.main.mjs';

import './App.css';

import battleship from './images/battleship.png';
import algorandLogo from './images/algorand-algo-logo.svg';
import reachLogoVertical from './images/reach-vertical.svg';

import Grid from './components/Grid'

const { standardUnit } = reach;
const intToOutcome = ['Attacher wins!', 'Draw!', 'Deployer wins!'];
const GRID_SIZE = 9;

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
const fmt = (x) => reach.formatCurrency(x, 4);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standardUnit,
      account: null,
      address: null,
      fundAmount: '10',
      wager: '3',
      balance: 0,
      outcome: null,
      attachInfo: null,
      selectedShips: new Array(16).fill(0),
      guessedShips: new Array(16).fill(0),
      status: 'starting',
      player: null
    }
  }

  async componentDidMount() {
    this.setState({status: 'landing'})
    window.addEventListener('timeout', (e) => {
      console.log('TIMEOUT OBSERVED')
      this.setState({status: 'deployer-start'})
    })
  }

  async componentWillUnmount() {
    window.removeEventListener('timeout', (e) => {});
  }

  connectAccount = async () => {
    const account = await reach.getDefaultAccount();
    console.log(account);

    const address = reach.formatAddress(account.getAddress());
    console.log(address);

    let balance = await reach.balanceOf(account);
    console.log(balance)
    
    balance = reach.formatCurrency(balance, 4);
    console.log(balance);

    this.setState({account, address, balance, status: 'connected'});
  }

  fundAccount = async () => {
    try {
      const faucet = await reach.getFaucet();
      await reach.transfer(faucet, this.state.account, reach.parseCurrency(this.state.fundAmount));
      let balance = await reach.balanceOf(this.state.account);
      balance = reach.formatCurrency(balance, 4);
      console.log(balance);
      this.setState({balance})
    } catch (e) {
      console.log('failed to get faucet: ', e);
    }
  }

  deployAndWager = async () => {
    console.log('deploying contract');
    this.setState({status: 'deployer-wait-attacher'});
    const ctc = await this.state.account.deploy(backend);
    backend.deployer(ctc, Deployer(this.state.wager));
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({attachInfo: ctcInfoStr})
  }

  attachContract = async () => {
    console.log('attaching to contract')
    const ctc = await this.state.account.attach(backend, JSON.parse(this.state.attachInfo));
    backend.attacher(ctc, Attacher);
  }

  selectShips = (index) => {
    const arr = this.state.selectedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({selectedShips: arr})
    console.log(this.state.selectedShips)
  }

  guessShips = (index) => {
    const arr = this.state.guessedShips
    arr[index] = arr[index] === 1 ? 0 : 1;
    this.setState({guessedShips: arr})
    console.log(this.state.guessedShips)
  }

  submitDeployerGuess = () => {

  }

  submitAttacherGuess = () => {

  }

  render() {
    let wallet;
    let grid;
    switch(this.state.status) {
      case 'starting':
        wallet = null;
        break;
      case 'landing':
        console.log('landing')
        wallet = <button className="header-button" onClick={this.connectAccount}>Connect Wallet</button>
        break;
      case 'connected':
        console.log('connected');
        wallet = (
          <div>
            <div>Balance: {this.state.balance}</div>
            <input onChange={(e) => this.setState({fundAmount: e.target.value})} />
            <button onClick={this.fundAccount}>Fund Wallet</button>
            <br/>
            <button onClick={() => this.setState({status: 'select-player'})}>Play</button>
          </div>
        )
        break;
      case 'select-player':
        console.log('select-player');
        wallet = (
          <div>
            <div>Balance: {this.state.balance}</div>
            Select player:
            <button onClick={() => this.setState({status: 'deployer-start'})}>Deployer</button>
            <button onClick={() => this.setState({status: 'attacher-start'})}>Attacher</button>
          </div>
        )
        break;
      case 'deployer-start':
        console.log('deployer-start');
        wallet = (
          <div>
            <div>Balance: {this.state.balance}</div>
            <input onChange={(e) => {this.setState({wager: e.target.value})}} placeholder="Bet amount" />
            <button onClick={this.deployAndWager}>Place Wager</button>
          </div>
        )
        break;
      case 'deployer-wait-attacher':
        console.log('deployer-wait-attacher');
        wallet = (
          <div>
            <div>Balance: {this.state.balance}</div>
            <div>Waiting for attacher...</div>
            <div>{this.state.attachInfo}</div>
          </div>
        )
        break;
      case 'attacher-start':
        console.log('attacher-start')
        wallet = (
          <div>
            <div>Balance: {this.state.balance}</div>
            <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
            <button onClick={this.attachContract}>Submit</button>
          </div>
        )
        break;
      case 'deployer-wager-select':
        wallet = (
          <div>Balance: {this.state.balance}</div>
        )

        grid = (
          <div>
            <Grid guessShips={this.selectShips} />
            <button>Submit</button>
          </div>
        )
        break;
      case 'attacher-accept-select':
        wallet = (
          <div>Balance: {this.state.balance}</div>
        )

        grid = (
          <div>
            <Grid guessShips={this.selectShips} />
            <button>Submit</button>
          </div>
        )
        break;
      case 'deploy-guess':
        wallet = (
          <div>Balance: {this.state.balance}</div>
        )

        grid = (
          <div>
            <Grid guessShips={this.guessShips} />
            <button onClick={this.submitDeployerGuess}>Submit</button>
          </div>
        )
        break;
      case 'attacher-guess':
        wallet = (
          <div>Balance: {this.state.balance}</div>
        )

        grid = (
          <div>
            <Grid guessShips={this.guessShips} />
            <button onClick={this.submitAttacherGuess}>Submit</button>
          </div>
        )
        break;
      case 'outcome':
        console.log('what is the outcome?')
      break;
    }
    return (
      <div className="App">
        <div className="header">
          <h1>Battleship</h1>
          <img width="50px" height="50px" src={battleship} />
          {wallet}
        </div>
        
        <Description />

        {grid}
      </div>
    );
  }
}

export default App;

const Player = (Who) => ({
  ...reach.hasRandom,
  seeOutcome: (outcome) => {
    console.log(`${Who} saw outcome ${outcome}`);
  },
  informTimeout: () => {
    console.log(`${Who} observed a timeout`);
    window.dispatchEvent(new Event('timeout', { bubbles: true, cancelable: false }));
  },
  getShips: () => {
    console.log(`${Who} sets ships...`)
    return this.state.selectShips;
  },
  selectTargets: () => {
    console.log(`${Who} guesses...`)
    return this.state.guessedShips;
  }
});

const Deployer = (wager) => ({
  ...Player('Deployer'),
  wager: wager
});

const Attacher = () => ({
  ...Player('Attacher'),
  acceptWager: async (amt) => {
    console.log(`received wager: ${amt}`);
    const wager = reach.formatCurrency(amt, 4);
    console.log('accepting wager')
    // await new Promise(resolveAcceptedP => {
    //   this.setState({ acceptWager: resolveAcceptedP })
    // });
  }
});