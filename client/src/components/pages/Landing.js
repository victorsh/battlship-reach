import React, { useContext } from 'react'
import {
  useHistory, RouteComponentProps, withRouter, Link, NavLink
} from 'react-router-dom'
import { Button, TextField, TextareaAutosize } from '@material-ui/core'

import { Attacher, Deployer } from '../Players'

import { Context, Dispatcher } from '../../store/Store'
import globals from '../../lib/globals'

const Landing = () => {
  const [state, dispatch] = useContext(Context)

  const createGame = async (e) => {
    e.preventDefault()

    try {
      if (globals.DEBUG) console.log(state.account)
      if (state.account === null || typeof state.account === 'undefined') {
        const account = await state.reach.getDefaultAccount()
        const address = await state.reach.formatAddress(accout.getAddress())
        if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)
  
        let balance = await state.reach.balanceOf(account)
        balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
  
        Dispatcher(dispatch, {status: 'connected', account, address, balance})
      } else {
        let balance = await state.reach.balanceOf(account)
        balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

        Dispatcher(dispatch, {status: 'connected', balance})
      }

    } catch (e) {
      if (globals.DEBUG) console.log(e)
      Dispatcher(dispatch, {error: e})
      setTimeout(() => Dispatcher(dispatch, {error: ''}), 10000)
    }
  }

  const fundAccount = async (e) => {
    e.preventDefault()

    if (isNaN(state.fundAmount)) {
      alert('Invalid fund input')
      Dispatcher(dispatch, {fundAmount: ''})
      return
    }

    if (Number(state.fundAmount) < globals.MIN_VALUE) {
      alert('Fund amount must be a value greater than 0')
      Dispatcher(dispatch, {fundAmount: ''})
      return
    }

    Dispatcher(dispatch, {loadingFaucet: true})
    
    try {
      const faucet = await state.reach.getFaucet()
      await state.reach.transfer(faucet, state.account, state.reach.parseCurrency(state.fundAmount))
      let balance = await state.reach.balanceOf(state.account)
      balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
      Dispatcher(dispatch, {balance, loadingFaucet: false, fundAmount: null})
    } catch (e) {
      if (globals.DEBUG) console.log('failed to get faucet: ', e)
      Dispatcher(dispatch, {loadingFaucet: false, error: e})
      setTimeout(() => {
        Dispatcher(dispatch, {error: ''});
        if (globals.DEBUG) console.log('ERROR TIMEOUT FAUCET')
      }, 5000)
    }
  }
  
  const disconnected = () => {
    return (
      <div id='disconnected'>
        <Button variant='contained' color='primary' onClick={() => alert('Connect Wallet')}>Connect</Button>
      </div>
    )
  }

  const joinList = () => {
    const list = ['g1','g2','g3','g4','g5','g6']
    let orderedList = list.map((item) =>
      <li key={item}>{item}<Button variant='contained' color='secondary'>Join</Button></li>
    )
    return (
      <ul>{orderedList}</ul>
    )
  }

  const connected = () => {
    return (
      <div id='connected' style={{margin: '0 auto', width: '350px', textAlign: 'left'}}>
        <div>Fund Account with Faucet</div>
        <div>
          <TextField id="filled-basic" label="Fund" variant="filled" />
          <Button variant='contained' color='primary' onClick={(e) => fundAccount(e)}>Fund</Button>
        </div>

        <div>Create New Game</div>
        <div style={{display: 'flex', justifyContent: 'center'}}> {/* New Game */}
          <TextField id="filled-basic" label="Wager" variant="filled" />
          <Button variant='contained' color='primary' onClick={(e) => createGame(e)}>Create</Button>
        </div>
        
        <div>Join Game by Contract Info</div>
        <div style={{margin: '0 auto', width: '300px', display: 'flex', justifyContent: 'space-between'}}> {/* New Game */}
          <TextareaAutosize area-label='contract-info textarea' />
          <Button variant='contained' color='primary' onClick={() => {}}>Join Game</Button>
        </div>

        <div style={{}}>
          {joinList()}
        </div>
      </div>
    )
  }
  return (
    <div id='landing'>
      {state.status === 'connected' ? disconnected() : connected()}
    </div>
  )
}

export default Landing
