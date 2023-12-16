const router = require('express').Router()
const userController = require('../controllers/user')
const { body } = require('express-validator')
const validation = require('../handlers/validation')
const User = require('../models/user')

router.post(
    '/signup',
    body('username').isLength({ min: 8 }).withMessage(
        'Username must be at least 8 characters long'
    ),
    body('password').isLength({ min: 8 }).withMessage(
        'Password must be at least 8 characters long'
    ),
    body('confirmPassword').isLength({ min: 8 }).withMessage(
        'Password must be at least 8 characters long'
    ),
    body('username').custom(value => {
        return User.findOne({ username: value }).then(user => {
            if (user) {
                return Promise.reject('Username already exists')
            }
        })
    }),
    validation.validate,
    userController.register
)

router.post(
    '/login',
    
)