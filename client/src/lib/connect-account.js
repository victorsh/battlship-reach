import globals from './globals'
import { store } from '../store/store'

const connect_account = async (e) => {
  e.preventDefault()
  const state = store.getState()

  try {
    if (globals.DEBUG) console.log(state.main.account)
    if (state.main.account === null || typeof state.main.account === 'undefined') {
      const account = await state.main.reach.getDefaultAccount()
      const address = await state.main.reach.formatAddress(account.getAddress())
      if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)

      let balance = await state.main.reach.balanceOf(account)
      balance = await state.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

      await store.dispatch({type: 'main', payload: {...state.main, status: 'connected', account, address, balance}})
    } else {
      let balance = await state.main.reach.balanceOf(account)
      balance = await state.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

      await store.dispatch({type: 'main', payload: {...state.main, status: 'connected', balance}})
    }
  } catch (e) {
    if (globals.DEBUG) console.log(e)
    await store.dispatch({type: 'main', payload: {...state.main, error: e}})
    setTimeout(async () => await store.dispatch({type: 'main', payload: {...state.main, error: ''}}), globals.ERROR_TIMEOUT)
  }
}

export default connect_account
