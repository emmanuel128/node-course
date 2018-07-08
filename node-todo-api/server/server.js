var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// var otherTodo = new Todo({
//     text: 'Other Todo',
//     completed: true,
// });

// otherTodo.save().then((doc) => {
//     console.log('Saved todo.', doc);
//     disconnect();
// }, (error) => {
//     console.log('Unable to save todo.', error);
//     disconnect();
// });

// User
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: true
    },
    location: {
        type: String,
        default: null
    },
    age: {
        type: Number,
        required: true
    }
});

var newUser = new User({
    email: 'email@domain.com',
    name: 'Emmanuel',
    age: 24
});

newUser.save().then((doc) => {
    console.log('Saved user.', doc);
    disconnect();
}, (error) => {
    console.log('Unable to save user.', error);
    disconnect();
});

function disconnect() {
    mongoose.disconnect().then(() => {
        console.log('closed');
    }, error => {
        console.log('error', error);
    });
}