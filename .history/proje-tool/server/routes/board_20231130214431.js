const router = require('express').Router()
const boardController = require('../controllers/board')
const { param } = require('express-validator')
const validation = require('../handlers/validation')

router.post(
    '/',
    boardController.create
)

router.get(
    '/',
    boardController.getAll
)

router.get(
    '/:boardId',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    boardController.getOne,
    validation.validate
)

router.put(
    '/',
    boardController.updatePosition
)

router.get(
    '/favourites',
    boardController.getFavourites
)

router.put(
    '/favourites'
)