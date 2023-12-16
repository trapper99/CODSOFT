const router = require('express').Router()
const boardController = require('../controllers/board')
const { body } = require('express-validator')
const validation = require('../handlers/validation')