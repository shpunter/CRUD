const Employee = require('../models/employee')
const HttpError = require('../models/HttpError')
const { validationResult } = require('express-validator')

const getSearch = async (req, res, next) => {
    if(!validationResult(req).isEmpty()) 
        return next(new HttpError('Invalid request data', 422))

    const  { query: { q: employeeName  }} = req
    let employees;

    try {
        employees = await Employee.find({ name: { '$regex': `^${employeeName}`, '$options': 'i' } })
    } catch (error) {
        return next(new HttpError('Can not get search result', 500))
    }

    res.send(employees)
}

exports.getSearch = getSearch