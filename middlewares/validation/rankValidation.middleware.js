const { body } = require('express-validator')

exports.validateRank = [
    body('rank')
        .not()
        .isEmpty()
        .withMessage('Rank is empty')
        .isNumeric()
        .withMessage('Rank is not a number'),
]