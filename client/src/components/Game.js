import React from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'

import globals from '../lib/globals'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../store/actions'

import Grid from './Grid'

const Game = (props) => {
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

  const submitSelection = () => {
    if (globals.DEBUG) console.log(`${rstate.main.player} has clicked submitSelection().`)
    try {
      globals.resolveSelectP(rstate.main.selectedShips)
      appState({...rstate.main, status: 'submitted-selection', shipSubmit: false})
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      appState({...rstate.main, errorMessage: 'Failed to submit selections, something went wrong :('})
      handleReset()
    }
  }
  const submitGuess = () => {
    if (globals.DEBUG) console.log(`${state.player} has clicked submitGuess().`)
    try {
      globals.resolveGuessP(rstate.main.guessedShips)
      appState({...rstate.main, status: 'submitted-guess', shipSubmit: false})
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      appState({...rstate.main, errorMessage: 'Failed to submit guesses, something went wrong :('})
      handleReset()
    }
  }

  switch (rstate.main.status) {
    case 'player-select-ships': return (
      <>
        {rstate.main.outcome === 1 ? <div className='guide-text'>Draw! Occurring in the previous round</div> : ''}
        <div className='guide-text'>Select where you would like to place your ships. You must select 3 spaces.</div>
        <Grid shipSelections={props.shipSelections} type="select" />
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
          {state.shipSubmit
            ? <Button onClick={submitSelection}>Submit</Button>
            : <Button disabled>Submit</Button>
          }
        </div>
      </>
    )
    case 'submitted-selection': return (
      <>
        <div className='guide-text'>Waiting for opponent to guess...</div>
      </>
    )
    case 'player-guess-ships': return (
      <>
        <div className='guide-text'>Guess where you think your opponent placed their ships. You must select 3 spaces.</div>
        <Grid shipSelections={props.shipSelections} type="guess" />
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
          {state.shipSubmit
            ? <Button onClick={submitGuess}>Submit</Button>
            : <Button disabled>Submit</Button>
          }
        </div>
      </>
    )
    case 'submitted-guess': return (
      <>
        <div className='guide-text'>Waiting for outcome...</div>
      </>
    )
    default: return ''
  }
}

export default Game
