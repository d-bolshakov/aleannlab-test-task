const Router = require('express')
const UsersController = require('../controllers/users.controller')
const { validateId } = require('../middlewares/validation/idValidation.middleware')
const { validateRank } = require('../middlewares/validation/rankValidation.middleware')
const { validateUsername } = require('../middlewares/validation/usernameValidation.middleware')
const {Validation} = require('../middlewares/validation/validation.middleware')

const router = new Router()

router.get('/', UsersController.getList)
router.patch('/:id/change',
    validateId,
    validateRank,
    Validation,
    UsersController.changeRank
)
router.patch('/:id/edit',
    validateId,
    validateUsername,
    Validation,
    UsersController.changeUsername
)
router.post('/add',
    validateUsername,
    validateRank,
    Validation,
    UsersController.add
)
router.delete('/:id/delete',
    validateId,
    Validation,
    UsersController.delete
)

module.exports = router