import React from 'react';
import { Header } from './components/Header/Header';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import { FilterButtons } from './components/FilterButtons/FilterButtons';
import { useTodo } from './hooks/useTodo';


const App = () => {
  const { darkMode } = useTodo();
  return (
    <div className={`min-h-screen p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-md mx-auto">
        <Header />
        <AddTask />
        <TaskList />
        <FilterButtons />
      </div>
    </div>
  );
};

export default App;