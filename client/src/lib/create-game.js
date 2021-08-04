import { Deployer } from '../components/Players'
import globals from './globals'
import * as backend from '../../backend/index.main.mjs'
import { store } from '../store/store'

const create_game = async (e) => {
  e.preventDefault()
  const state = store.getState()

  if (isNaN(state.main.wager)) {
    alert('Wager must be a number.')

    store.dispatch({type: 'main', payload: {...state.main, wager: ''}})
    return
  }
  if (Number(state.main.wager) < 0.001) {
    alert('Wager must be greater that 0.001')
    store.dispatch({type: 'main', payload: {...state.main, wager: ''}})
    return
  }

  try {
    if (globals.DEBUG) console.log('deployer-wait-deploy')
    const ctc = state.main.account.deploy(backend)
    // await store.dispatch({type: 'main', payload: {...state.main, status: 'deployer-wait-deploy'}})
    // await store.dispatch({type: 'main', payload: {...state.main}})
    if (globals.DEBUG) console.log('deployer-wait-attacher')
  
    const parsedWager = state.main.reach.parseCurrency(state.main.wager)
    console.log(parsedWager)
    backend.deployer(ctc, Deployer(parsedWager))
  
    const inf = await ctc.getInfo()
    console.log(inf)
    console.log('waaat')
    const ctcInfoStr = await JSON.stringify(await ctc.getInfo(), null, 2)
    console.log(ctcInfoStr)
    await store.dispatch({type: 'main', payload: {...state.main, wager: '', ctcInfoStr}})
    // await store.dispatch({type: 'main', payload: {...state.main, status: 'deployer-wait-attacher', wager: '', ctcInfoStr}})
  } catch (e) {
    if (globals.DEBUG) console.log('ERROR: ', e)
  }
}

export default create_game
