// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf

import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'
import globals from '../lib/globals'

const InitialState = {
  status: 'landing',
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

const Store = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
};

export const Context = createContext(InitialState);
export default Store
