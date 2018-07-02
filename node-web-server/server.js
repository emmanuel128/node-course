const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express!</h1>');

    res.send({
        name: 'Emma',
        likes: [
            'Travel', 'Code'
        ]
    })
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/bad', (req, res) => {
    res.send({ errorMessage: 'Error' });
});

// app.get('/help', (req, res) => {
//     res.send('About Page');
// });

app.listen(3000, () => {
    console.log('Server is up in port 3000');
});