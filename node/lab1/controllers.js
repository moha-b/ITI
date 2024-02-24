function createTodoObject(title, body) {
    return {
        title: title,
        body: body,
        completed: false,
    };
}

function editTodoDetails(todo, newTitle, newBody) {
    todo.title = newTitle;
    todo.body = newBody;
}

function markTodoAsCompleted(todo) {
    todo.completed = true;
}

function markTodoAsUncompleted(todo) {
    todo.completed = false;
}

function filterCompletedTodos(todos) {
    return Object.entries(todos).filter(([_, todo]) => todo.completed);
}

function filterUncompletedTodos(todos) {
    return Object.entries(todos).filter(([_, todo]) => !todo.completed);
}

module.exports = {
    createTodoObject,
    editTodoDetails,
    markTodoAsCompleted,
    markTodoAsUncompleted,
    filterCompletedTodos,
    filterUncompletedTodos,
};
