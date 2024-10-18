const express = require('express');

// make an instance of the express server
const app = express();

app.get('/', (request, response) => {
    response.json({
        message: 'hello world!',
    });
});

module.exports = {
    app,
};
