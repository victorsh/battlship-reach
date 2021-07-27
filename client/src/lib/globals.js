const globals = {
  resolveAcceptP: null,
  resolveSelectP: null,
  resolveGuessP: null,
  DEBUG: true,
  CONTRACT_GRID_SIZE: 9,
  GRID_SIZE: 9,
  CURRENCY_FORMAT: 4,
  MIN_VALUE: 0.0001,
  NETWORK_STATE: 'devnet', //devnet, testnet, live
  CURRENCY: 'ALGO',
  ERROR_TIMEOUT: 10000,
  test_array: [1, 0, 0, 1, 0, 0, 1, 0, 0],
  texts: {
    balance: 'Balance',
    win: 'You win!',
    lose: 'You lose!',
    firstText: 'Connect your Algorand wallet to get started',
    connectWallet: 'Connect Wallet',
    deployer: 'Deployer',
    attacher: 'Attacher'
  },
  sleep: (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds)),
};

export default globals;
