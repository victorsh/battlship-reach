const globals = {
  DEBUG: true,
  CONTRACT_GRID_SIZE: 9,
  GRID_SIZE: 9,
  CURRENCY_FORMAT: 4,
  MIN_VALUE: 0.0001,
  NETWORK_STATE: 'devnet', //devnet, testnet, live
  test_array: [1, 0, 0, 1, 0, 0, 1, 0, 0],

  sleep: (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds)),
  texts: {
    balance: 'Balance',
    win: 'You win!',
    lose: 'You lose!',
    firstText: 'Connect your Algorand wallet to get started',
    connectWallet: 'Connect Wallet',
    deployer: 'Deployer',
    attacher: 'Attacher'
  },
  resolveAcceptP: null,
  resolveSelectP: null,
  resolveGuessP: null
};

export default globals;
