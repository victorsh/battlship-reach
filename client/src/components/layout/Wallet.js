import React, { useContext } from 'react'

const Wallet = () => {
  const [state, dispatch] = useContext(Context)
  switch (state.status) {
    case 'landing':
    case 'connected':
    case 'landing':
    case 'select-player':
      return <PreGame />
    case 'deployer-start':
    case 'deployer-wait-deploy':
    case 'deployer-wait-attacher':
      return <Deployer />
    case 'attacher-start':
    case 'attacher-accept-wager':
    case 'attacher-wait-deploy':
      return <Attacher />
    case 'player-select-ships':
    case 'submitted-selection':
    case 'player-guess-ships':
    case 'submitted-guess':
      return <Game />
    case 'outcome':
    case 'timeout':
    case 'draw':
      return <PostGame />
  }
  return (<div>This is the wallet</div>)
}

export default Wallet
