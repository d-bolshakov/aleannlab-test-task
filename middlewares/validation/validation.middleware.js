const {validationResult} = require('express-validator')

exports.Validation = (req, res, next) => {
    const result = validationResult(req).array()
    if (!result.length) return next()
        const errors = result.map(error => { return error.param + ': ' + error.msg})
    res.status(400).json(errors)
}