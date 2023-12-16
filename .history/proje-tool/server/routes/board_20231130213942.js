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