import React from 'react'

import algorandLogo from '../assets/algorand-algo-logo.png'

const Header = () => {
  return (
    <div className="header">
    <h1 style={{marginLeft: "1%", background: 'inherit'}}>Battleship</h1>
    <div style={{marginRight: "1%", background: 'inherit'}}>
      <img width="40px" height="40px" style={{marginRight: '1rem', background: 'inherit'}} src={algorandLogo} />
      <img width='40px' height='40px' src='https://reach.sh/header/logo.svg' />
    </div>
  </div>
  )
}

export default Header
