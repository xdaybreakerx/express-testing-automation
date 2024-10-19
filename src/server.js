const express = require('express');

// make an instance of the express server
const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'hello world!',
    });
});

const UserController = require('./controllers/UserController');
app.use('/users', UserController);

module.exports = {
    app,
};
