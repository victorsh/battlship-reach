import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField, TextareaAutosize } from '@material-ui/core'

import { Attacher, Deployer } from '../Players'
import { Context, Dispatcher } from '../../store/Store'
import globals from '../../lib/globals'

import fund_account from '../../lib/fund-account'
import create_game from '../../lib/create-game'

const Landing = () => {
  const [state, dispatch] = useContext(Context)
  
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
          <Button variant='contained' color='primary' onClick={(e) => fund_account(e, dispatch, state)}>Fund</Button>
        </div>

        <div>Create New Game</div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <TextField id="filled-basic" label="Wager" variant="filled" />
          <Button variant='contained' color='primary' onClick={(e) => create_game(e, dispatch, state)}>Create</Button>
        </div>
        
        <div>Join Game by Contract Info</div>
        <div style={{margin: '0 auto', width: '300px', display: 'flex', justifyContent: 'space-between'}}>
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
