const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')
const mongoose = require('mongoose')

const url = 'mongodb+srv://user-testator:3udFupKVGN8fAX02@cluster-crud-6obm8.mongodb.net/crud?retryWrites=true&w=majority'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(({ message }) => next(new HttpError(`Can not connect to db: ${message}`, 500)))

const deleteEmployee = (req, res, next) => {
    const { body: { _id } } = req;

    Employee.findOneAndDelete(_id).deleteOne().exec()
        .then(() => {
            res.status(202).send({ message: "Employee removed successfully" })
        })
        .catch(({ message }) => next(new HttpError(`No such employee: ${message}`, 500)))
};

const getEmployees = async (req, res, next) => {
    Employee.find().exec()
        .then(employees => res.send(employees))
        .catch(({ message }) => next(new HttpError(`Can not get employees: ${message}` , 500)))
};

const updateEmployee = (req, res, next) => {
    const {
        body: { _id, name, active, department }
    } = req;

    Employee.findOneAndUpdate({ _id }, { _id, name, active, department }).exec()
        .then(() => res.status(202).send({ message: 'Employee updated' }))
        .catch(({ message }) => next(new HttpError(message, 500)))
};

const createEmployee = async (req, res, next) => {
    const newEmployee = {
        name: 'Some name',
        active: true,
        department: 'HR'
    }

    new Employee(newEmployee).save()
        .then(() => res.send({ message: 'New Employee added successfully'}))
        .catch(({ message }) => next(new HttpError(`Can not create employee: ${message}`, 500)))
}

exports.deleteEmployee = deleteEmployee;
exports.getEmployees = getEmployees;
exports.updateEmployee = updateEmployee;
exports.createEmployee = createEmployee