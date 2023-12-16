const router = require('express').Router()
const userController = require('../controllers/user')
const { body } = require('express-validator')
const validation = require('../handlers/validation')
const User = require('../models/user')

router.post(
    '/signup',
    
)