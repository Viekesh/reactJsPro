import React from 'react';

const Square = ({ value, onclick, isWinningSquares }) => {

    return (
        <button
            type='button'
            className='square'
            onClick={onclick}
            style={{ fontWeight: isWinningSquares ? 'bold' : 'normal' }}
        >
            {value}
        </button>
    );
};

export default Square;
