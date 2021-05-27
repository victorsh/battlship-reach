import React from 'react';

class Player extends React.Component {
  random() { return reach.hasRandom.random() }
  seeOutcome(i) { this.setState({ outcome: intToOutcome[i] }) }
  informTimeout() { console.log('A timeout has occured from player') }

  async getShips() {
    const board = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      board.push(Math.random() > 0.5 ? 1 : 0)
    }

    return board
  }

  async selectTargets() {
    const board = [];
    let guess_count = 0;
    for (let i = 0; i < GRID_SIZE; i++) {
      if (guess_count < GRID_SIZE / 2 && Math.random() > 0.5) {
        board.push(1);
        guess_count++;
      } else {
        board.push(0);
      }
    }

    return board
  }
}

export default Player;
