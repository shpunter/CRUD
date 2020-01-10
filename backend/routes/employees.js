const express = require('express')
const { check } = require('express-validator');
const router = express.Router()
const { 
    deleteEmployee, 
    updateEmployee, 
    getEmployees,
    createEmployee
} = require('../controllers/employee-controller')

router.get('/', getEmployees)
router.delete('/', [
    check('id').not().isEmpty()
        .isMongoId()
], deleteEmployee)
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
], updateEmployee)
router.post('/', [
    check('name').not().isEmpty()
        .trim()
        .escape(),
    check('active').not().isEmpty()
        .isBoolean(),
    check('department').not().isEmpty()
        .trim()
        .escape()
], createEmployee)

module.exports = router