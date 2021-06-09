import globals from './globals';

const mock_guess = () => {
  const board = [];
  let guess_count = 0;
  for (let i = 0; i < globals.CONTRACT_GRID_SIZE; i++) {
    if (guess_count < globals.CONTRACT_GRID_SIZE / 2 && Math.random() > 0.5) {
      board.push(1);
      guess_count++;
    } else {
      board.push(0);
    }
  }
  if (globals.DEBUG) console.log(board)
  return board;
}

export default mock_guess;
