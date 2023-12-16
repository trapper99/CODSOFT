var router = require('express').Router()

router.use('/auth', require ('./auth')),
router.use('/board', require ('./board')),
router.use('/section', require ('./section'))