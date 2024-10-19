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

// GET localhost:3000/users/12345
router.get('/:userid', async (request, response) => {
    let targetUserId = request.params.userid;
    // let exampleSomeOtherProperty = request.params.someotherproperty;

    // make a database query that uses that ID
    // eg. let result = await User.findById(targetUserId);

    response.json({
        result: {
            id: targetUserId,
            username: 'Pretend this is a username from the database',
        },
    });
});

// POST localhost:3000/users/login
router.post('/login', async (request, response, next) => {
    let authHeaderData = request.headers['authorization'];
    console.log(authHeaderData);
    if (authHeaderData != 'Example string for header value') {
        // throw new Error("Not valid login data!");
        return next(new Error('Not valid login data!'));
    }
    response.json({
        authHeaderData,
    });
});
module.exports = router;
