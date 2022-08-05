import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer';


const initialState = [];

const init = () => JSON.parse( localStorage.getItem('todos')) || [];

export const useTodo = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    

    const handleAddTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        };

        dispatch(action);
    };

    const handleRemoveTodo = (todoId) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todoId
        };

        dispatch(action);
    };

    const handleToggleTodo = (todoId) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todoId
        };

        dispatch(action);
    }
    return {
        todos,
        todosTotalCount: todos.length,
        todosPendingCount: todos.filter(t => !t.done).length,
        handleAddTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}
