const router = require('express').Router()
const boardController = require('../controllers/board')
const { bod } = require('express-validator')
const validation = require('../handlers/validation')