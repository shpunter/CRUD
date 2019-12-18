const express = require('express')
const router = express.Router()
const { 
    putEmployee, 
    deleteEmployee, 
    updateEmployee, 
    getEmployees 
} = require('../controllers/employee-controller')

router.get('/', getEmployees)
router.delete('/', deleteEmployee)
router.patch('/', updateEmployee)
router.put('/', putEmployee)

module.exports = router