import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, removeAllTodo } from '../features/todo/todoSlice'

const AddTodo = ({ selectedTodo, setSelectedTodo }) => {
    const [todoText, setTodoText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedTodo) {
            setTodoText(selectedTodo.name);
        } else {
            setTodoText('');
        }
    }, [selectedTodo]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedTodo) {

            dispatch(updateTodo({ id: selectedTodo.id, name: todoText }));
            setSelectedTodo(null);
        } else {
            if (todoText) {
                dispatch(addTodo(todoText));
            }
            setTodoText('');
        }
    };

    const todos = useSelector(state => state.todos);

    const deleteAll = () => {

        let confirmation = window.confirm("Are you sure you want to delete all items?");
        if (confirmation) {
            dispatch(removeAllTodo());
        }

    };

    return (
        <>
            <center>
                {todos.length !== 0 &&
                    <button
                        type="submit"
                        className="text-white font-bold bg-orange-500 py-3 px-8 rounded-lg shadow-md hover:bg-orange-600 transition-all focus:outline-none focus:ring-2 hover:scale-105"
                        onClick={deleteAll}
                    >
                        Remove All
                    </button>
                }
                <form onSubmit={handleFormSubmit} className="m-3 space-x-3  flex justify-center">

                    <input
                        type="text"
                        className="rounded-lg border  px-6 py-3 focus:outline-none border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-400 "
                        placeholder="Enter task name"
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="text-white font-bold bg-green-500 py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 hover:scale-105"
                        onClick={handleFormSubmit}
                    >
                        {selectedTodo ? 'Update' : 'Save'}
                    </button>
                </form>
            </center>


        </>
    )
}

export default AddTodo