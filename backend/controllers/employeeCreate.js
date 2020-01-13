const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { validationResult } = require('express-validator')

const employeeCreate = async (req, res, next) => {
    if(!validationResult(req).isEmpty()) 
        return next(new HttpError('Not valid data', 422))

    const { body: { name, active, department }} = req
    let createdEmployee;

    try {
        createdEmployee = await new Employee({ name, active, department }).save()
    } catch (error) {
        return next(new HttpError('Can not create employee', 500))
    }

    res.send(createdEmployee)
}

module.exports = employeeCreate