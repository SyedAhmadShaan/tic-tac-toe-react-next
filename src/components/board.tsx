'use client';
import { useState } from 'react';
import Square from './square';

function Board() {
  const [squares, setSquares] = useState<Array<string | null>>(Array(16).fill(null));
  const [xIsNext, setXIsNext] = useState(true); // Track whose turn it is

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return; // Ignore click if square is filled or game is won
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(16).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-1 max-w-sm w-full">
        {squares.map((value, index) => (
          <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && <div className="text-center mt-4 text-2xl font-bold">Winner: {winner}</div>}
      <button 
        onClick={handleReset} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-300"
      >
        Reset Game
      </button>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>): string | null {
  const lines = [
    [0, 1, 2, 3], // Rows
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12], // Columns
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15], // Diagonals
    [3, 6, 9, 12]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c, d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
