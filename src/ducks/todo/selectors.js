export const getTodoList = (state) => {
    let filteredTodoList = state.todos.todoList;
    if (state.filter !== 'Все') {
        filteredTodoList = filteredTodoList.filter((todo) => todo.importance === state.filter);
    }
    return filteredTodoList.sort((a, b) => {
        if (a.date === '') return 1;
        if (b.date === '') return -1;
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
    }).sort((a,b) => a.completed - b.completed);
}