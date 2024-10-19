const express = require('express');

// make an instance of the express server
const app = express();

// middleware to allow server to receive json body data
app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'hello world!',
    });
});

const UserController = require('./controllers/UserController');
app.use('/users', UserController);

app.use((error, request, response, next) => {
    console.log('Server threw an error with messsage: ' + error.message);

    response.json({
        status: 500,
        error: error.message,
        errorFull: JSON.stringify(error),
    });
    next();
});

module.exports = {
    app,
};
