import * as types from "./types"

export const fetchedEmployees = employees => ({
    type: types.FETCHED_EMPLOYEES,
    employees: employees.map(employee => {
        employee.id = employee._id
        return employee
    })
})

export const deleteEmployee = id => ({
    type: types.DELETE_EMPLOYEE,
    id
})

export const patchEmployee = employee =>( {
    type: types.PATCH_EMPLOYEE,
    employee
})
export const employeeView = id => ({
    type: types.EMPLOYEE_VIEW,
    employeeId: id
})

export const employeeEdit = id => ({
    type: types.EMPLOYEE_EDIT,
    employeeId: id
})
