import globals from './globals';

const mock_select = () => {
  const board = []
  for (let i = 0; i < globals.CONTRACT_GRID_SIZE; i++) {
    board.push(Math.random() > 0.5 ? 1 : 0)
  }

  if (globals.DEBUG) console.log(board)
  return board
}

export default mock_select
