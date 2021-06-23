import React, { useContext } from 'react'
import { Context } from '../store/Store'

class Player extends React.Component {
  constructor(props) {
    super(props)
  }
  static contextType = Context

  random = () => reach.hasRandom.random()

  selectShips = async () => {
    if (globals.DEBUG) console.log(`${Who} sets ships...`)
    let ships = await new Promise(resolveSelectP => {
      if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.context[0].player}, status: ${this.context[0].status}`)
      globals.resolveSelectP = resolveSelectP
      this.context[1]({status: `player-select-ships`, submitSelection: resolveSelectP})
    })

    if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`)
    // ships = mock_select()
    // ships = globals.test_array

    return ships
  }
  guessShips = async () => {
    if (globals.DEBUG) console.log(`${Who} guesses...`)
    let ships = await new Promise(resolveGuessP => {
      if (globals.DEBUG) console.log(`Event submit-guesses, player: ${this.context[0].player}, status: ${this.context[0].status}`)
      globals.resolveGuessP = resolveGuessP
      this.context[1]({status: `player-guess-ships`, submitGuess: resolveGuessP})
    })

    if (globals.DEBUG) console.log(`Guess Ships method resolved. SHIPS: ${ships}`)
    // ships = mock_guess()
    // ships = globals.test_array

    return ships
  }

  seeOutcome = async (outcome) => {
    if (globals.DEBUG) console.log(`Event outcome, player: ${this.context[0].player}, status: ${this.context[0].status}, outcome: ${outcome.toString()}`)
    let balance = await this.context[0].reach.balanceOf(this.context[0].account)
    balance = this.context[0].reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    if (outcome === '1') {
      this.context[1]({balance, status: 'draw', outcome: outcome.toString()})
    } else {
      this.context[1]({balance, status: 'outcome', outcome: outcome.toString()})
    }
  }

  informTimeout = () => {
    if (globals.DEBUG) console.log(`Event timeout, player: ${this.context[0].player}, status: ${this.context[0].status}`)
    this.context[1]({status: 'timeout'})
  }
}

class Deployer extends Player {
  constructor(props) {
    super(props)
  }
  static contextType = Context
  setWager(wager) {
    this.context[1]({type: 'SET_STATE', payload: {status: 'landing', wager}})
  }
}

class Attacher extends Player {
  constructor(props) {
    super(props)
  }
  async acceptWager (amt) {
    const wager = this.context[0].reach.formatCurrency(amt)
    if (globals.DEBUG) console.log('Attacher received wager: ', formattedAmt)
    return await new Promise(resolveAcceptP => {
      if (globals.DEBUG) console.log(
        `Event accept-wager,
        player: ${this.context[0].player},
        status: ${this.context[0].status},
        wager: ${formattedAmt}`
      )
      globals.resolveAcceptP = resolveAcceptP
      this.context[1]({status: 'attacher-accept-wager', wager})
      
    })
  }
}

export {
  Attacher,
  Deployer
}