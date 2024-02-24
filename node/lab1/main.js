const axios = require('axios');

const [,, action, ...args] = process.argv;

if (!action) {
    console.error('Please provide an action (add, edit, remove, check, uncheck, list).');
} else {
    if (action === 'add') {
        const [id, title, body] = args;
        if (!id || !title || !body) {
            console.error('Please provide id, title, and body for the todo.');
        } else {
            axios.post('http://localhost:3000/todos/add', { id, title, body })
                .then(response => console.log(response.data))
                .catch(error => console.error(error.message));
        }
    } else if (action === 'edit') {
        const [id, newTitle, newBody] = args;
        if (!id || !newTitle || !newBody) {
            console.error('Please provide id, title, and body for the todo.');
        } else {
            axios.put(`http://localhost:3000/todos/edit/${id}`, { newTitle, newBody })
                .then(response => console.log(response.data))
                .catch(error => console.error(error.message));
        }
    } else if (action === 'remove') {
        const [id] = args;
        if (!id) {
            console.error('Please provide id for the todo to remove.');
        } else {
            axios.delete(`http://localhost:3000/todos/remove/${id}`)
                .then(response => console.log(response.data))
                .catch(error => console.error(error.message));
        }
    } else if (action === 'check') {
        const [id] = args;
        if (!id) {
            console.error('Please provide id for the todo to check.');
        } else {
            axios.patch(`http://localhost:3000/todos/check/${id}`)
                .then(response => console.log(response.data))
                .catch(error => console.error(error.message));
        }
    } else if (action === 'uncheck') {
        const [id] = args;
        if (!id) {
            console.error('Please provide id for the todo to uncheck.');
        } else {
            axios.patch(`http://localhost:3000/todos/uncheck/${id}`)
                .then(response => console.log(response.data))
                .catch(error => console.error(error.message));
        }
    } else if (action === 'list') {
        const [filter] = args;
        axios.get(`http://localhost:3000/todos/list/${filter || 'all'}`)
            .then(response => console.table(response.data))
            .catch(error => console.error(error.message));
    } else {
        console.error('Invalid action. Supported actions are: add, edit, remove, check, uncheck, list.');
    }
}
