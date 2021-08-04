import { combineReducers } from 'redux'
import globals from '../lib/globals'

const initialState = {
  account: null,
  address: null,
  player: null,
  balance: 0,
  status: 'disconnected',
  fundAmount: '',
  wager: '',
  attachInfo: '',
  outcome: '',
  errorMessage: '',
  selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  showCopyAlert: false,
  shipSubmit: false,
  attachingContract: false,
  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'main':
      return action.payload
    default:
      return state
  }
}

const reducers = combineReducers({
  main: reducer
})

export default reducers
