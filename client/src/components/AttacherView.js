import React, { useContext } from 'react'
import { Button  } from 'react-bootstrap'
import { Context, ResetState } from '../store/Store'
import { Attacher } from './Players'

import * as backend from '../../backend/index.main.mjs'

import globals from '../lib/globals'
import dispatcher from './common/dispatcher'

const AttacherView = () => {
  const [state, dispatch] = useContext(Context)

  const attachContract = async (e) => {
    e.preventDefault()
 
    if (globals.DEBUG) console.log('Attaching to contract.')
    const parsed_info = await JSON.parse(state.attachInfo)
    if (globals.DEBUG) console.log(`Contract info: ${parsed_info.toString()}`)
    const ctc = await state.account.attach(backend, parsed_info)
    if (globals.DEBUG) console.log('Contract found and attached to backend.')
    dispatcher({attachingContract: true}, dispatch)
    await backend.attacher(ctc, Attacher())
    dispatcher({attachingContract: false}, dispatch)
    if (globals.DEBUG) console.log('Attacher has been attached to contract.')
  }

  acceptTerms = () => {
    if (globals.DEBUG) console.log('Attacher has clicked acceptTerms().')
    try {
      globals.resolveAcceptP()
      this.setState({status: 'attacher-wait-deployer'})
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      this.setState({errorMessage: 'Failed to accept terms, something went wrong :('})
      dispatcher(ResetState, dispatch)
    }
  }
  
  switch (state.status) {
    case 'attacher-start': return (
      <>
        <div className='guide-text'>Input the contract from a deployer. {state.attachingContract ? 'Loading...' : ''}</div>
        <textarea placeholder="Contract Info: {}" onChange={(e) => dispatcher({attachInfo: e.target.value}, dispatch)}/>
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='danger' onClick={() => dispatcher({status: 'select-player'}, dispatch)}>Back</Button>
          <Button className='button-style' variant='success' onClick={(e) => attachContract(e)}>Submit</Button>
        </div>
      </>
    )
    case 'attacher-accept-wager': return (
      <>
        <div className='guide-text'>Accept a wager of {state.wager} ALGO?</div>
        <div style={{display: 'flex', width: '-1%', margin: '0 auto'}}>
          <Button className='button-style' variant='success' onClick={this.acceptTerms}>Accept</Button>
          <Button className='button-style' variant='danger' onClick={() => dispatcher({status: 'attacher-start'}, dispatch)}>Reject</Button>
          {/* TODO: Send notification to Deployer that request was rejected. */}
        </div>
      </>
    )
    case 'attacher-wait-deployer': return (
      <>
        <div className='guide-text'>Attached to contract. Waiting for deployer...</div>
      </>
    )
  }
}

export default AttacherView
