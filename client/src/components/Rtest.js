import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../store/actions'

const Rtest = () => {
  const Astate = useSelector((Astate) => Astate)
  const dispatch = useDispatch()
  const { testing } = bindActionCreators(actions, dispatch)

  const runTest = (val) => {
    testing({value: val, ...Astate.test})
  }

  return (
    <div>
      {Astate.test.value}
      {Astate.test.value2}
      <button onClick={() => runTest(10)}>test redux</button>
    </div>
  )
}

export default Rtest