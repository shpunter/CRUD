const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const { validationResult } = require('express-validator')

const employeesGet = async (req, res, next) => {
    if(!validationResult(req).isEmpty()) 
        return next(new HttpError('Not valid data', 422))

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
}

module.exports = employeesGet