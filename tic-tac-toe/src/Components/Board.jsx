import React from 'react';
import Square from './Square';
import './Styles/root.scss';

const Board = ({ board, handleSquareClick, winningSquares }) => {

    const renderSquare = position => {

        const isWinningSquares = winningSquares.includes(position);

        return (
            <Square
                value={board[position]}
                onclick={() => handleSquareClick(position)}
                isWinningSquares={isWinningSquares}
            />
        );
    };

    return (
        <div className='board'>

            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {/* <Square value={board[0]} />
                <Square value={board[1]} />
                <Square value={board[2]} /> */}
            </div>

            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {/* <Square value={board[3]} />
                <Square value={board[4]} />
                <Square value={board[5]} /> */}
            </div>

            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                {/* <Square value={board[6]} />
                <Square value={board[7]} />
                <Square value={board[8]} /> */}
            </div>

        </div>
    );
};

export default Board;
