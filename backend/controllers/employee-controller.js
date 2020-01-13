const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { validationResult } = require('express-validator')

const deleteEmployee = async (req, res, next) => {
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
};

const getEmployees = async (req, res, next) => {
    const  { query: { p: page = 1, docsPerPage = 3, q: filter = '' } } = req
    let employees;
    
    try {
        employees = await Employee.aggregate([
            { '$match': { 'name': { '$regex': `^${ filter }`, '$options': 'i' }}},
            { 
                '$group': {
                    '_id': null, 
                    'docs': { '$push': '$$ROOT' }, 
                    'count': { '$sum': 1 }
                }
            },
            { 
                '$project': { 
                    '_id': 0, 
                    'count': 1, 
                    'docs': {
                        '$slice': [ '$docs', (page - 1) * docsPerPage, docsPerPage ] } 
                    }
            }

        ])
    } catch (error) {
        return next(new HttpError('Can not get employees' , 500))
    }

    res.send(employees[0] || { count: 0, docs: [] })
};

const updateEmployee = async (req, res, next) => {
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
};

const createEmployee = async (req, res, next) => {
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

exports.deleteEmployee = deleteEmployee;
exports.getEmployees = getEmployees;
exports.updateEmployee = updateEmployee;
exports.createEmployee = createEmployee