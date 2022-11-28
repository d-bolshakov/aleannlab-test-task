const { param } = require('express-validator')

exports.validateId = [
    param('id')
        .isNumeric()
        .withMessage('User id is not a number'),
]