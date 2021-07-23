import React from 'react'
import { Context } from '../store/Store'

class Player extends React.Component {
  static contextType = Context

  random = () => reach.hasRandom.random()
  setShips = async () => {
    if (globals.DEBUG) console.log(`${Who} sets ships...`)
    let ships = await new Promise(resolveSelectP => {
      if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.context[0].player}, status: ${this.context[0].status}`)
      globals.resolveSelectP = resolveSelectP
      this.context[1]({submitSelection: resolveSelectP})
    })

    if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`)
    // ships = mock_select()
    // ships = globals.test_array

    return ships
  }
  getShips = (res) => {
    console.log('get ships::', Who)
    res.forEach((num) => {
      console.log(fmt(num))
    })
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
  static contextType = Context
  setWager(wager) {
    this.context[1]({type: 'SET_STATE', payload: {status: 'landing', wager}})
  }
}

class Attacher extends Player {
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
      this.context[1]({wager})
    })
  }
}

export {
  Attacher,
  Deployer
}