import React from 'react';
import XIcon from './icons/XIcon';
import OIcon from './icons/OIcon';

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center text-2xl font-bold cursor-pointer focus:outline-none transition-colors duration-200 hover:bg-gray-300"
      onClick={onSquareClick}
    >
      {value === 'X' && <XIcon className="w-full h-full" />}
      {value === 'O' && <OIcon className="w-full h-full" />}
    </button>
  );
};

export default Square;
