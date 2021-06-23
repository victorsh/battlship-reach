import React from 'react'

const Balance = (props) => {
  return (
    <div className="balance">
      <span>Balance</span>
      <span>{props.balance} {props.standardUnit}</span>
    </div>
  )
}

export default Balance
