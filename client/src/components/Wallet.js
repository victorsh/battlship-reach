import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

import globals from '../lib/globals'

const Wallet = () => {
  // Wire Redux
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  // appState({
  //   status: 'landing',
  //   reach: reach,
  //   standardUnit: standardUnit,
  //   ...rstate.main
  // })

  let wallet = ''
  switch(this.state.status) {
    case 'starting':
      if (globals.DEBUG) console.log('starting')
      break
    case 'landing':
      if (globals.DEBUG) console.log('landing')
      wallet = (
        <div className='connect-wallet'>
          <div style={{fontSize: '1.5em', marginTop: '1.5%', marginBottom: '2%'}}>Connect you Algorand wallet to get started.</div>
          <Button style={{marginTop: '2%', marginBottom:'1.5%'}} variant='success' onClick={this.connectAccount}>Connect Wallet</Button>
          <div className='guide-text'>{this.state.errorMessage.toString()}</div>
        </div>
      )
      break
    case 'connected':
      if (globals.DEBUG) console.log('connected')
      wallet = (
        <div className='wallet-container'>
          <div className='guide-text'>{this.state.errorMessage.toString()}</div>
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
                <Button variant='outline-success' onClick={this.fundAccount}>Fund</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <div style={{width: '33%', display: 'flex', alignItems: 'baseline'}}>
            {this.state.loadingFaucet ? <div>Loading funds from faucet...</div> : null}
          </div>
          <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='danger' onClick={() => this.setState({status: 'landing'})}>Back</Button>
            <Button variant='success' onClick={() => this.setState({status: 'select-player'})}>Play</Button>
          </div>
        </div>
      )
      break
    case 'select-player':
      if (globals.DEBUG) console.log('select-player')
      wallet = (
        <div className='wallet-container'>
          <div className='guide-text'>Select Player</div>
          <div style={{display: 'flex', justifyContent: 'space-between', width: '40%'}}>
            <Button variant='danger' onClick={() => this.setState({status: 'connected'})}>Back</Button>
            <Button variant='primary' onClick={() => this.setState({status: 'deployer-start', player: 'deployer'})}>Deployer</Button>
            <Button variant='success' onClick={() => this.setState({status: 'attacher-start', player: 'attacher'})}>Attacher</Button>
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
                <Button variant='danger' onClick={() => this.setState({status: 'select-player'})}>Back</Button>
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
          <div style={{width: '75%', height: '100%', overflowX: 'scroll', background: 'rgb(200, 200, 210)'}}>{this.state.attachInfo}</div>
          <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
            <Button className='button-style' variant='secondary' onClick={(e) => this.copyContractInfo(e)}>Copy</Button>
            <Button variant='danger' onClick={() => alert('Can\'t go back! Wait for timeout.')}>Back</Button>
          </div>
          {this.state.showCopyAlert ? <div>Copied!</div> : ''}
        </div>
      )
      break
    case 'attacher-start':
      if (globals.DEBUG) console.log('attacher-start')
      wallet = (
        <div className='wallet-container'>
          <div className='guide-text'>Input the contract from a deployer. {this.state.attachingContract ? 'Loading...' : ''}</div>
          <textarea placeholder="Contract Info: {}" onChange={(e) => this.setState({attachInfo: e.target.value})}/>
          <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='danger' onClick={() => this.setState({status: 'select-player'})}>Back</Button>
            <Button className='button-style' variant='success' onClick={this.attachContract}>Submit</Button>
          </div>
        </div>
      )
      break
    case 'attacher-accept-wager':
      if (globals.DEBUG) console.log('attacher-accepts-wager')
      wallet = (
        <div className='wallet-container'>
          <div className='guide-text'>Accept a wager of {this.state.wager} ALGO?</div>
          <div style={{display: 'flex', width: '-1%', margin: '0 auto'}}>
            <Button className='button-style' variant='success' onClick={this.acceptTerms}>Accept</Button>
            <Button className='button-style' variant='danger' onClick={() => this.setState({status: 'attacher-start'})}>Reject</Button>
            {/* TODO: Send notification to Deployer that request was rejected. */}
          </div>
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
          {this.state.outcome === 1 ? <div className='guide-text'>Draw! Occurring in the previous round</div> : ''}
          <div className='guide-text'>Select where you would like to place your ships. You must select 3 spaces.</div>
          <Grid shipSelections={this.shipSelections} type="select" />
          <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
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
          <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
            <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
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
      wallet = <div className='wallet-container'><div className='guide-text'>Waiting for opponent to guess...</div></div>
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
          {this.state.outcome === '1' ? '' : <Button variant='success' onClick={this.handleReset}>Reset</Button>}
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
    case 'draw':
      if (globals.DEBUG) console.log('draw')
      wallet = (
        <div className='wallet-container'>
          <div className='guide-text'>A draw has occurred! Game resetting to ship select...</div>
        </div>
      )
  }
  return (
    <div className='wallet'>

    </div>
  )
}