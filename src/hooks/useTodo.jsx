import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }

  const { tasks, setTasks, filter, setFilter, darkMode, setDarkMode } = context;

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const updateTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = () => {
    switch (filter) {
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'pending':
        return tasks.filter(task => !task.completed);
      default:
        return tasks;
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return {
    tasks: filteredTasks(),
    addTask,
    updateTask,
    deleteTask,
    filter,
    setFilter,
    darkMode,
    toggleDarkMode
  };
};