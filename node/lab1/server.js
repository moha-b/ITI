const express = require('express');
const bodyParser = require('body-parser');
const todoFunctions = require('./functionality');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define API routes
app.post('/todos/add', (req, res) => {
    const { id, title, body } = req.body;
    if (!id || !title || !body) {
        return res.status(400).send('Please provide id, title, and body for the todo.');
    }
    todoFunctions.addTodo(id, title, body);
    res.send('Todo added successfully');
});

app.put('/todos/edit/:id', (req, res) => {
    const { newTitle, newBody } = req.body;
    const id = req.params.id;
    if (!id || !newTitle || !newBody) {
        return res.status(400).send('Please provide id, title, and body for the todo.');
    }
    todoFunctions.editTodo(id, newTitle, newBody);
    res.send(`Todo with id ${id} edited successfully`);
});

app.delete('/todos/remove/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Please provide id for the todo to remove.');
    }
    todoFunctions.removeTodo(id);
    res.send(`Todo with id ${id} removed successfully`);
});

app.patch('/todos/check/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Please provide id for the todo to check.');
    }
    todoFunctions.checkTodo(id);
    res.send(`Todo with id ${id} marked as completed.`);
});

app.patch('/todos/uncheck/:id', (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send('Please provide id for the todo to uncheck.');
    }
    todoFunctions.uncheckTodo(id);
    res.send(`Todo with id ${id} marked as uncompleted.`);
});

app.get('/todos/list/:filter?', (req, res) => {
    const filter = req.params.filter || 'all';
    try {
        const result = todoFunctions.listTodos(filter);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
