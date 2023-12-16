const router = require('express').Router({ mergeParams: true });
const sectionController = require('../controllers/section');
const { params } = require('express-validator');
const validation = require('../handlers/validation');

router.post(
    '/',
    params('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    validation.validate,
    sectionController.create
)

router.put(
    '/:sectionId',
    params('boardId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject(new Error('Invalid board id'))
        } else return Promise.resolve()
    }),
    params('sectionId').custom(value => {
        if (!validation.isObjectId(value)) {
            return Promise.reject('Invalid section id')
        } else return Promise.resolve()
    }),
    validation.validate,
    sectionController.update
)

module.exports = router