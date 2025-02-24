
import { useTodo } from '../../hooks/useTodo';
import { Sun, Moon, CheckSquare } from 'lucide-react';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTodo();
  
  return (
    <div className="flex justify-between items-center mb-10">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl transition-colors duration-300 ${
          darkMode 
            ? 'bg-blue-500/10' 
            : 'bg-blue-500/10'
        }`}>
          <CheckSquare className={`w-8 h-8 ${
            darkMode 
              ? 'text-blue-400' 
              : 'text-blue-500'
          }`} />
        </div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Tasks</h1>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode 
              ? 'text-gray-400' 
              : 'text-gray-600'
          }`}>Stay organized, stay productive</p>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
          darkMode 
            ? 'bg-gray-800 hover:bg-gray-700 shadow-lg shadow-black/20' 
            : 'bg-white hover:bg-gray-50 shadow-lg shadow-indigo-500/10'
        }`}
      >
        {darkMode 
          ? <Sun className="w-5 h-5 text-yellow-400" /> 
          : <Moon className="w-5 h-5 text-indigo-500" />
        }
      </button>
    </div>
  );
}