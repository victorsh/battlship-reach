import { Dispatcher } from '../store/Store'
import globals from './globals'

const connect_account = async (e, dispatch, state) => {
  e.preventDefault()

  try {
    if (globals.DEBUG) console.log(state.account)
    if (state.account === null || typeof state.account === 'undefined') {
      const account = await state.reach.getDefaultAccount()
      const address = await state.reach.formatAddress(accout.getAddress())
      if (globals.DEBUG) console.log(`Account: ${account}, Address: ${address}`)

      let balance = await state.reach.balanceOf(account)
      balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

      Dispatcher(dispatch, {status: 'connected', account, address, balance})
    } else {
      let balance = await state.reach.balanceOf(account)
      balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)

      Dispatcher(dispatch, {status: 'connected', balance})
    }
  } catch (e) {
    if (globals.DEBUG) console.log(e)
    Dispatcher(dispatch, {error: e})
    setTimeout(() => Dispatcher(dispatch, {error: ''}), globals.ERROR_TIMEOUT)
  }
}

export default connect_account
