import React from 'react';
import Description from './components/Description'

import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './backend/index.main.mjs';

import './style/App.css';

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
      // Player State
      account: null,
      address: null,
      balance: 0,
      player: null,
      // Game State
      status: 'starting',
      fundAmount: '10',
      wager: '3',
      attachInfo: null,
      acceptTerms: null,
      selectedShips: new Array(16).fill(0),
      guessedShips: new Array(16).fill(0),
      outcome: null,
      submitSelection: null,
      submitGuess: null
    }
  }

  async componentDidMount() {
    const reach = await loadStdlib('ALGO');
    const { standardUnit } = reach;
    try { await reach.setWaitPort(false);
    } catch (e) { console.log(e); }

    this.setState({status: 'landing', reach: reach, standardUnit: standardUnit});
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
    // Deploy the contract
    const ctc = await this.state.account.deploy(backend);

    console.log('deployer-wait-attacher');
    // Get Contract Info
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'});
  
    // Attacher wager to deployer and wait for attacher to accept
    await backend.deployer(ctc, this.Deployer(this.state.wager));

    this.setState({status: 'deployer-select'});
    console.log('wager accpeted');
  }

  attachContract = async () => {
    console.log('attaching to contract')
    const parsed_info = await JSON.parse(this.state.attachInfo)
    console.log(parsed_info)

    const ctc = await this.state.account.attach(backend, parsed_info);
    console.log('ctc created');

    await backend.attacher(ctc, this.Attacher());
    console.log('backend attached');
  }

  acceptTerms = () => {
    this.state.acceptTerms();
    this.setState({status: 'attacher-wager-accepted'})
  }

  submitSelection = async () => {
    console.log(this.state.submitSelection);
    await this.state.submitSelection(this.state.selectedShips);
    this.setState({status: this.state.player + '-submitted-selection'})
  }

  submitGuess = async () => {
    await this.state.submitGuess(this.state.guessShips);
    this.setState({status: this.state.player + '-submitted-guess'})
  }

  /* passed to grid */
  shipSelections = (index, type) => {
    if(type === 'select') {
      const arr = this.state.selectedShips
      arr[index] = arr[index] === 1 ? 0 : 1;
      this.setState({selectedShips: arr})
      console.log(this.state.selectedShips)
    } else if (type === 'guess') {
      const arr = this.state.guessedShips
      arr[index] = arr[index] === 1 ? 0 : 1;
      this.setState({guessedShips: arr})
      console.log(this.state.guessedShips)
    } else {
      alert('wrong array type in ship selection')
    }
  }

  /* PLAYER OBJECTS */
  Player = (Who) => ({
    ...this.state.reach.hasRandom,
    seeOutcome: (outcome) => {
      console.log(`Event outcome, player: ${this.state.player}, status: ${this.state.status}`);
      this.setState({status: 'outcome', outcome: outcome})
    },
    informTimeout: () => {
      console.log(`Event timeout, player: ${this.state.player}, status: ${this.state.status}`);
      this.setState({status: `${this.state.player}-start`});
    },
    selectShips: async () => {
      console.log(`${Who} sets ships...`)
      const ships = await new Promise(resolveSelectP => {
        console.log(`Event submit-selections, player: ${this.state.player}, status: ${this.state.status}`);
        this.setState({status: `${this.state.player}-deployer-select`, submitSelection: resolveSelectP});
      });

      return ships;
    },
    guessShips: async () => {
      console.log(`${Who} guesses...`)
      const ships = await new Promise(resolveGuessP => {
        console.log(`Event submit-guesses, player: ${this.state.player}, status: ${this.state.status}`);
        this.setState({status: `${this.state.player}-deployer-select`, submitGuess: resolveGuessP});
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
      console.log('attacher received wager: ', amt)
      return await new Promise(resolveAcceptP => {
        console.log(`Event accept-wager, player: ${this.state.player}, status: ${this.state.status}, wager: ${amt}`);
        this.setState({status: 'attacher-select', acceptTerms: resolveAcceptP, wager: amt.toString()});
      });
    }
  });

  render() {
    let wallet, grid;
    const balance = <div className="balance">Balance: {this.state.balance} {this.state.standardUnit}</div>
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
            <Grid shipSelections={this.shipSelections} type="select" />
            <button onClick={this.submitSelection}>Submit</button>
          </div>
        )
        break;
      case 'deployer-guess':
        console.log('deployer-guess')
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="guess" />
            <button onClick={this.submitGuess}>Submit</button>
          </div>
        )
        break;
      case 'attacher-start':
        console.log('attacher-start')
        wallet = (
          <div className='wallet-container'>
            {balance}
            <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
            <button onClick={this.attachContract}>Submit</button>
          </div>
        )
        break;
      case 'attacher-accept-wager':
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Wager: {this.state.wager}</div>
            <button onClick={this.acceptTerms}>Accept Wager</button>
          </div>
        );
        break;
      case 'attacher-select':
        console.log('attacher-select');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="select" />
            <button onClick={this.submitSelection}>Submit</button>
          </div>
        );
        break;
      case 'attacher-guess':
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="guess" />
            <button onClick={this.submitGuess}>Submit</button>
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
