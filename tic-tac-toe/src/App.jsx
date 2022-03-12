import React, { useState } from 'react';
import Board from './Components/Board';
import { calculateWinner } from './Helper.js';
import './Components/Styles/root.scss';
import History from './Components/History';
import StatusMessage from './Components/StatusMessage';



const NEW_GAME = [
  { board: Array(9).fill(null), isXNext: true },
];

const App = () => {

  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  console.log('history', history);

  const { winner, winningSquares } = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {
      return;
    }


    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };


  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <StatusMessage winner={winner} current={current} />
      <button type="button" onClick={onNewGame}>
        Start new game
      </button>
    </div>
  );
};

export default App;