import React, { useEffect, useContext, useState } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import {
  BrowserRouter, Route, RouteComponentProps, withRouter, Switch, Link, NavLink
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/actions'

import globals from '../lib/globals'
import '../style/app.scss'

import Landing from './pages/Landing'
import Game from './pages/Game'
import Outcomes from './pages/Outcomes'

import Header from './layout/Header'
import Balance from './common/Balance'
import Footer from './layout/Footer'

import DialogSlide from './common/DialogSlide'

const App = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  // When components mounts and unmounts
  useEffect(async () => {
    window.onerror = (message, source, lineno, colno, error) => {
      if (globals.DEBUG) console.error(message, source, lineno, colno, error)
    }

    window.onpopstate = (event) => {
      console.log(event)
    }

    const reach = await loadStdlib('ALGO')

    if (globals.NETWORK_STATE === 'testnet') {
      await reach.setProviderByName('TestNet')
      await reach.setSignStrategy('AlgoSigner')
    }

    appState({...rstate.main, status: 'landing', reach: reach, standardUnit: reach.standardUnit})

    return () => {
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      <Balance />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
        </Switch>
      </BrowserRouter>
      <DialogSlide />
      <Footer />
    </div>
  )
}

export default App
