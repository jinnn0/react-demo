import React from 'react'
import Square from './Square.jsx'


function Board({squares, handleClick }) {
    return (
        <div className="board-grid">
            {squares.map((square,index) => (
                <Square
                    key={index}
                    value={squares[index]}
                    handleClick={()=> handleClick(index)}
                 />
            ))}
        </div>
    );
}

export default Board
