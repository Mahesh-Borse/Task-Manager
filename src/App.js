import { useState } from 'react';
import './App.css';
import './index.css';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';

function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);

  return (
    <>
      <div className="App items-center rounded-lg border border-gray-700 px-6 py-3 m-9">
        <h2 className="text-3xl font-bold text-gray-800 m-4">Manage Your Task List</h2>
        <AddTodo selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
        <TodoList setSelectedTodo={setSelectedTodo} />
      </div>
    </>
  );
}

export default App;
