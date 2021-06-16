import React from 'react'
import globals from '../lib/globals'

import Description from './Description'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

const Landing = () => {
  // Wire Redux
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  const connectAccount = async (e) => {
    e.preventDefault()
  
    let balance;
    try {
      console.log(rstate.main.account)
  
      if (rstate.main.account === null) {
        const account = await rstate.main.reach.getDefaultAccount()
        const address = await rstate.main.reach.formatAddress(account.getAddress())
        if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)
    
        balance = await rstate.main.reach.balanceOf(account)
        balance = rstate.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    
        appState({account, address, balance, status: 'connected', ...rstate.main})
      } else {
        balance = await rstate.main.reach.balanceOf(rstate.main.account)
        balance = rstate.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
  
        this.setState({balance, status: 'connected'})
        appState({balance, status: 'connected', ...rstate.main})
      }
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      appState({status: 'landing', errorMessage: e, ...rstate.main})
      setTimeout(() => appState({errorMessage: '', ...rstate.main}), 5000)
    }
  }

  return (
    <div className='connect-wallet'>
      <div style={{fontSize: '1.5em', marginTop: '1.5%', marginBottom: '2%'}}>Connect you Algorand wallet to get started.</div>
      <Button style={{marginTop: '2%', marginBottom:'1.5%'}} variant='success' onClick={(e) => connectAccount(e)}>Connect Wallet</Button>
      <div className='guide-text'>{rstate.main.errorMessage.toString()}</div>
    </div>
  )
}

export default Landing
