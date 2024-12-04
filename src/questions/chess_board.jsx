import React, { useState } from "react";

const ChessBoard = () => {
  const [board, setBoard] = useState(createBoard());

  // Function to create the initial chess board
  function createBoard() {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const rowArr = [];
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        rowArr.push({ isBlack });
      }
      board.push(rowArr);
    }
    return board;
  }

  // Rendering each square
  const renderSquare = (row, col) => {
    const square = board[row][col];
    const piece = square.piece ? square.piece : "";
    const squareClass = square.isBlack ? "bg-black" : "bg-white";
    return (
      <div
        key={`${row}-${col}`}
        className={`w-12 h-12 ${squareClass} flex justify-center items-center`}
      >
        {piece}
      </div>
    );
  };

  // Rendering the entire chessboard
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="flex">
        {row.map((_, colIndex) => renderSquare(rowIndex, colIndex))}
      </div>
    ));
  };

  return <div>{renderBoard()}</div>;
};

export default ChessBoard;
