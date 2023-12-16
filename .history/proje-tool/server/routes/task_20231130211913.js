const router = require('express').Router()
const taskController = require('../controllers/task')
const { body, param } = require('express-validator')
const validation = require('../handlers/validation')

router.post(
    '/',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    body('sectionId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid section id')
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.create
)

router.put(
    '/update-position',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.updatePosition 
)

router.delete(
    '/:taskId',
    param('boardId').custom(valu)
)