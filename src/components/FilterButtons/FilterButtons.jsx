
import { useTodo } from '../../hooks/useTodo';

export const FilterButtons = () => {
  const { filter, setFilter, darkMode } = useTodo();

  const buttons = ['all', 'completed', 'pending'];
  
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {buttons.map(btn => (
        <button
          key={btn}
          onClick={() => setFilter(btn)}
          className={`flex-1 sm:flex-none px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-300 font-medium transform hover:scale-105 ${
            filter === btn
              ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20'
              : darkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg shadow-indigo-500/10'
          }`}
        >
          {btn.charAt(0).toUpperCase() + btn.slice(1)}
        </button>
      ))}
    </div>
  );
}