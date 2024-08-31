import React from 'react';

interface GameStatusProps {
  winner: string | null;
  xIsNext: boolean;
  onReset: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ winner, xIsNext, onReset }) => {
  return (
    <div className="text-center mt-4">
      <div className={`text-2xl font-bold text-green-600 transition-opacity duration-300 ease-in-out ${winner ? 'opacity-100' : 'opacity-0'}`}>
        {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <button 
        onClick={onReset} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameStatus;
