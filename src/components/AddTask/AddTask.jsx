import React, { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';

export const AddTask = () => {
  const { addTask, darkMode } = useTodo();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTask(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className={`flex-1 p-2 rounded border ${
            darkMode 
              ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600' 
              : 'bg-white text-gray-900 border-gray-300'
          }`}
        />
        <button 
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};