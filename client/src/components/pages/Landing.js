import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  TextField,
  TextareaAutosize,
  Modal,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide
} from '@material-ui/core'

import { Attacher, Deployer } from '../Players'
import { Context, Dispatcher } from '../../store/Store'
import globals from '../../lib/globals'

import connect_account from '../../lib/connect-account'
import fund_account from '../../lib/fund-account'
import create_game from '../../lib/create-game'

const Landing = () => {
  const [state, dispatch] = useContext(Context)
  const [open, setOpen] = useState(false)
  
  const handle_fund = (e) => {
    console.log(e.target.value)
    Dispatcher(dispatch, {fundAmount: e.target.value})
  }

  const handle_wager = (e) => {
    console.log(e.target.value)
  }

  const disconnected = () => {
    return (
      <div id='disconnected'>
        <Button variant='contained' color='primary' onClick={(e) => connect_account(e, dispatch, state)}>Connect</Button>
      </div>
    )
  }

  const joinList = () => {
    const list = ['g1','g2','g3','g4','g5','g6']
    let orderedList = list.map((item) =>
      <li className='join-item' key={item}>
        {item}
        <Button className='join-button' variant='contained' color='secondary' size='small'>Join</Button>
      </li>
    )
    return (
      <>
        <div>Select from a list of already created games</div>
        <ul>{orderedList}</ul>
      </>
    )
  }

  const connected = () => {
    return (
      <div id='connected' style={{margin: '0 auto', width: '350px', textAlign: 'left'}}>
        {globals.NETWORK_STATE === 'devnet' ?
          <>
            <div>Fund Account with Faucet</div>
            <div style={{display: 'flex', justifyContent: 'left'}}>
              <TextField label='Fund' variant='filled' value={state.fundAmount} onChange={(e) => handle_fund(e)}/>
              <Button variant='contained' color='primary' onClick={(e) => fund_account(e, dispatch, state)}>Fund</Button>
            </div>
          </> : ''
        }

        <div>Create New Game</div>
        <div style={{display: 'flex', justifyContent: 'left'}}>
          <TextField label='Wager' variant='filled' onChange={(e) => handle_wager(e)} />
          <Button variant='contained' color='primary' onClick={(e) => create_game(e, dispatch, state)}>Create</Button>
        </div>
        
        <div>Join Game by Contract Info</div>
        <div style={{display: 'flex', justifyContent: 'left'}}>
          <TextareaAutosize area-label='contract-info textarea' minRows={3} placeholder='Paste contract information here...'/>
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
