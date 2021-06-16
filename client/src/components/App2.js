import React, { useEffect } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

import Description from './Description'
import Header from './Header'
import Grid from './Grid'

import * as backend from '../../backend/index.main.mjs'
import globals from '../lib/globals'
import mock_guess from '../lib/mock-guess'
import mock_select from '../lib/mock-select'

import '../style/app.css'

import algorandLogo from '../assets/algorand-algo-logo.png'

const App2 = () => {
  // Wire Redux
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)
  
  // When components mounts and unmounts
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.onerror = (message, source, lineno, colno, error) => {
      if (globals.DEBUG) console.log(message, source, lineno, colno, error)
    }

    const reach = await loadStdlib('ALGO')
    if (globals.NETWORK_STATE === 'testnet') {
      await reach.setProviderByName('TestNet')
      await reach.setSignStrategy('AlgoSigner')
    }
    const { standardUnit } = reach

    appState({
      status: 'landing',
      reach: reach,
      standardUnit: standardUnit,
      ...rstate.main
    })

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [])

  return (
    <div className='App'>
      <Header />
      <div className='wallet'>

      </div>
    </div>
  )
}

export default App2
