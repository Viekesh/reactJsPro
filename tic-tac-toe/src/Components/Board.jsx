import React, { useState } from 'react';
import Square from './Square';
import './Styles/root.scss';

const Board = () => {

    const [board, setBoard] = useState(Array(9).fill(null));

    const [IsXNext, setIsXNext] = useState(false);

    console.log(board);

    const handleSquareClick = (position) => {

        if (board[position]) {
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

    const renderSquare = (position) => {
        return (
            <Square
                value={board[position]}
                onclick={() => handleSquareClick(position)}
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
