import * as types from './actionTypes';

export const createTodo = (todoData) => ({
    type: types.CREATE_TODO,
    todoData
});

export const deleteTodo = (id) => ({
    type: types.DELETE_TODO,
    id
});

export const editTodo = (todoData) => ({
    type: types.EDIT_TODO,
    todoData
});

export const completeTodo = (id) => ({
    type: types.COMPLETE_TODO,
    id
});

export const getTodo = (id) => ({
    type: types.GET_TODO,
    id
});

export const changeTodoFilter = (importanceFilter) => ({
    type: types.CHANGE_TODO_FILTER,
    importanceFilter
})

