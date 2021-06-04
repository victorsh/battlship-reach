import React from 'react';
import Description from './components/Description'

import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './backend/index.main.mjs';

import './style/App.css';

import battleship from './images/battleship.png';
import algorandLogo from './images/algorand-algo-logo.svg';
import reachLogoVertical from './images/reach-vertical.svg';

import Grid from './components/Grid'

const intToOutcome = ['Attacher wins!', 'Draw!', 'Deployer wins!'];
const GRID_SIZE = 9;

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
      address: null,
      fundAmount: '10',
      wager: '3',
      balance: 0,
      attachInfo: null,
      acceptTerms: null,
      outcome: null,
      selectedShips: new Array(16).fill(0),
      guessedShips: new Array(16).fill(0),
      status: 'starting',
      player: null
    }
  }

  async componentDidMount() {
    window.addEventListener('timeout', this.timeoutEvt);
    window.addEventListener('accept-wager', this.acceptWagerEvt);
    window.addEventListener('submit-ships', this.submitShipsEvt);
    window.addEventListener('submit-guesses', this.submitGuessesEvt);
    window.addEventListener('outcome', this.outcomeEvt);

    const reach = await loadStdlib('ALGO');
    const { standardUnit } = reach;
    await reach.setWaitPort(false);
    this.setState({status: 'landing', reach: reach, standardUnit: standardUnit});
  }

  async componentWillUnmount() {
    window.removeEventListener('timeout', this.timeoutEvt);
    window.removeEventListener('accept-wager', this.acceptWagerEvt)
    window.removeEventListener('submit-ships', this.submitShipsEvt)
    window.removeEventListener('submit-guesses', this.submitGuessesEvt)
    window.removeEventListener('outcome', this.outcomeEvt)
  }

  timeoutEvt = (e) => {
    console.log(`Event timeout, player: ${this.state.player}, status: ${this.state.status}`);
    this.setState({status: 'connected'});
  }
  acceptWagerEvt = (e) => {
    console.log(`Event accept-wager, player: ${this.state.player}, status: ${this.state.status}, wager: ${e.wager}`);
    this.setState({status: 'attacher-accept-wager', acceptTerms: e.resolveAcceptP, wager: e.wager});
  }
  submitShipsEvt = (e) => {
    console.log(`Event submit-ships, player: ${this.state.player}, status: ${this.state.status}`);

    if (this.state.player === 'deployer') {
      this.setState({status: 'deployer-select', submitSelection: e.resolveSelectP});
    } else if( this.state.player === 'attacher') {
      this.setState({status: 'attacher-select', submitSelection: e.resolveSelectP});
    } else {
      console.log('Player state is not set!: ', this.state.player);
    }
  }
  submitGuessesEvt = (e) => {
    console.log(`Event submit-guesses, player: ${this.state.player}, status: ${this.state.status}`);

    if (this.state.player === 'deployer') {
      this.setState({status: 'deployer-guess', submitGuess: e.resolveGuessP});
    } else if (this.state.player === 'attacher') {
      this.setState({status: 'attacher-guess', submitGuess: e.resolveGuessP});
    } 
  }
  outcomeEvt = (e) => {
    console.log(`Event outcome, player: ${this.state.player}, status: ${this.state.status}`);
    this.setState({status: 'outcome', outcome: e.outcome})
  }

  connectAccount = async () => {
    const account = await this.state.reach.getDefaultAccount();
    console.log(account);
    const address = await this.state.reach.formatAddress(account.getAddress());
    console.log(`Account: ${account}, Address: ${address}`);

    let balance = await this.state.reach.balanceOf(account);
    console.log(`Raw Balance: ${balance}`);
    balance = this.state.reach.formatCurrency(balance, 4);
    console.log(`Formatted Balance: ${balance}`);

    this.setState({account, address, balance, status: 'connected'});
  }

  fundAccount = async () => {
    this.setState({loadingFaucet: true});
    try {
      const faucet = await this.state.reach.getFaucet();
      await this.state.reach.transfer(faucet, this.state.account, this.state.reach.parseCurrency(this.state.fundAmount));
      let balance = await this.state.reach.balanceOf(this.state.account);
      balance = this.state.reach.formatCurrency(balance, 4);
      console.log(balance);
      this.setState({balance, loadingFaucet: false});
    } catch (e) {
      console.log('failed to get faucet: ', e);
      this.setState({loadingFaucet: false});
    }
  }

  wagerOnChange = (e) => {
    if (isNaN(e.target.value)) {
      alert('must be a number')
    }
    this.setState({wager: e.target.value})
  }

  deployAndWager = async () => {
    console.log('deployer-wait-deploy');
    this.setState({status: 'deployer-wait-deploy'});
    const ctc = await this.state.account.deploy(backend);

    console.log('deployer-wait-attacher');
    await backend.deployer(ctc, this.Deployer(this.state.wager));
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'})
  }

  attachContract = async () => {
    console.log('attaching to contract')
    const parsed_info = await JSON.parse(this.state.attachInfo)
    const ctc = await this.state.account.attach(backend, parsed_info);
    backend.attacher(ctc, this.Attacher());
    console.log('backend attached');
  }

  acceptTerms = async () => {
    await this.state.acceptTerms()
    this.setState({status: 'attacher-weger-accepted'})
  }

  submitSelection = async () => {
    await this.state.submitSelection(this.state.selectedShips);
    this.setState({status: this.state.player + '-submitted-selection'})
  }

  submitGuess = async () => {
    await this.state.submitGuess(this.state.guessShips);
    this.setState({status: this.state.player + '-submitted-guess'})
  }

  /* passed to grid */
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

  /* PLAYER OBJECTS */
  Player = (Who) => ({
    ...this.state.reach.hasRandom,
    seeOutcome: (outcome) => {
      console.log(`${Who} saw outcome ${outcome}`);
      const evt = new Event('outcome', {bubbles: true, cancelable: false });
      evt.outcome = outcome;
      console.log('dispatching outcome...');
      window.dispatchEvent(evt);
    },
    informTimeout: () => {
      console.log(`${Who} observed a timeout`);
      window.dispatchEvent(new Event('timeout', {bubbles: true, cancelable: false }));
    },
    selectShips: async () => {
      console.log(`${Who} sets ships...`)
      return await new Promise(resolveSelectP => {
        const evt = new Event('submit-ships', {bubbles: true, cancelable: false});
        evt.resolveSelectP = resolveSelectP
        console.log('dispatching select event...')
        window.dispatchEvent(evt);
      })
    },
    guessShips: async () => {
      console.log(`${Who} guesses...`)
      const ships = await new Promise(resolveGuessP => {
        const evt = new Event('submit-guess', {bubbles: true, cancelable: false});
        evt.resolveSelectP = resolveGuessP
        console.log('dispatching guess event...')
        window.dispatchEvent(evt);
      });
  
      return ships;
    }
  });
  Deployer = (wager) => ({
    ...this.Player('Deployer'),
    wager: wager
  });
  Attacher = () => ({
    ...this.Player('Attacher'),
    acceptWager: async (amt) => {
      console.log(`received wager: ${amt}`);
      // const wager = reach.formatCurrency(amt, 4);
      console.log('attacher received wager: ', amt)
      return await new Promise(resolveAcceptedP => {
        const evt = new Event('accept-wager', {bubbles: true, cancelable: false });
        evt.resolveAcceptP = resolveAcceptedP
        console.log(amt)
        evt.wager = amt;
        window.dispatchEvent(evt);
      });
    }
  });

  render() {
    let wallet;
    let grid;
    const balance = <div className="balance">Balance: {this.state.balance}</div>
    switch(this.state.status) {
      case 'starting':
        wallet = null;
        break;
      case 'landing':
        console.log('landing')
        wallet = (
          <div className='wallet-container'>
            <div style={{fontSize: '5vh'}}>Connect you Algorand wallet using the mnemonic to get started.</div>
            <button className="header-button" onClick={this.connectAccount}>Connect Wallet</button>
          </div>
        )
        break;
      case 'connected':
        console.log('connected');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div style={{width: "33%"}}>
              <input type="text" onChange={(e) => this.setState({fundAmount: e.target.value})} />
              <button onClick={this.fundAccount}>Fund Wallet</button>
              {this.state.loadingFaucet ? <div>Loading funds from faucet...</div> : null}
            </div>
            <button onClick={() => this.setState({status: 'select-player'})}>Play</button>
          </div>
        )
        break;
      case 'select-player':
        console.log('select-player');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <span>
              <h3>Select Player</h3>
              <button onClick={() => this.setState({status: 'deployer-start', player: 'deployer'})}>Deployer</button>
              <button onClick={() => this.setState({status: 'attacher-start', player: 'attacher'})}>Attacher</button>
            </span>
          </div>
        )
        break;
      case 'deployer-start':
        console.log('case deployer-start');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div styel={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <input type="text" style={{width: '10vh'}} onChange={(e) => {this.setState({wager: e.target.value})}} placeholder="Bet Amount" />
              <button onClick={() => this.deployAndWager()}>Place Wager</button>
            </div>
          </div>
        )
        break;
      case 'deployer-wait-deploy':
        console.log('deployer-wait-deploy');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Deploying contract...</div>
          </div>
        )
        break;
      case 'deployer-wait-attacher':
        console.log('deployer-wait-attacher');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Waiting for attacher...</div>
            <textarea readOnly={true} value={this.state.attachInfo} style={{padding: '5vh'}} />
          </div>
        )
        break;
      case 'deployer-select':
        console.log('deployer-select');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid guessShips={this.selectShips} />
            <button onClick={this.submitDeployerSelect}>Submit</button>
          </div>
        )
        break;
      case 'deployer-guess':
        console.log('deployer-guess')
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid guessShips={this.guessShips} />
            <button onClick={this.submitDeployerGuess}>Submit</button>
          </div>
        )
        break;
      case 'attacher-start':
        console.log('attacher-start')
        wallet = (
          <div className='wallet-container'>
            <div>Balance: {this.state.balance}</div>
            <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
            <button onClick={this.attachContract}>Submit</button>
          </div>
        )
        break;
      case 'attacher-accept-wager':
        wallet = (
          <div className='wallet-container'>
            <div>Balance: {this.state.balance}</div>
            <div>Wager: {this.state.wager}</div>
            <button onClick={this.acceptTerms}>Accept Wager</button>
          </div>
        );
      break;
      case 'attacher-wager-accepted':
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid guessShips={this.guessShips} />
            <button onClick={this.submitAttacherGuess}>Submit</button>
          </div>
        );
      break;
      case 'attacher-accept-select':
        console.log('attacher-accept-select');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            Wager accepted.
            <Grid guessShips={this.selectShips} />
            <button>Submit</button>
          </div>
        );
        break;
      case 'attacher-guess':
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid guessShips={this.guessShips} />
            <button onClick={this.submitAttacherGuess}>Submit</button>
          </div>
        );
        break;
      case 'outcome':
        console.log('what is the outcome?')
        wallet = (
          <div className='wallet-container'>
            {balance}
            {this.state.outcome}
          </div>
        );
      break;
    }
    return (
      <div className="App">
        <div className="header">
          <h1 style={{marginLeft: "1%", background: 'inherit'}}>Battleship</h1>
          <div style={{marginRight: "1%", background: 'inherit'}}>
            <img width="40px" height="40px" style={{padding: "1vh", background: 'inherit'}} src={algorandLogo} />
            <img width="50px" height="50px" style={{background: 'inherit'}} src={reachLogoVertical} />
          </div>
        </div>
        <div className="wallet">{wallet}</div>
        {/* <Description /> */}
        {grid}
        <div className="footer">
          footer
        </div>
      </div>
    );
  }
}

export default App;
