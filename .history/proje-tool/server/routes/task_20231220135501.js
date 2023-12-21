const router = require('express').Router()
const taskController = require('../controllers/task')
const { body, param } = require('express-validator')
const validation = require('../handlers/validation')

router.post(
    '/',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    body('sectionId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid section id'))
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.create
)

router.put(
    '/update-position',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.updatePosition 
)

router.delete(
    '/:taskId',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    param('taskId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid task id'))
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.delete
)

router.put(
    '/:taskId',
    param('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    param('taskId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid task id')
        } else return Promise.resolve()
    }),
    validation.validate,
    taskController.update
)

module.exports = router