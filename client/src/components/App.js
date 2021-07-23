import React, { useEffect, useContext, useState } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import {
  useHistory, BrowserRouter, Route, RouteComponentProps, withRouter, Switch, Link, NavLink
} from 'react-router-dom'

import { Context, Dispatcher } from '../store/Store'
import globals from '../lib/globals'
import '../style/app.css'

import Landing from './pages/Landing'
import Game from './pages/Game'
import Outcomes from './pages/Outcomes'

import Header from './layout/Header'
import Footer from './layout/Footer'

const App3 = () => {
  const [state, dispatch] = useContext(Context)

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

    Dispatcher(dispatch, {status: 'landing', reach: reach, standardUnit: reach.standardUnit})

    return () => {
    }
  })

  return (
    <div className='App'>
      <Header />
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
      <Footer />
    </div>
  )
}

export default App3
