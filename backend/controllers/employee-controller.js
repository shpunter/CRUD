const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { check, validationResult } = require('express-validator');

const deleteEmployee = (req, res, next) => {console.log('con')
    if(!validationResult(req).isEmpty()) next(new HttpError('Not valid id', 422))

    const { body: { id } } = req

    Employee.findByIdAndRemove(id)
        .then(() => res.status(202).send({ message: "Employee removed successfully" }))
        .catch(() => next(new HttpError(`No such employee`, 404)))
};

const getEmployees = (req, res, next) => {
    Employee.find()
        .then(employees => res.send(employees))
        .catch(() => next(new HttpError(`Can not get employees` , 500)))
};

const updateEmployee = (req, res, next) => {
    if(!validationResult(req).isEmpty()) next(new HttpError('Not valid data', 422))

    const { body: { id, name, active, department }} = req

    Employee.findByIdAndUpdate(id , { name, active, department })
        .then(() => res.status(202).send({ message: 'Employee updated' }))
        .catch(() => next(new HttpError('No such employee', 404)))
};

const createEmployee = (req, res, next) => {
    if(!validationResult(req).isEmpty()) next(new HttpError('Not valid data', 422))

    const { body: { name, active, department }} = req

    new Employee({ name, active, department }).save()
        .then(createdEmployee => res.send(createdEmployee))
        .catch(() => next(new HttpError('Can not create employee', 500)))
}

exports.deleteEmployee = deleteEmployee;
exports.getEmployees = getEmployees;
exports.updateEmployee = updateEmployee;
exports.createEmployee = createEmployee