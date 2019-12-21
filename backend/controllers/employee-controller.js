const HttpError = require('../models/HttpError')
const Employee = require('../models/employee')

const deleteEmployee = async (req, res, next) => {
    const { body: { _id } } = req;

    Employee.findByIdAndRemove(_id)
        .then(() => res.status(202).send({ message: "Employee removed successfully" }))
        .catch(() => next(new HttpError(`No such employee`, 404)))
};

const getEmployees = async (req, res, next) => {
    Employee.find().exec()
        .then(employees => res.send(employees))
        .catch(() => next(new HttpError(`Can not get employees` , 500)))
};

const updateEmployee = async (req, res, next) => {
    const {
        body: { _id, name, active, department }
    } = req;

    Employee.findByIdAndUpdate({ _id }, { _id, name, active, department }).exec()
        .then(() => res.status(202).send({ message: 'Employee updated' }))
        .catch(() => next(new HttpError(`No such employee`, 404)))
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