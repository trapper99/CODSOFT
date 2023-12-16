const router = require('express').Router({ mergeParams: true });
const sectionController = require('../controllers/section');
const { para } = require('express-validator');
const validation = require('../handlers/validation');