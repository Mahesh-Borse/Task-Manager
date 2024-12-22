import { createSlice, nanoid } from "@reduxjs/toolkit";
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/LocalStorage'

const getTodosFromLocalStorage = loadFromLocalStorage();

const initialState = {
    todos: getTodosFromLocalStorage,
};


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload,
                isComplete: false,
            }
            state.todos.push(todo);

            saveToLocalStorage(state.todos);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            saveToLocalStorage(state.todos);
        },
        removeAllTodo: (state) => {
            state.todos = [];
            saveToLocalStorage(state.todos);
        },
        updateTodo: (state, action) => {
            const { id, name } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.name = name;
            }
            saveToLocalStorage(state.todos);
        },
        completeTodo: (state, action) => {

            const todoToUpdate = state.todos.find((todo) => todo.id === action.payload);
            if (todoToUpdate) {
                todoToUpdate.isComplete = !todoToUpdate.isComplete;
            }
            saveToLocalStorage(state.todos);
        }
    },
});

export const { addTodo, removeTodo, updateTodo, removeAllTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;