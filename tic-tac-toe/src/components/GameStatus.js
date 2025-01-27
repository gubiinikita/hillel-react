import React from 'react';

const GameStatus = ({ winner, isXNext, isDraw }) => {
  if (winner) {
    return <p>Winner: {winner}</p>;
  }
  if (isDraw) {
    return <p>It’s a Draw!</p>;
  }
  return <p>Next Player: {isXNext ? 'X' : 'O'}</p>;
};

export default GameStatus;
