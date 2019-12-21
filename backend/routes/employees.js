const express = require('express')
const router = express.Router()
const { 
    deleteEmployee, 
    updateEmployee, 
    getEmployees,
    createEmployee
} = require('../controllers/employee-controller')

router.get('/', getEmployees)
router.delete('/', deleteEmployee)
router.patch('/', updateEmployee)
router.post('/', createEmployee)

module.exports = router