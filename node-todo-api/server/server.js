var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb')
var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

const PORT = 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        res.status(400).send(error);
    });
});

app.get('/todos', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            return res.status(500).send(err);
        } else if (todos.length == 0) {
            return res.status(404).send(todos);
        }
        res.send({ todos });
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// GET /toods/123
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id)
        .then((todo) => {
            if (!todo) {
                return res.status(404).send();
            }

            res.send({ todo });
        }).catch((e) => {
            res.status(400).send();
        })
    // findById
    // success
    // error
    // 400 - 
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});

module.exports = { app };