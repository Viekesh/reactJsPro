import React, { useState } from "react";
import Board from './Components/Board';
import { calculateWinner } from "./Helper";

const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));

  const [IsXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner ? `Winner is ${winner}` : `Next Player is ${IsXNext ? 'X' : 'O'}`;

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return IsXNext ? 'X' : 'O';
        }

        return square;
      })
    })

    setIsXNext(prev => !prev)
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;