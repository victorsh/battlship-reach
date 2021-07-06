import React, { useEffect, useContext, useState } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { Context } from '../store/Store'
import {
  useHistory, BrowserRouter, Route, RouteComponentProps, withRouter, Switch, Link, NavLink
} from 'react-router-dom'
import { Button } from '@material-ui/core'
import globals from '../lib/globals'
import '../style/app.css'


import Wallet from './Wallet'
import NavBar from './common/NavBar'
import Description from './layout/Description'
import Header from './layout/Header'
import Footer from './layout/Footer'


const handleBeforeUnload = (e) => {
  e.preventDefault()
  const message = 'Going back will reset the game. This feature isn\'t implemented yet.'
  e.returnValue = message
  return message
}

const App3 = () => {
  const [state, dispatch] = useContext(Context)
  const [joinGame, setJoinGame] = useState(false)
  // When components mounts and unmounts
  useEffect(async () => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.onerror = (message, source, lineno, colno, error) => {
      if (globals.DEBUG) console.log(message, source, lineno, colno, error)
    }

    const reach = await loadStdlib('ALGO')

    if (globals.NETWORK_STATE === 'testnet') {
      await reach.setProviderByName('TestNet')
      await reach.setSignStrategy('AlgoSigner')
    }

    await dispatch({
      type: 'SET_STATE',
      payload: {
        status: 'landing', reach: reach, standardUnit: reach.standardUnit
      }
    })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [])
  let join_game = false

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <Header />
            <NavBar />
            <Button variant='contained' color='primary' onClick={() => {console.log('New Game')}}>New Game</Button>
            <Button variant='contained' color='primary' onClick={() => {console.log('Join Game', joinGame); setJoinGame(true)}}>Join Game</Button>
            {joinGame ? <ul><li>wager: 1 <Button variant='contained' color='primary' >join</Button></li></ul> : ''}
            {joinGame ? console.log('yes') : console.log('no')}
            <Footer />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App3
