import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Board from './components/Board';
import GameStatus from './components/GameStatus';
import ResetButton from './components/ResetButton';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winnerMemo = useMemo(() => calculateWinner(board), [board]);

  const isDraw = useMemo(() => {
    return !board.includes(null) && !winnerMemo;
  }, [board, winnerMemo]);

  useEffect(() => {
    if (winnerMemo) {
      setWinner(winnerMemo);
      alert(`Winner: ${winnerMemo}`);
    } else if (isDraw) {
      alert('Draw!');
    }
  }, [winnerMemo, isDraw]);

  const handleSquareClick = useCallback(
    (index) => {
      if (board[index] || winner) return;

      const newBoard = [...board];
      newBoard[index] = isXNext ? 'X' : 'O';
      setBoard(newBoard);
      setIsXNext(!isXNext);
    },
    [board, isXNext, winner]
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <GameStatus winner={winner} isXNext={isXNext} isDraw={isDraw} />
      <Board board={board} onSquareClick={handleSquareClick} />
      <ResetButton onClick={resetGame} />
    </div>
  );
};

export default App;
