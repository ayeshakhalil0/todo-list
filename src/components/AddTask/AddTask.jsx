import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import { Plus } from 'lucide-react';

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
    <form onSubmit={handleSubmit} className="mb-4 sm:mb-8">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className={`w-full p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            darkMode 
              ? 'bg-gray-800/50 text-white placeholder-gray-400 border-gray-700 focus:ring-blue-500/50 focus:ring-offset-gray-900' 
              : 'bg-white/50 text-gray-900 border-gray-200 focus:ring-blue-500/50 focus:ring-offset-white'
          }`}
        />
        <button 
          type="submit"
          className={`w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg ${
            darkMode
              ? 'shadow-blue-500/20'
              : 'shadow-indigo-500/20'
          }`}
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          Add
        </button>
      </div>
    </form>
  );
}
