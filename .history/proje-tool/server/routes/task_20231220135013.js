const router = require('express').Router()
import { create, updatePosition, delete, update } from '../controllers/task'
import { body, param } from 'express-validator'
import { isObjectId, validate } from '../handlers/validation'

router.post(
    '/',
    param('boardId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    body('sectionId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid section id')
        } else return Promise.resolve()
    }),
    validate,
    create
)

router.put(
    '/update-position',
    param('boardId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    validate,
    updatePosition 
)

router.delete(
    '/:taskId',
    param('boardId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    param('taskId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid task id')
        } else return Promise.resolve()
    }),
    validate,
    delete
)

router.put(
    '/:taskId',
    param('boardId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid board id')
        } else return Promise.resolve()
    }),
    param('taskId').custom(value => {
        if (!isObjectId(value)) {
            return Promise.reject('Invalid task id')
        } else return Promise.resolve()
    }),
    validate,
    update
)

export default router