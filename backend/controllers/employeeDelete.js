const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { validationResult } = require('express-validator')

const employeeDelete = async (req, res, next) => {
    if(!validationResult(req).isEmpty()) 
        return next(new HttpError('Not valid id', 422))

    const { body: { id } } = req
    let employee;

    try {
        employee = await Employee.findByIdAndRemove(id)    
    } catch (error) {
        return next(new HttpError('Can not get employee', 500))
    }
    
    employee || next(new HttpError('No such employee', 404))
    res.status(202).send({ message: 'Employee removed successfully' })
}

module.exports = employeeDelete