import { store } from '../store/store'
import globals from './globals'

const fund_account = async (e) => {
  e.preventDefault()

  const state = store.getState()

  if (isNaN(state.main.fundAmount)) {
    alert('Invalid fund input', state.main.fundAmount)
    store.dispatch({type: 'main', payload:{...state.main, fundAmount: ''}})
    return
  }

  if (Number(state.main.fundAmount) < globals.MIN_VALUE) {
    alert('Fund amount must be a value greater than 0')
    store.dispatch({type: 'main', payload:{...state.main, fundAmount: ''}})
    return
  }

  store.dispatch({type: 'main', payload:{...state.main, loadingFaucet: true}})
  
  try {
    const faucet = await state.main.reach.getFaucet()
    await state.main.reach.transfer(faucet, state.main.account, state.main.reach.parseCurrency(state.main.fundAmount))
    let balance = await state.main.reach.balanceOf(state.main.account)
    balance = state.main.reach.formatCurrency(balance, globals.CURRENCY_FORMAT)
    store.dispatch({type: 'main', payload:{...state.main, balance, loadingFaucet: false, fundAmount: ''}})
  } catch (e) {
    if (globals.DEBUG) console.log('failed to get faucet: ', e)
    store.dispatch({type: 'main', payload:{...state.main, loadingFaucet: false, error: e}})
    setTimeout(() => {
      store.dispatch({type: 'main', payload:{...state.main, error: ''}})
      if (globals.DEBUG) console.log('ERROR TIMEOUT FAUCET')
    }, globals.ERROR_TIMEOUT)
  }
}

export default fund_account
