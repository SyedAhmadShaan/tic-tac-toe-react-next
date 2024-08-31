import React from 'react';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center text-2xl font-bold cursor-pointer focus:outline-none hover:bg-gray-300 transition-colors duration-200"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
