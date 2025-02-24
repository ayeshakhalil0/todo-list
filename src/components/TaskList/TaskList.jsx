
import { useTodo } from '../../hooks/useTodo';
import { Trash2 } from 'lucide-react';

export const TaskList = () => {
  const { tasks, updateTask, deleteTask, darkMode } = useTodo();

  return (
    <ul className="space-y-3 mb-8">
      {tasks.map(task => (
        <li
          key={task.id}
          className={`group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${darkMode
              ? 'bg-gray-800/50 hover:bg-gray-800/80'
              : 'bg-white/50 hover:bg-white/80'
            }`}
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => updateTask(task.id)}
                className={`h-5 w-5 rounded-lg border-2 transition-colors duration-300 cursor-pointer ${darkMode
                    ? 'border-gray-600 checked:bg-gradient-to-r checked:from-blue-500 checked:to-indigo-500 checked:border-transparent'
                    : 'border-gray-300 checked:bg-gradient-to-r checked:from-blue-500 checked:to-indigo-500 checked:border-transparent'
                  }`}
              />
            </div>
            <span className={`transition-all duration-300 ${task.completed
                ? 'line-through text-gray-500'
                : darkMode
                  ? 'text-gray-100'
                  : 'text-gray-900'
              }`}>
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${darkMode
                ? 'text-gray-400 hover:text-red-400 hover:bg-red-500/10'
                : 'text-gray-500 hover:text-red-500 hover:bg-red-500/10'
              }`}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}