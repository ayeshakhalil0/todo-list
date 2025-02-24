
import { Header } from './components/Header/Header';
import { AddTask } from './components/AddTask/AddTask';
import { TaskList } from './components/TaskList/TaskList';
import { FilterButtons } from './components/FilterButtons/FilterButtons';
import { useTodo } from './hooks/useTodo';

const App = () => {
  const { darkMode } = useTodo();
  return (
    <div className={`min-h-screen p-4 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-[#1a1c2e] to-[#121212] text-gray-100' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900'
    }`}>
      <div className="max-w-xl mx-auto pt-12">
        <div className={`rounded-2xl p-8 backdrop-blur-xl transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-900/80 shadow-2xl shadow-blue-500/10' 
            : 'bg-white/80 shadow-2xl shadow-indigo-500/10'
        }`}>
          <Header />
          <AddTask />
          <FilterButtons />
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default App;