import globals from '../lib/globals'
import Attacher from '../components/Players'
import { Dispatcher } from '../store/Store'
import backend from '../../backend/index.main.mjs'

const join_game = (e, dispatch, state) => {
  e.preventDefault()

  if (globals.DEBUG) console.log('Attaching to contract.')
  const parsed_info = await JSON.parse(state.attachInfo)

  if (globals.DEBUG) console.log(`Contract info: ${parsed_info.toString()}`)
  const ctc = await state.account.attach(backend, parsed_info)

  if (globals.DEBUG) console.log('Contract found and attached to backend.')
  Dispatcher(dispatch, {attachingContract: true})

  await backend.attacher(ctc, Attacher())

  Dispatcher(dispatch, {attachingContract: false})
  if (globals.DEBUG) console.log('Attacher has been attached to contract.')
}

export default join_game
