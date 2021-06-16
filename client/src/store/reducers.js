import { combineReducers } from 'redux'
import testReducer from './reducers/testReducer'
import appReducer from './reducers/appReducer'

const reducers = combineReducers({
  test: testReducer,
  main: appReducer 
})

export default reducers
