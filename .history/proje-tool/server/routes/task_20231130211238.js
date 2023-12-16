const router = require('express').Router()
const taskController = require('../controllers/task')
const { body, param } = require('express-validator')
const validation = require('../handlers/validation')

router.post(
    '/',
    param()
)