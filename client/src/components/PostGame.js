import React, { useContext } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Context, ResetState } from '../store/Store'

import globals from '../lib/globals'
import dispatcher from './common/dispatcher'

const OutcomeContainer = () => {
  const [state, dispatch] = useContext(Context)

  if (globals.DEBUG) console.log(`Returning Outcome Container with outcome: ${this.state.outcome}`)
  switch(state.outcome) {
    case '0': return <div>{state.player === 'attacher' ? globals.texts.win : globals.texts.lose}</div> // attacher wins
    case '1': return <div>{'Draw! Restarting game to ship select.'}</div>
    case '2': return <div>{state.player === 'deployer' ? globals.texts.win : globals.texts.lose}</div> // deployer wins
    default: return <div>Something went wrong :(</div>
  }
}

const PostGame = () => {
  const [state, dispatch] = useContext(Context)

  switch (state.status) {
    case 'outcome':
      return (
        <div className='wallet-container'>
          <OutcomeContainer />
          {state.outcome === '1' ? '' : <Button variant='success' onClick={(e) => dispatcher(ResetState, dispatch)}>Reset</Button>}
        </div>
      )
    case 'timeout':
      return (
        <div className='wallet-container'>
          <div className='guide-text'>Opponent did not respond in time.</div>
          <Button variant='success' onClick={(e) => dispatcher(ResetState, dispatch)}>Reset</Button>
        </div>
      )
    case 'draw':
      return (
        <div className='guide-text'>
          A draw has occurred! Game resetting to ship select...
        </div>
      )
  }
}

export default PostGame
