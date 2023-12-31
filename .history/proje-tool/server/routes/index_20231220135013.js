var router = require('express').Router()

router.use('/auth', require ('./auth')),
router.use('/board', require ('./board')),
router.use('/board/:boardId/section', require ('./section'))
router.use('/board/:boardId/section/:sectionId/task', require('./task').default)

module.exports = router