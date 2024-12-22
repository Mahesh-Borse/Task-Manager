import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, completeTodo } from '../features/todo/todoSlice';

const TodoList = ({ setSelectedTodo }) => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleEdit = (todo) => {
        setSelectedTodo(todo);
    };

    return (
        <center>
            {
                todos.length === 0
                    ? <div className='h-[30vh]'>
                        <p className="text-xl font-semibold text-gray-500">No tasks found</p>
                    </div>
                    : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                            {todos.map((todo, i) => (
                                <li key={todo.id} className="flex flex-col justify-start items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">

                                    <div className="w-full flex justify-start items-center mb-4">
                                        <button
                                            onClick={() => dispatch(completeTodo(todo.id))}
                                            className="px-4 mx-1 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
                                        >
                                            Complete
                                        </button>
                                        <button
                                            onClick={() => handleEdit(todo)}
                                            className="px-4 mx-1 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => dispatch(removeTodo(todo.id))}
                                            className="mx-1 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-all"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <p className={` text-lg mx-2 ${todo.isComplete ? "line-through text-gray-500" : "text-gray-900"}`}>
                                        {i + 1} - {todo.name}
                                    </p>
                                </li>
                            ))}
                        </ul>

                    )
            }
        </center>

    )
}

export default TodoList