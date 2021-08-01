import { combineReducers } from 'redux'
import globals from '../../lib/globals'

const initialState = {
  account: null,
  address: null,
  balance: 0,
  player: null,
  status: 'connected',
  fundAmount: '',
  wager: '1',
  attachInfo: '',
  selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  outcome: null,
  showCopyAlert: false,
  shipSubmit: false,
  attachingContract: false,
  errorMessage: ''
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
