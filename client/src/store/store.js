/*
-> https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf
Store/Reducer has been designed to require the least amount of overhead had possible

# Example usage without Dispatcher helper method
---
  await dispatch({
    type: 'SET_STATE',
    payload: {
      status: 'landing', reach: reach, standardUnit: reach.standardUnit
    }
  })
---
*/

import React, {createContext, useReducer} from 'react';
import globals from '../lib/globals'

const InitialState = {
  status: 'landing',
  reach: null,
  standardUnit: null,
  player: null,
  account: null,
  address: null,
  balance: null,
  fundAmount: null,
  errorMessage: null,
  attachInfo: null,
  selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  outcome: null,
  loadingFaucet: false,
  showCopyAlert: false,
  attachingContract: false,
  shipSubmit: false,
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      const payload = action.payload
      return {...state, ...payload};
    default:
      return state
  }
};

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const ResetState = {
  status: 'landing',
  player: null,
  fundAmount: null,
  errorMessage: null,
  attachInfo: null,
  selectedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  guessedShips: new Array(globals.CONTRACT_GRID_SIZE).fill(0),
  outcome: null,
  loadingFaucet: false,
  showCopyAlert: false,
  attachingContract: false,
  shipSubmit: false,
}

export const Dispatcher = (dispatch, payload, reset) => {
  typeof reset === 'undefined' ? dispatch({ type: 'SET_STATE', payload: payload }) : dispatch({ type: 'SET_STATE', payload: ResetState })
}

export const Context = createContext(InitialState);
export default Store
