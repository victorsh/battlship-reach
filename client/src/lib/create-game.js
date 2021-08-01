import { Dispatcher } from '../store/Store'
import { Deployer } from '../components/Players'
import globals from './globals'
import * as backend from '../../backend/index.main.mjs'

const create_game = async (e, dispatch, state) => {
  e.preventDefault()

  if (isNaN(state.wager)) {
    alert('Wager must be a number.')
    Dispatcher(dispatch, {wager: ''})
    return
  }
  if (Number(state.wager) < 0.001) {
    alert('Wager must be greater that 0.001')
    Dispatcher(dispatch, {wager: ''})
    return
  } 

  if (globals.DEBUG) console.log('deployer-wait-deploy')
  const ctc = state.account.deploy(backend)
  Dispatcher(dispatch, {status: 'deployer-wait-deploy'})
  if (globals.DEBUG) console.log('deployer-wait-attacher')

  const parsedWager = state.reach.parseCurrency(state.wager)
  backend.deployer(ctc, Deployer(parsedWager))
  const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2)
  Dispatcher(dispatch, {attachInfo: ctcInfoStr, status: 'deployer-wait-attacher'})
}

export default create_game
