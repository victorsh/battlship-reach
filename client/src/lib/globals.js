const globals = {
  DEBUG: true,
  CONTRACT_GRID_SIZE: 16,
  GRID_SIZE: 9,
  sleep: (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))
};

export default globals;
