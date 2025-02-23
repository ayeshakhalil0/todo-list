import React from 'react';
import { useTodo } from '../../hooks/useTodo';

export const FilterButtons = () => {
  const { filter, setFilter, darkMode } = useTodo();

  const buttons = ['all', 'completed', 'pending'];
  
  return (
    <div className="flex gap-2">
      {buttons.map(btn => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`px-3 py-1 rounded capitalize ${
            filter === btn
              ? 'bg-blue-500 text-white'
              : darkMode
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};