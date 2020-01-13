const express = require('express')
const { check } = require('express-validator');
const router = express.Router()
const employeeCreate = require('../controllers/employeeCreate')
const employeeUpdate = require('../controllers/employeeUpdate')
const employeeDelete = require('../controllers/employeeDelete')
const employeesGet = require('../controllers/employeesGet')


router.get('/', employeesGet)

router.delete('/', [
    check('id').not().isEmpty()
        .isMongoId()
], employeeDelete)

router.patch('/', [
    check('id').not().isEmpty()
        .isMongoId(),
    check('name').not().isEmpty()
        .trim()
        .escape(),
    check('active').not().isEmpty()
        .isBoolean(),
    check('department').not().isEmpty()
        .trim()
        .escape()
], employeeUpdate)

router.post('/', [
    check('name').not().isEmpty()
        .trim()
        .escape(),
    check('active').not().isEmpty()
        .isBoolean(),
    check('department').not().isEmpty()
        .trim()
        .escape()
], employeeCreate)

module.exports = router