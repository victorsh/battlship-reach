import React from 'react'
import globals from '../lib/globals'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

const Fund = () => {
  // Wire Redux
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)
  
  const fundAccount = async (e) => {
    e.preventDefault()

    const fundAmount = this.state.fundAmount
    if (isNaN(fundAmount)) {
      alert('Invalid fund input')
      appState({fundAmount: '', ...rstate.main})
      return
    }

    if (Number(fundAmount) < globals.MIN_VALUE) {
      alert('Fund amount must be a value greater than 0')
      appState({fundAmount: '', ...rstate.main})
      return
    }

    appState({loadingFaucet: true, ...rstate.main})
    try {
      const faucet = await this.state.reach.getFaucet()
      await this.state.reach.transfer(faucet, this.state.account, this.state.reach.parseCurrency(this.state.fundAmount))
      let balance = await this.state.reach.balanceOf(this.state.account)
      balance = this.state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
      appState({balance, loadingFaucet: false, fundAmount: '', ...rstate.main})
    } catch (e) {
      if (globals.DEBUG) console.log('failed to get faucet: ', e)
      this.setState({loadingFaucet: false, errorMessage: e})
      appState({loadingFaucet: false, errorMessage: e, ...rstate.main})
      setTimeout(() => { appState({errorMessage: '', ...rstate.main}); console.log('ERROR TIMEOUT FAUCET')}, 5000)
    }
  }
    // appState({
  //   status: 'landing',
  //   reach: reach,
  //   standardUnit: standardUnit,
  //   ...rstate.main
  // })

  return (
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
}

export default Balance