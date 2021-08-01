import React, { useContext } from 'react'
import { Context, Dispatcher } from '../../store/Store'

const Balance = () => {
  const [state, dispatch] = useContext(Context)

  return (
    state.account !== 'landing' ?
      <div className="balance">
        <span>Balance</span>
        <span>{state.balance} {state.standardUnit}</span>
      </div>
    : ''
  )
}

export default Balance
