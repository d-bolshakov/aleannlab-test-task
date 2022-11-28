const { body } = require('express-validator')

exports.validateUsername = [
    body('username')
        .not()
        .isEmpty()
        .withMessage('Username is empty'),
]