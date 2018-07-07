const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

// GET /users
app.get('/users', (req, res) => {
    res.status(200).send([
        { name: 'Name 1', age: 20 },
        { name: 'Name 2', age: 21 },
        { name: 'Name 3', age: 22 },
    ]);
});

app.listen(3000);
module.exports.app = app;