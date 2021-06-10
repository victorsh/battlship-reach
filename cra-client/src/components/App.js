import React from 'react';
import Description from './Description'

import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../backend/index.main.mjs';
import globals from '../lib/globals';
import mock_guess from '../lib/mock-guess';
import mock_select from '../lib/mock-select';

import '../style/App.css';

import algorandLogo from '../images/algorand-algo-logo.svg';
import reachLogoVertical from '../images/reach-vertical.svg';

import Grid from './Grid'

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
      wager: '1',
      attachInfo: null,
      selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      outcome: null,
      // Player Interactions
      acceptTerms: null,
      submitSelection: null,
      submitGuess: null
    }
  }

  async componentDidMount() {
    const reach = await loadStdlib('ALGO');
    const { standardUnit } = reach;

    this.setState({status: 'connected', reach: reach, standardUnit: standardUnit});
  }

  connectAccount = async () => {
    const account = await this.state.reach.getDefaultAccount();
    const address = await this.state.reach.formatAddress(account.getAddress());
    if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`);

    let balance = await this.state.reach.balanceOf(account);
    balance = this.state.reach.formatCurrency(balance, 4);

    this.setState({account, address, balance, status: 'connected'});
  }

  fundAccount = async () => {
    this.setState({loadingFaucet: true});
    try {
      const faucet = await this.state.reach.getFaucet();
      await this.state.reach.transfer(faucet, this.state.account, this.state.reach.parseCurrency(this.state.fundAmount));
      let balance = await this.state.reach.balanceOf(this.state.account);
      balance = this.state.reach.formatCurrency(balance, 4);
      this.setState({balance, loadingFaucet: false});
    } catch (e) {
      if (globals.DEBUG) console.log('failed to get faucet: ', e);
      this.setState({loadingFaucet: false});
    }
  }

  wagerOnChange = (e) => {
    if (isNaN(e.target.value)) {
      // UNHAPPY
      alert('must be a number');
    }
    this.setState({wager: e.target.value});
  }

  deployAndWager = async () => {
    if (globals.DEBUG) console.log('deployer-wait-deploy');
    const ctc = this.state.account.deploy(backend);
    this.setState({status: 'deployer-wait-deploy'});
    if (globals.DEBUG) console.log('deployer-wait-attacher');

    backend.deployer(ctc, this.Deployer(this.state.wager));
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'});
  }

  attachContract = async () => {
    if (globals.DEBUG) console.log('Attaching to contract.');
    const parsed_info = await JSON.parse(this.state.attachInfo);
    if (globals.DEBUG) console.log(`Contract info: ${parsed_info.toString()}`);
    const ctc = await this.state.account.attach(backend, parsed_info);
    if (globals.DEBUG) console.log('Contract found and attached to backend.');
    await backend.attacher(ctc, this.Attacher());
    if (globals.DEBUG) console.log('Attacher has been attached to contract.');
  }

  // Method trigger on player interaction
  acceptTerms = () => {
    if (globals.DEBUG) console.log('Attacher has clicked acceptTerms().');
    this.state.acceptTerms();
    this.setState({status: 'attacher-wait-deployer'});
  }

  submitSelection = () => {
    if (globals.DEBUG) console.log(`${this.state.player} has clicked submitSelection().`);
    this.state.submitSelection(this.state.selectedShips);
    this.setState({status: 'submitted-selection'});
  }

  submitGuess = () => {
    if (globals.DEBUG) console.log(`${this.state.player} has clicked submitGuess().`);
    this.state.submitGuess(this.state.guessedShips);
    this.setState({status: 'submitted-guess'});
  }

  /* passed to grid */
  shipSelections = (index, type) => {
    if(type === 'select') {
      const arr = this.state.selectedShips;
      arr[index] = arr[index] === 1 ? 0 : 1;
      this.setState({selectedShips: arr});
    } else if (type === 'guess') {
      const arr = this.state.guessedShips;
      arr[index] = arr[index] === 1 ? 0 : 1;
      this.setState({guessedShips: arr});
    } else {
      alert('wrong array type in ship selection')
    }
  }

  /* PLAYER OBJECTS */
  Player = (Who) => ({
    ...this.state.reach.hasRandom,
    seeOutcome: async (outcome) => {
      if (globals.DEBUG) console.log(`Event outcome, player: ${this.state.player}, status: ${this.state.status}, outcome: ${outcome.toString()}`);
      let balance = await this.state.reach.balanceOf(this.state.account);
      balance = this.state.reach.formatCurrency(balance, 4);
      this.setState({balance, status: 'outcome', outcome: outcome.toString()});
    },
    informTimeout: () => {
      if (globals.DEBUG) console.log(`Event timeout, player: ${this.state.player}, status: ${this.state.status}`);
      this.setState({status: `${this.state.player}-start`});
    },
    selectShips: async () => {
      if (globals.DEBUG) console.log(`${Who} sets ships...`);
      const ships = await new Promise(resolveSelectP => {
        if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.state.player}, status: ${this.state.status}`);
        this.setState({status: `${this.state.player}-select`, submitSelection: resolveSelectP});
      });

      if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`);
      ships = mock_select();

      return ships;
    },
    guessShips: async () => {
      if (globals.DEBUG) console.log(`${Who} guesses...`);
      const ships = await new Promise(resolveGuessP => {
        if (globals.DEBUG) console.log(`Event submit-guesses, player: ${this.state.player}, status: ${this.state.status}`);
        this.setState({status: `${this.state.player}-guess`, submitGuess: resolveGuessP});
      });

      if (globals.DEBUG) console.log(`Guess Ships method resolved. SHIPS: ${ships}`);
      ships = mock_guess();

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
      if (globals.DEBUG) console.log('Attacher received wager: ', amt);
      return await new Promise(resolveAcceptP => {
        if (globals.DEBUG) console.log(`Event accept-wager, player: ${this.state.player}, status: ${this.state.status}, wager: ${amt}`);
        this.setState({status: 'attacher-accept-wager', acceptTerms: resolveAcceptP, wager: amt.toString()});
      });
    }
  });

  render() {
    let wallet, grid = null;
    const balance = <div className="balance">Balance: {this.state.balance} {this.state.standardUnit}</div>
    switch(this.state.status) {
      case 'starting':
        if (globals.DEBUG) console.log('Starting');
        break;
      case 'landing':
        if (globals.DEBUG) console.log('Landing');
        wallet = (
          <div className='wallet-container'>
            <div style={{fontSize: '5vh'}}>Connect you Algorand wallet to get started.</div>
            <button className="header-button" onClick={this.connectAccount}>Connect Wallet</button>
          </div>
        );
        break;
      case 'connected':
        if (globals.DEBUG) console.log('connected');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div style={{width: '33%', display: 'flex', alignItems: 'baseline'}}>
              <input className='fund-input' type="text" onChange={(e) => this.setState({fundAmount: e.target.value})} />
              <button onClick={this.fundAccount}>Fund Wallet</button>
              {this.state.loadingFaucet ? <div>Loading funds from faucet...</div> : null}
            </div>
            <button onClick={() => this.setState({status: 'select-player'})}>Play</button>
          </div>
        );
        break;
      case 'select-player':
        if (globals.DEBUG) console.log('select-player');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <span>
              <h3>Select Player</h3>
              <button onClick={() => this.setState({status: 'deployer-start', player: 'deployer'})}>Deployer</button>
              <button onClick={() => this.setState({status: 'attacher-start', player: 'attacher'})}>Attacher</button>
            </span>
          </div>
        );
        break;
      case 'deployer-start':
        if (globals.DEBUG) console.log('case deployer-start');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div styel={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <input type="text" style={{width: '10vh'}} onChange={(e) => {this.setState({wager: e.target.value})}} placeholder="Bet Amount" />
              <button onClick={() => this.deployAndWager()}>Place Wager</button>
            </div>
          </div>
        );
        break;
      case 'deployer-wait-deploy':
        if (globals.DEBUG) console.log('deployer-wait-deploy');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Deploying contract...</div>
          </div>
        );
        break;
      case 'deployer-wait-attacher':
        if (globals.DEBUG) console.log('deployer-wait-attacher');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Waiting for attacher...</div>
            <textarea readOnly={true} value={this.state.attachInfo} style={{padding: '5vh'}} />
          </div>
        );
        break;
      case 'deployer-select':
        if (globals.DEBUG) console.log('deployer-select');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="select" />
            <button onClick={this.submitSelection}>Submit</button>
          </div>
        );
        break;
      case 'deployer-guess':
        if (globals.DEBUG) console.log('deployer-guess');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="guess" />
            <button onClick={this.submitGuess}>Submit</button>
          </div>
        );
        break;
      case 'attacher-start':
        if (globals.DEBUG) console.log('attacher-start');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
            <button onClick={this.attachContract}>Submit</button>
          </div>
        );
        break;
      case 'attacher-accept-wager':
        if (globals.DEBUG) console.log('attacher-accepts-wager');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <div>Wager: {this.state.wager}</div>
            <button onClick={this.acceptTerms}>Accept Wager</button>
          </div>
        );
        break;
      case 'attacher-wait-deployer':
        if (globals.DEBUG) console.log('attacher-wait-deployer');
        wallet = (
          <div className='wallet-container'>
            {balance}
            <br />
            Waiting for {this.state.player === 'deployer' ? 'Attacher' : 'Deployer'}
          </div>
        );
        break;
      case 'attacher-select':
        if (globals.DEBUG) console.log('attacher-select');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="select" />
            <button onClick={this.submitSelection}>Submit</button>
          </div>
        );
        break;
      case 'attacher-guess':
        if (globals.DEBUG) console.log('attacher-guess');
        wallet = <div className='wallet-container'>{balance}</div>;
        grid = (
          <div>
            <Grid shipSelections={this.shipSelections} type="guess" />
            <button onClick={this.submitGuess}>Submit</button>
          </div>
        );
        break;
      case 'submitted-selection':
        if (globals.DEBUG) console.log('submitted-selection');
        wallet = <div className='wallet-container'>{balance}<br /> waiting for guess...</div>;
        break;
      case 'submitted-guess':
        if (globals.DEBUG) console.log('submitted-guess');
        wallet = <div className='wallet-container'>{balance}<br /> waiting for outcome...</div>;
        break;
      case 'outcome':
        if (globals.DEBUG) console.log('outcome');
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
        <div className="footer-container">
          <div className="footer">hi</div>
        </div>
      </div>
    );
  }
}

export default App;
