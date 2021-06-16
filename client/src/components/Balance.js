import React from 'react'
import globals from '../lib/globals'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

const Balance = () => {
  // Wire Redux
  const rstate = useSelector((rstate) => rstate)
  const dispatch = useDispatch()
  const { appState } = bindActionCreators(actions, dispatch)

    // appState({
  //   status: 'landing',
  //   reach: reach,
  //   standardUnit: standardUnit,
  //   ...rstate.main
  // })

  return (rstate.main.status === 'starting' || rstate.main.status === 'landing')
  ? null
  : (
    <div className="balance">
      <span>Balance</span>
      <span>{rstate.main.balance} {rstate.main.standardUnit}</span>
    </div>
  )
}

export default Balance
