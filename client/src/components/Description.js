import React from 'react'

const Description = () => {
  return (
    <div className="description">
      <p>In this version of Battleship each player starts by selecting where they would like to place their ships.
        Each ship is the size of a single tile and can be placed anywhere on the board where a ship is not already placed.
        After the ship locations have been selected by both players, they are submitted to the Reach backend and encrypted
        so that the actual locations are not revealed.
      </p>
        
      <p>The next phase of the game is to guess where the opponent might have
        place their ships. Deviating from the actual rules of Battleship, in this iteration players select where they think
        their opponent's ships are in one turn. After both players have selected where they think their opponent placed their
        ships, those locations are sent to the backend, leading to the final stage where the outcome is determined.
      </p>
      
      <p>The backend checks to see which player guessed the most amount of opposing ship locations. The player with the most correct guesses,
        wins. If both players have the same number of correct guesses, then no winner is determined and the game starts over.
      </p>
    </div>
  );
}

export default Description;
