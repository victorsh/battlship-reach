import React, { useContext } from 'react'
import { Context } from '../store/Store'

import PreGame from './PreGame'
import AttacherView from './AttacherView'
import DeployerView from './DeployerView'
import Game from './Game'
import PostGame from './PostGame'
import Balance from './common/Balance'

const Wallet = () => {
  const [state, dispatch] = useContext(Context)
  
  let wallet = <></>
  const balance = <Balance balance={state.balance} standardUnit={state.standardUnit} />

  switch (state.status) {
    case 'landing': case 'connected': case 'select-player':
      wallet = <PreGame />; break
    case 'deployer-start': case 'deployer-wait-deploy': case 'deployer-wait-attacher':
      wallet = <DeployerView />; break
    case 'attacher-start': case 'attacher-accept-wager': case 'attacher-wait-deployer':
      wallet = <AttacherView />; break
    case 'player-select-ships': case 'player-guess-ships': case 'submitted-selection': case 'submitted-guess':
      wallet = <Game />; break
    case 'outcome': case 'timeout': case 'draw':
      wallet = <PostGame />; break
    default: wallet = <div>Wallet failed</div>
  }

  return (
    <div className='wallet-container'>
      {balance}
      {wallet}
    </div>
  )
}

export default Wallet
