import React from 'react';
import { useTodo } from '../../hooks/useTodo';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTodo();
  
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Todo App</h1>
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
  );
};