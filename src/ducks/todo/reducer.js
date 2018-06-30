import * as types from './actionTypes';

const initialState = {
    todoList: [], 
    todo: {}
};

export const filter = (state = 'Все', action) => {
    switch (action.type) {
        case types.CHANGE_TODO_FILTER:
            return action.importanceFilter;
        default:
            return state;
    }
}

export const todos = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_TODO:
            return {
                ...state,
                todo: state.todoList.find(todo => todo.id === action.id)
            };
        case types.CREATE_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.todoData]
            };
        case types.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.id)
            };
        case types.EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id !== action.todoData.id) {
                        return todo;
                    }
                    return Object.assign({}, todo, action.todoData);
            })};
        case types.COMPLETE_TODO:
            return { 
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id !== action.id) {
                        return todo;
                    }
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                        completeDate: todo.completeDate ? null : Date.now()
                    });
            })};
        default:
            return state;
    }
}