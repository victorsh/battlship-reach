import React, { useContext } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { Context } from '../store/Store'

import globals from '../lib/globals'
import dispatcher from './common/dispatcher'

import Grid from './Grid'

const Game = () => {
  const [state, dispatch] = useContext(Context)

  submitSelection = () => {
    if (globals.DEBUG) console.log(`${state.player} has clicked submitSelection().`)
    try {
      globals.resolveSelectP(state.selectedShips)
      dispatcher({status: 'submitted-selection', shipSubmit: false}, dispatch)
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      dispatcher({errorMessage: 'Failed to submit selections, something went wrong :('}, dispatch)
      this.handleReset()
    }
  }
  submitGuess = () => {
    if (globals.DEBUG) console.log(`${state.player} has clicked submitGuess().`)
    try {
      globals.resolveGuessP(state.guessedShips)
      dispatcher({status: 'submitted-guess', shipSubmit: false}, dispatch)
    } catch (e) {
      if (globals.DEBUG) console.log(e)
      dispatcher({errorMessage: 'Failed to submit guesses, something went wrong :('}, dispatch)
      handleReset()
    }
  }

  switch (state.status) {
    case 'player-select-ships': return (
      <>
        {state.outcome === 1 ? <div className='guide-text'>Draw! Occurring in the previous round</div> : ''}
        <div className='guide-text'>Select where you would like to place your ships. You must select 3 spaces.</div>
        <Grid shipSelections={this.shipSelections} type="select" />
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
          {state.shipSubmit
            ? <Button onClick={this.submitSelection}>Submit</Button>
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
        <Grid shipSelections={this.shipSelections} type="guess" />
        <div style={{margin: '2vw', width: '20%', display: 'flex', justifyContent: 'space-between'}}>
          <Button variant='danger' onClick={() => alert('You can\'t go back!')}>Back</Button>
          {state.shipSubmit
            ? <Button onClick={this.submitGuess}>Submit</Button>
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
