const fs = require('fs');
const path = 'todos.json';
const controller = require('./controllers');

function loadTodos() {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, 'utf-8');
        return JSON.parse(data);
    } else {
        return {};
    }
}

function saveTodos(todos) {
    fs.writeFileSync(path, JSON.stringify(todos, null, 2));
}

function addTodo(id, title, body) {
    const todos = loadTodos();
    if (todos[id]) {
        console.error(`Todo with id ${id} already exists. Please choose a different id.`);
        return;
    }
    todos[id] = controller.createTodoObject(title, body);

    saveTodos(todos);

    console.log('Todo added successfully 🎉🥳🎊');
}

function editTodo(id, newTitle, newBody) {
    const todos = loadTodos();
    
    if (!todos[id]) {
        console.error(`Todo with id ${id} does not exist.`);
        return;
    }
    
    controller.editTodoDetails(todos[id], newTitle, newBody);

    saveTodos(todos);

    console.log(`Todo with id ${id} edited successfully 🎉🎉🎉`);
}

function removeTodo(id) {
    const todos = loadTodos();
   
    if (!todos[id]) {
        console.error(`Todo with id ${id} does not exist.`);
        return;
    }

    
    delete todos[id];

    saveTodos(todos);

    console.log(`Todo with id ${id} removed successfully 🥳🥳`);
}

function checkTodo(id) {
    const todos = loadTodos();
    
    if (!todos[id]) {
        console.error(`Todo with id ${id} does not exist.`);
        return;
    }

    
    controller.markTodoAsCompleted(todos[id]);

    saveTodos(todos);

    console.log(`Todo with id ${id} marked as completed.`);
}

function uncheckTodo(id) {
    const todos = loadTodos();
   
    if (!todos[id]) {
        console.error(`Todo with id ${id} does not exist.`);
        return;
    }
    
    controller.markTodoAsUncompleted(todos[id]);

    saveTodos(todos);

    console.log(`Todo with id ${id} marked as uncompleted.`);
}

function listTodos(filter) {
    const todos = loadTodos();
    let result;

    if (filter === 'all') {
        result = todos;
    } else if (filter === 'checked') {
        result = controller.filterCompletedTodos(todos);
    } else if (filter === 'unchecked') {
        result = controller.filterUncompletedTodos(todos);
    } else {
        throw new Error('Invalid filter. Supported filters are: all, checked, unchecked.');
    }

    return result;
}

module.exports = {
    addTodo,
    editTodo,
    removeTodo,
    checkTodo,
    uncheckTodo,
    listTodos,
};
