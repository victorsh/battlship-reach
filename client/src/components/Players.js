import React from 'react'
import { connect } from 'react-redux'
import { appState } from '../store/actions'
import { store } from '../store/store'



const Player = (Who) => ({
  ...store.getState().main.reach.hasRandom,
  setShips: async () => {
    const state = store.getState()
    console.log('set ships')
  },
  getShips: async () => {
    const state = store.getState()
    console.log('get ships')
  },
  seeOutcome: async () => {
    const state = store.getState()
    console.log('see outcome')
  },
  informTimeout: () => {
    const state = store.getState()
    console.log('inform timeout')
  }
})

const Deployer = (wager) => ({
  ...Player('Deployer'),
  wager: wager
})

const Attacher = () => ({
  ...Player('Attacher'),
  acceptWager: async (amt) => {
    const state = store.getState()
    console.log('accept wager')
  }
})


export {
  Deployer, Attacher
}

// const mapStateToProps = (state) => {
//   const main = state.main
//   return { main }
// }

// class Player extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log(this.props.main)
//   }

//   random = () => reach.hasRandom.random()
//   setShips = async () => {
//     if (globals.DEBUG) console.log(`${Who} sets ships...`)
//     let ships = await new Promise(resolveSelectP => {
//       if (globals.DEBUG) console.log(`Event submit-selections, player: ${this.props.main.player}, status: ${this.props.main.status}`)
//       globals.resolveSelectP = resolveSelectP
//       this.props.appState({...this.props.main, submitSelection: resolveSelectP})
//     })

//     if (globals.DEBUG) console.log(`Select Ships method resolved. SHIPS: ${ships}`)
//     // ships = mock_select()
//     // ships = globals.test_array

//     return ships
//   }
//   getShips = (res) => {
//     console.log('get ships::', Who)
//     res.forEach((num) => {
//       console.log(fmt(num))
//     })
//   }
//   seeOutcome = async (outcome) => {
//     if (globals.DEBUG) console.log(`Event outcome, player: ${this.props.main.player}, status: ${this.props.main.status}, outcome: ${outcome.toString()}`)
//     let balance = await this.props.main.reach.balanceOf(this.props.main.account)
//     balance = this.props.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
//     if (outcome === '1') {
//       this.props.appState({...this.props.main, balance, status: 'draw', outcome: outcome.toString()})
//     } else {
//       this.props.appState({...this.props.main, balance, status: 'outcome', outcome: outcome.toString()})
//     }
//   }
//   informTimeout = () => {
//     if (globals.DEBUG) console.log(`Event timeout, player: ${this.props.player}, status: ${this.props.status}`)
//     this.props.appState({...rstate.main, status: 'timeout'})
//   }
// }
// const ConnectPlayer = connect(mapStateToProps, { appState })(Player)

// class SubDeployer extends Player {
//   constructor(props) {
//     super(props)
//     console.log(this.props)
//     this.wager = this.props.main.wager
//   }
// }
// const Deployer = connect(mapStateToProps, { appState })(SubDeployer)

// class SubAttacher extends Player {
//   async acceptWager (amt) {
//     const wager = this.props.main.reach.formatCurrency(amt)
//     if (globals.DEBUG) console.log('Attacher received wager: ', formattedAmt)
//     return await new Promise(resolveAcceptP => {
//       if (globals.DEBUG) console.log(
//         `Event accept-wager,
//         player: ${this.props.main.player},
//         status: ${this.props.main.status},
//         wager: ${formattedAmt}`
//       )
//       globals.resolveAcceptP = resolveAcceptP
//       this.props.appState({...rstate.main, wager: wager})
//     })
//   }
// }
// const Attacher = connect(mapStateToProps, { appState })(SubAttacher)

// export {
//   Attacher, Deployer
// }