import React from 'react';
import { useTodo } from '../../hooks/useTodo';

export const TaskList = () => {
  const { tasks, updateTask, deleteTask, darkMode } = useTodo();

  return (
    <ul className="space-y-2 mb-4">
      {tasks.map(task => (
        <li 
          key={task.id}
          className={`flex items-center justify-between p-3 rounded ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.id)}
              className="h-5 w-5"
            />
            <span className={task.completed ? 'line-through' : ''}>
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-600"
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};
