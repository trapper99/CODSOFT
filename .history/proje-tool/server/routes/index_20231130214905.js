var router = require('express').Router()

router.use('/auth', require ('./auth')),
router.use('/board', require ('./board')),
router.use('/bo', require ('./section'))
//TODO: router.use('/task', require ('./task'))

module.exports = router