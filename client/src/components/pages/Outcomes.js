import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

import globals from '../../lib/globals'

const OutcomeContainer = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  if (globals.DEBUG) console.log(`Returning Outcome Container with outcome: ${rstate.main.outcome}`)
  switch(rstate.main.outcome) {
    case '0': return <div>{state.player === 'attacher' ? globals.texts.win : globals.texts.lose}</div> // attacher wins
    case '1': return <div>{'Draw! Restarting game to ship select.'}</div>
    case '2': return <div>{state.player === 'deployer' ? globals.texts.win : globals.texts.lose}</div> // deployer wins
    default: return <div>Something went wrong :(</div>
  }
}

const Outcomes = () => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  const history = useHistory()

  switch (rstate.main.status) {
    case 'outcome':
      return (
        <div className='wallet-container'>
          <OutcomeContainer />
          {rstate.main.outcome === '1' ? '' : <Button variant='success' onClick={() => appState({...rstate.main})}>Reset</Button>}
        </div>
      )
    case 'timeout':
      return (
        <div className='wallet-container'>
          <div className='guide-text'>Opponent did not respond in time.</div>
          <Button variant='success' onClick={() => appState({...rstate.main})}>Reset</Button>
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

export default Outcomes
