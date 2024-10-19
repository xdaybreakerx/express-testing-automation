const express = require('express');

const router = express.Router();

// GET localhost:300/users
router.get('/', (request, response) => {
    response.json({
        data: ['xander', 'tom', 'hannah', 'reece', 'brad', 'hayden'],
    });
});

// POST localhost:3000/signup
router.post('/signup', async (request, response) => {
    let receivedUserData = request.body;

    receivedUserData.password = 'EncryptedPassword';

    // receivedUserData is a placeholder for making a new user in db
    let placeholderDatabaseResult = { ...receivedUserData };

    response.json(placeholderDatabaseResult);
});

module.exports = router;
