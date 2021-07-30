import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField, TextareaAutosize } from '@material-ui/core'

import { Attacher, Deployer } from '../Players'
import { Context } from '../../store/Store'
import Dispatcher from '../../store/Dispatcher'
import globals from '../../lib/globals'

// import connect_account from '../../lib/connect-accout'
import fund_account from '../../lib/fund-account'
import create_game from '../../lib/create-game'

const Landing = () => {
  const [state, dispatch] = useContext(Context)

  const connect_account = async (e) => {
    e.preventDefault()

    dispatch({ type: 'SET_STATE', payload: {status: 'connected'} })
    // try {
    //   if (globals.DEBUG) console.log(state.account)
    //   if (state.account === null || typeof state.account === 'undefined') {
    //     const account = await state.reach.getDefaultAccount()
    //     const address = await state.reach.formatAddress(account.getAddress())
    //     if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)
  
    //     let balance = await state.reach.balanceOf(account)
    //     balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
  
    //     console.log('before dispatch')
    //     // Dispatcher(dispatch, {status: 'connected'})
    //     await dispatch({ type: 'SET_STATE', payload: {status: 'connected'} })
    //   } else {
    //     let balance = await state.reach.balanceOf(account)
    //     balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
  
    //     Dispatcher(dispatch, {status: 'connected', balance})
    //   }
    // } catch (e) {
    //   if (globals.DEBUG) console.log(e)
    //   Dispatcher(dispatch, {error: e})
    //   setTimeout(() => Dispatcher(dispatch, {error: ''}), globals.ERROR_TIMEOUT)
    // }
  }
  
  const handle_fund = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const handle_wager = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const handle_contract = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }

  const disconnected = () => {
    return (
      <div id='disconnected'>
        <Button variant='contained' color='primary' onClick={(e) => connect_account(e)}>Connect</Button>
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
        <div>
          Balance: {state.balance}
        </div>
        <div>Fund Account with Faucet</div>
        <div>
          <TextField id="filled-basic" label="Fund" variant="filled" onChange={(e) => handle_fund(e)} />
          <Button variant='contained' color='primary' onClick={(e) => fund_account(e, dispatch, state)}>Fund</Button>
        </div>

        <div>Create New Game</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <TextField id="filled-basic" label="Wager" variant="filled" onChange={(e) => handle_wager(e)} />
          <Button variant='contained' color='primary' onClick={(e) => create_game(e, dispatch, state)}>Create</Button>
        </div>
        
        <div>Join Game by Contract Info</div>
        <div style={{margin: '0 auto', width: '300px', display: 'flex', justifyContent: 'space-between'}}>
          <TextareaAutosize area-label='contract-info textarea' onChange={(e) => handle_contract(e)} />
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
      {state.status === 'connected' ? connected() : disconnected()}
    </div>
  )
}

export default Landing
