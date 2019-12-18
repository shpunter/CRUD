const uuid = require('uuid/v4')
const HttpError = require('../models/HttpError')

const createUser = () => {
    return { 
        id: uuid(), 
        name: 'Name Surname', 
        active: ( () => Math.random() < 0.7 )(), // chance 70% that will be value: true
        department: ( () => {
            let title = ''
            const rand = Math.random()

            if (rand < 0.1) title = 'HR'
            else if (rand < 0.3) title = 'Junior QA'
            else if (rand < 0.5) title = 'Middle QA'
            else if (rand < 0.53) title = 'Senior QA'
            else if (rand < 0.8) title = 'Junior Developer' 
            else if (rand < 0.97) title = 'Middle Developer' 
            else if (rand <= 1) title = 'Senior Developer'
            
            return title
        })()
    }
}

const employees = []
for (let i = 0; i < 30; i++){
    employees.push(createUser())
}

const deleteEmployee = (req, res, next) => {
    const { body: { id } } = req;
    const index = employees.findIndex(employeeTarget => employeeTarget.id === id);
    if (index < 0) return next(new HttpError('No such employee', 404))

    employees.splice(index, 1);

    res.status(202).send({ message: "Employee removed successfully" });
};

const getEmployees = (req, res, next) => {
     res.status(200).json(employees);
};

const updateEmployee = (req, res, next) => {
    const {
        body: { id, name, active, department }
    } = req;
    const index = employees.findIndex(employeeTarget => employeeTarget.id === id);
    if (index < 0) return next(new HttpError('No such employee', 404))

    Object.assign(employees[index], { name, active, department });

    res.status(202).send({ message: 'Employee updated' });
};

const putEmployee = (req, res, next) => {
    
}

exports.deleteEmployee = deleteEmployee;
exports.getEmployees = getEmployees;
exports.updateEmployee = updateEmployee;
exports.putEmployee = putEmployee;