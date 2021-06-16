import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

import mock_guess from '../lib/mock-guess'
import mock_select from '../lib/mock-select'

const Player = () => {
  const Astate = useSelector((Astate) => Astate)
  const dispatch = useDispatch()
  const { status } = bindActionCreators(actions, dispatch)

  random = () => {
    return reach.hasRandom.random()
  }

  informTimeout = () => {
    if (globals.DEBUG) console.log(`Event timeout, player: ${this.state.player}, status: ${this.state.status}`)
    status('timeout')
  }

  seeOutcome = () => {
    if (globals.DEBUG) console.log(`Event outcome, player: ${this.state.player}, status: ${this.state.status}, outcome: ${outcome.toString()}`)
    let balance = await this.state.reach.balanceOf(this.state.account)
    balance = this.state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    if (outcome === '1') {
      this.setState({balance, status: 'draw', outcome: outcome.toString()})
      status('draw')
    } else {
      this.setState({balance, status: 'outcome', outcome: outcome.toString()})
      status('outcome')
    }
  }

  selectShips = async () => {
    if (globals.DEBUG) console.log(`${Who} sets ships...`)
    let ships = await new Promise(resolveSelectP => {
      if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.state.player}, status: ${this.state.status}`)
      this.setState({status: `player-select-ships`, submitSelection: resolveSelectP})
      status('player-select-ships')
    })

    if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`)
    // ships = mock_select()
    // ships = globals.test_array

    return ships
  }

  guessShips = async () => {
    if (globals.DEBUG) console.log(`${Who} guesses...`)
    let ships = await new Promise(resolveGuessP => {
      if (globals.DEBUG) console.log(`Event submit-guesses, player: ${this.state.player}, status: ${this.state.status}`)
      this.setState({status: `player-guess-ships`, submitGuess: resolveGuessP})
      status('player-guess-ships')
    })

    if (globals.DEBUG) console.log(`Guess Ships method resolved. SHIPS: ${ships}`)
    // ships = mock_guess()
    // ships = globals.test_array

    return ships
  }
}

export default Player
