const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { validationResult } = require('express-validator')

const employeeUpdate = async (req, res, next) => {
    if(!validationResult(req).isEmpty()) 
        return next(new HttpError('Not valid data', 422))

    const { body: { id, name, active, department }} = req
    let employee;

    try {        
        employee = await Employee.findByIdAndUpdate(id , { name, active, department })
    } catch (error) {
        return next(new HttpError('Can not get employee', 500))
    }

    employee || next(new HttpError('No such employee', 404))
    res.status(202).send({ message: 'Employee updated' })
}

module.exports = employeeUpdate