var router = require('express').Router()

router.use('/auth', require ('./auth')),
router.use('/board', require ('./board')),
router.use('/', require ('./section'))
//TO