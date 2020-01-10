const express = require('express')
const { check } = require('express-validator');
const router = express.Router()

const { getSearch } = require('../controllers/search-controller')

router.get('/', [
    check('q').trim()
        .escape()
], getSearch)

module.exports = router