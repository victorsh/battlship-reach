import { Dispatcher } from '../store/Store'
import globals from './globals'

const fund_account = async (e, dispatch, state) => {
  e.preventDefault()

  if (isNaN(state.fundAmount)) {
    alert('Invalid fund input')
    Dispatcher(dispatch, {fundAmount: ''})
    return
  }

  if (Number(state.fundAmount) < globals.MIN_VALUE) {
    alert('Fund amount must be a value greater than 0')
    Dispatcher(dispatch, {fundAmount: ''})
    return
  }

  Dispatcher(dispatch, {loadingFaucet: true})
  
  try {
    const faucet = await state.reach.getFaucet()
    await state.reach.transfer(faucet, state.account, state.reach.parseCurrency(state.fundAmount))
    let balance = await state.reach.balanceOf(state.account)
    balance = state.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    Dispatcher(dispatch, {balance, loadingFaucet: false, fundAmount: null})
  } catch (e) {
    if (globals.DEBUG) console.log('failed to get faucet: ', e)
    Dispatcher(dispatch, {loadingFaucet: false, error: e})
    setTimeout(() => {
      Dispatcher(dispatch, {error: ''});
      if (globals.DEBUG) console.log('ERROR TIMEOUT FAUCET')
    }, globals.ERROR_TIMEOUT)
  }
}

export default fund_account
