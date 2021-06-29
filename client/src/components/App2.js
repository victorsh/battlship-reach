import React, { useEffect, useContext } from 'react'
import { loadStdlib } from '@reach-sh/stdlib'
import { Context } from '../store/Store'

import Wallet from './Wallet'
import Description from './layout/Description'
import Header from './layout/Header'
import Footer from './layout/Footer'

import globals from '../lib/globals'

import '../style/app.css'

const handleBeforeUnload = (e) => {
  e.preventDefault()
  const message = 'Going back will reset the game. This feature isn\'t implemented yet.'
  e.returnValue = message
  return message
}

const App2 = () => {
  const [state, dispatch] = useContext(Context)
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

  return (
    <div className='App'>
      <Header />
      <Wallet />
      <Description />
      <Footer />
    </div>
  )
}

export default App2
