import React, { useContext } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Context } from '../store/Store'
import * as backend from '../../backend/index.main.mjs'
import { Deployer } from './Players'

import globals from '../lib/globals'
import dispatcher from './common/dispatcher'

const DeployerView = () => {
  const [state, dispatch] = useContext(Context)

  const deployAndWager = async (e) => {
    e.preventDefault()

    const wager = state.wager

    if (isNaN(wager)) {
      alert('Wager must be a number.')
      dispatcher({wager: ''}, dispatch)
      return
    }

    if (Number(wager) < 0.001) {
      alert('Wager must be greater that 0.001')
      dispatcher({wager: ''}, dispatch)
      return
    } 

    if (globals.DEBUG) console.log('deployer-wait-deploy')
    const ctc = state.account.deploy(backend)
    dispatcher({status: 'deployer-wait-deploy'}, dispatch)
    if (globals.DEBUG) console.log('deployer-wait-attacher')

    const parsedWager = state.reach.parseCurrency(wager)
    backend.deployer(ctc, Deployer(parsedWager))
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2)
    dispatcher({attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'}, dispatch)
  }

  const copyContractInfo = (e) => {
    e.preventDefault()
    if (globals.DEBUG) console.log('Deployer copied contract info to clipboard.')
    navigator.clipboard.writeText(state.attachInfo)
    dispatcher({showCopyAlert: true}, dispatch)
    setTimeout(() => dispatcher({showCopyAlert: false}, dispatch), 3000)
  }

  switch (state.status) {
    case 'deployer-start': return (
      <>
        <div style={{width: '20vw'}}>
          <InputGroup size='sm' className='mb-3'>
            <FormControl onChange={(e) => {dispatcher({wager: e.target.value}, dispatch)}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            <InputGroup.Append>
              <Button variant='success' onClick={(e) => deployAndWager(e)}>Place Wager</Button>
              <Button variant='danger' onClick={(e) => dispatcher({status: 'select-player'}, dispatch)}>Back</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </>
    )
    case 'deployer-wait-deploy': return (
      <>
        <div className='guide-text'>Deploying contract...</div>
      </>
    )
    case 'deployer-wait-attacher': return (
      <>
        <div className='guide-text'>Waiting for attacher...</div>
        <div style={{width: '75%', height: '100%', overflowX: 'scroll', background: 'rgb(200, 200, 210)'}}>{state.attachInfo}</div>
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button className='button-style' variant='secondary' onClick={(e) => copyContractInfo(e)}>Copy</Button>
          <Button variant='danger' onClick={() => alert('Can\'t go back! Wait for timeout.')}>Back</Button>
        </div>
        {state.showCopyAlert ? <div>Copied!</div> : ''}
      </>
    )
    default: ''
  }
}

export default DeployerView
