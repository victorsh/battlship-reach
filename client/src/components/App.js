import React from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { Button, Alert, FormControl, InputGroup } from 'react-bootstrap'

import Description from './Description'
import Grid from './Grid'

import * as backend from '../../backend/index.main.mjs'
import globals from '../lib/globals'
import mock_guess from '../lib/mock-guess'
import mock_select from '../lib/mock-select'

import '../style/app.css'

import algorandLogo from '../assets/algorand-algo-logo.svg'
import reachLogoVertical from '../assets/reach-vertical.svg'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Player State
      account: null,
      address: null,
      balance: 0,
      player: null,
      // Game State
      status: 'starting',
      fundAmount: '',
      wager: '1',
      attachInfo: '',
      selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      outcome: null,
      // Player Interactions
      acceptTerms: null,
      submitSelection: null,
      submitGuess: null,
      showCopyAlert: false,
      shipSubmit: false
    }
  }

  async componentDidMount() {
    const reach = await loadStdlib('ALGO')
    const { standardUnit } = reach

    this.setState({status: 'landing', reach: reach, standardUnit: standardUnit})
  }

  connectAccount = async (e) => {
    e.preventDefault()

    const account = await this.state.reach.getDefaultAccount()
    const address = await this.state.reach.formatAddress(account.getAddress())
    if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)

    let balance = await this.state.reach.balanceOf(account)
    balance = this.state.reach.formatCurrency(balance, 4)

    this.setState({account, address, balance, status: 'connected'})
  }
  fundAccount = async (e) => {
    e.preventDefault()

    const fundAmount = this.state.fundAmount
    if (isNaN(fundAmount)) {
      alert('Invalid fund input')
      this.setState({fundAmount: ''})
      return
    }

    if (Number(fundAmount) < 0.0001) {
      alert('Fund amount must be a value greater than 0')
      this.setState({fundAmount: ''})
      return
    }

    this.setState({loadingFaucet: true})
    try {
      const faucet = await this.state.reach.getFaucet()
      await this.state.reach.transfer(faucet, this.state.account, this.state.reach.parseCurrency(this.state.fundAmount))
      let balance = await this.state.reach.balanceOf(this.state.account)
      balance = this.state.reach.formatCurrency(balance, 4)
      this.setState({balance, loadingFaucet: false, fundAmount: 0})
      this.setState({fundAmount: ''})
    } catch (e) {
      if (globals.DEBUG) console.log('failed to get faucet: ', e)
      this.setState({loadingFaucet: false})
    }
  }
  deployAndWager = async (e) => {
    e.preventDefault()

    const wager = this.state.wager

    if (isNaN(wager)) {
      alert('Wager must be a number.')
      this.setState({wager: ''})
      return
    }

    if (Number(wager) < 0.001) {
      alert('Wager must be greater that 0.001')
      this.setState({wager: ''})
      return
    } 

    if (globals.DEBUG) console.log('deployer-wait-deploy')
    const ctc = this.state.account.deploy(backend)
    this.setState({status: 'deployer-wait-deploy'})
    if (globals.DEBUG) console.log('deployer-wait-attacher')

    const parsedWager = this.state.reach.parseCurrency(wager)
    backend.deployer(ctc, this.Deployer(parsedWager))
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2)
    this.setState({attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'})
  }
  attachContract = async (e) => {
    e.preventDefault()

    if (globals.DEBUG) console.log('Attaching to contract.')
    const parsed_info = await JSON.parse(this.state.attachInfo)
    if (globals.DEBUG) console.log(`Contract info: ${parsed_info.toString()}`)
    const ctc = await this.state.account.attach(backend, parsed_info)
    if (globals.DEBUG) console.log('Contract found and attached to backend.')
    await backend.attacher(ctc, this.Attacher())
    if (globals.DEBUG) console.log('Attacher has been attached to contract.')
  }

  // Method trigger on player interaction
  copyContractInfo = (e) => {
    e.preventDefault()
    if (globals.DEBUG) console.log('Deployer copied contract info to clipboard.')
    navigator.clipboard.writeText(this.state.attachInfo)
    this.setState({showCopyAlert: true})
    setTimeout(() => this.setState({showCopyAlert: false}), 3000)
  }
  acceptTerms = (e) => {
    e.preventDefault()
    if (globals.DEBUG) console.log('Attacher has clicked acceptTerms().')
    this.state.acceptTerms()
    this.setState({status: 'attacher-wait-deployer'})
  }
  submitSelection = (e) => {
    e.preventDefault()
    if (globals.DEBUG) console.log(`${this.state.player} has clicked submitSelection().`)
    this.state.submitSelection(this.state.selectedShips)
    this.setState({status: 'submitted-selection', shipSubmit: false})
  }
  submitGuess = (e) => {
    e.preventDefault()
    if (globals.DEBUG) console.log(`${this.state.player} has clicked submitGuess().`)
    this.state.submitGuess(this.state.guessedShips)
    this.setState({status: 'submitted-guess', shipSubmit: false})
  }

  /* passed to grid */
  shipSelections = (index, type, allowSubmit) => {
    if(type === 'select') {
      const arr = this.state.selectedShips
      arr[index] = arr[index] === 1 ? 0 : 1
      this.setState({selectedShips: arr, shipSubmit: allowSubmit})
    } else if (type === 'guess') {
      const arr = this.state.guessedShips
      arr[index] = arr[index] === 1 ? 0 : 1
      this.setState({guessedShips: arr, shipSubmit: allowSubmit})
    } else {
      alert('wrong array type in ship selection')
    }
  }

  BalanceContainer = () => {
    return (this.state.status === 'starting' || this.state.status === 'landing')
      ? null
      : (
        <div className="balance">
          <span>Balance</span>
          <span>{this.state.balance} {this.state.standardUnit}</span>
        </div>
      )
  }

  OutcomeContainer = () => {
    switch(this.state.outcome) {
      case 0: return <div>{this.state.player === 'attacher' ? 'You win!' : 'You lose!'}</div> // attacher wins
      case 1: return <div>{'Draw! Restarting game to ship select.'}</div>
      case 2: return <div>{this.state.player === 'deployer' ? 'You win!' : 'You lose!'}</div> // deployer wins
      default: return <div>Something went wrong :(</div>
    }
  }

  handleDraw = () => {
    if (globals.DEBUG) console.log('handle draw')

    this.setState({
      status: 'player-select-ships',
      selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      acceptTerms: null,
      submitSelection: null,
      submitGuess: null,
      shipSubmit: false,
      outcome: null,
    })
  } 

  handleReset = () => {
    if (globals.DEBUG) console.log('handle reset')

    this.setState({
      status: 'connected',
      player: null,
      fundAmount: '',
      wager: '1',
      attachInfo: '',
      showCopyAlert: false,
      selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
      acceptTerms: null,
      submitSelection: null,
      submitGuess: null,
      shipSubmit: false,
      outcome: null,
    })
  }

  /* PLAYER OBJECTS */
  Player = (Who) => ({
    ...this.state.reach.hasRandom,
    seeOutcome: async (outcome) => {
      if (globals.DEBUG) console.log(`Event outcome, player: ${this.state.player}, status: ${this.state.status}, outcome: ${outcome.toString()}`)
      let balance = await this.state.reach.balanceOf(this.state.account)
      balance = this.state.reach.formatCurrency(balance, 4)
      this.setState({balance, status: 'outcome', outcome: outcome.toString()})
      setTimeout(() => this.handleDraw(), 3000)
    },
    loadingResult: async (load) => {
      if (globals.DEBUG) console.log(`Event loadingResult, player: ${this.state.player}, status: ${this.state.status}, load: ${load.toString()}`)
    },
    informTimeout: () => {
      if (globals.DEBUG) console.log(`Event timeout, player: ${this.state.player}, status: ${this.state.status}`)
      this.setState({status: 'timeout'})
    },
    selectShips: async () => {
      if (globals.DEBUG) console.log(`${Who} sets ships...`)
      let ships = await new Promise(resolveSelectP => {
        if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.state.player}, status: ${this.state.status}`)
        this.setState({status: `player-select-ships`, submitSelection: resolveSelectP})
      })

      if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`)
      // ships = mock_select()
      ships = globals.test_array

      return ships
    },
    guessShips: async () => {
      if (globals.DEBUG) console.log(`${Who} guesses...`)
      let ships = await new Promise(resolveGuessP => {
        if (globals.DEBUG) console.log(`Event submit-guesses, player: ${this.state.player}, status: ${this.state.status}`)
        this.setState({status: `player-guess-ships`, submitGuess: resolveGuessP})
      })

      if (globals.DEBUG) console.log(`Guess Ships method resolved. SHIPS: ${ships}`)
      // ships = mock_guess()
      ships = globals.test_array

      return ships
    }
  })
  Deployer = (wager) => ({
    ...this.Player('Deployer'),
    wager: wager
  })
  Attacher = () => ({
    ...this.Player('Attacher'),
    acceptWager: async (amt) => {
      const formattedAmt = this.state.reach.formatCurrency(amt)
      if (globals.DEBUG) console.log('Attacher received wager: ', formattedAmt)
      return await new Promise(resolveAcceptP => {
        if (globals.DEBUG) console.log(
          `Event accept-wager,
          player: ${this.state.player},
          status: ${this.state.status},
          wager: ${formattedAmt}`
        )
        this.setState({status: 'attacher-accept-wager', acceptTerms: resolveAcceptP, wager: formattedAmt})
      })
    }
  })

  render() {
    let wallet = ''
    switch(this.state.status) {
      case 'starting':
        if (globals.DEBUG) console.log('starting')
        break
      case 'landing':
        if (globals.DEBUG) console.log('landing')
        wallet = (
          <div className='connect-wallet'>
            <div style={{fontSize: '1.5em'}}>Connect you Algorand wallet to get started.</div>
            <Button style={{marginTop: '5%'}}variant='success' onClick={this.connectAccount}>Connect Wallet</Button>
          </div>
        )
        break
      case 'connected':
        if (globals.DEBUG) console.log('connected')
        wallet = (
          <div className='wallet-container'>
            <div className='fund'>
              <InputGroup size='sm' className='mb-3'>
                <FormControl
                  value={this.state.fundAmount}
                  onChange={(e) => {this.setState({fundAmount: e.target.value})}}
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Append>
                  <Button variant='secondary' disabled>ALGO</Button>
                </InputGroup.Append>
                <InputGroup.Append>
                  <Button variant='success' onClick={this.fundAccount}>Fund</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
            <div style={{width: '33%', display: 'flex', alignItems: 'baseline'}}>
              {this.state.loadingFaucet ? <div>Loading funds from faucet...</div> : null}
            </div>
            <Button onClick={() => this.setState({status: 'select-player'})}>Play</Button>
          </div>
        )
        break
      case 'select-player':
        if (globals.DEBUG) console.log('select-player')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Select Player</div>
            <div style={{display: 'flex', justifyContent: 'space-around', width: '80%'}}>
              <Button variant='primary' onClick={() => this.setState({status: 'deployer-start', player: 'deployer'})}>Deployer</Button>
              <Button variant='danger' onClick={() => this.setState({status: 'attacher-start', player: 'attacher'})}>Attacher</Button>
            </div>
          </div>
        )
        break
      case 'deployer-start':
        if (globals.DEBUG) console.log('deployer-start')
        wallet = (
          <div className='wallet-container'>
            <div style={{width: '20vw'}}>
              <InputGroup size='sm' className='mb-3'>
                <FormControl onChange={(e) => {this.setState({wager: e.target.value})}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                <InputGroup.Append>
                  <Button variant='success' onClick={this.deployAndWager}>Place Wager</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        )
        break
      case 'deployer-wait-deploy':
        if (globals.DEBUG) console.log('deployer-wait-deploy')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Deploying contract...</div>
          </div>
        )
        break
      case 'deployer-wait-attacher':
        if (globals.DEBUG) console.log('deployer-wait-attacher')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Waiting for attacher...</div>
            <div style={{width: '75%', height: '100%'}}>{this.state.attachInfo}</div>
            <Button className='button-style' variant='secondary' onClick={(e) => this.copyContractInfo(e)}>Copy</Button>
          </div>
        )
        break
      case 'attacher-start':
        if (globals.DEBUG) console.log('attacher-start')
        wallet = (
          <div className='wallet-container'>
            <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
            <Button className='button-style' variant='success' onClick={this.attachContract}>Submit</Button>
          </div>
        )
        break
      case 'attacher-accept-wager':
        if (globals.DEBUG) console.log('attacher-accepts-wager')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Accept a wager of {this.state.wager} ALGO?</div>
            <Button className='button-style' variant='success' onClick={this.acceptTerms}>Accept</Button>
          </div>
        )
        break
      case 'attacher-wait-deployer':
        if (globals.DEBUG) console.log('attacher-wait-deployer')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Attached to contract. Waiting for deployer...</div>
          </div>
        )
        break
      case 'player-select-ships':
        if (globals.DEBUG) console.log('player-select-ships')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Select where you would like to place your ships. You must select 3 spaces.</div>
            <Grid shipSelections={this.shipSelections} type="select" />
            <div style={{margin: '2vw'}}>
              {this.state.shipSubmit
                ? <Button onClick={this.submitSelection}>Submit</Button>
                : <Button disabled>Submit</Button>
              }
            </div>
          </div>
        )
        break
      case 'player-guess-ships':
        if (globals.DEBUG) console.log('player-guess-ships')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Guess where you think your opponent placed their ships. You must select 3 spaces.</div>
            <Grid shipSelections={this.shipSelections} type="guess" />
            <div style={{margin: '2vw'}}>
              {this.state.shipSubmit
                ? <Button onClick={this.submitGuess}>Submit</Button>
                : <Button disabled>Submit</Button>
              }
            </div>
          </div>
        )
        break
      case 'submitted-selection':
        if (globals.DEBUG) console.log('submitted-selection')
        wallet = <div className='wallet-container'><div className='guide-text'>Waiting for guess...</div></div>
        break
      case 'submitted-guess':
        if (globals.DEBUG) console.log('submitted-guess')
        wallet = <div className='wallet-container'><div className='guide-text'>Waiting for outcome...</div></div>
        break
      case 'outcome':
        if (globals.DEBUG) console.log('outcome')
        wallet = (
          <div className='wallet-container'>
            <this.OutcomeContainer />
            <Button variant='success' onClick={this.handleReset}>Reset</Button>
          </div>
        )
        break
      case 'timeout':
        if (globals.DEBUG) console.log('outcome')
        wallet = (
          <div className='wallet-container'>
            <div className='guide-text'>Opponent did not respond in time.</div>
            <Button variant='success' onClick={this.handleReset}>Reset</Button>
          </div>
        )
        break
    }
    return (
      <div className="App">
        <div className="header">
          <h1 style={{marginLeft: "1%", background: 'inherit'}}>Battleship</h1>
          <div style={{marginRight: "1%", background: 'inherit'}}>
            <img width="40px" height="40px" style={{marginRight: '1rem', background: 'inherit'}} src={algorandLogo} />
            <img width="50px" height="50px" style={{background: 'inherit'}} src={reachLogoVertical} />
          </div>
        </div>
        <div className="wallet">
          <this.BalanceContainer />
          {wallet}
          {this.state.showCopyAlert ? <div>Copied!</div> : ''}
        </div>
        {this.state.status === 'landing' ? <Description /> : ''}
        <div className="footer-container">
          <div className="footer">footer</div>
        </div>
      </div>
    )
  }
}

export default App
