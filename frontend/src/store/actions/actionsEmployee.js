import { PATCH_EMPLOYEE, FETCHED_EMPLOYEES, DELETE_EMPLOYEE } from "../types"

export const fetchedEmployees = employees => ({
    type: FETCHED_EMPLOYEES,
    employees: employees.map(({ _id: id, ...rest }) => ({ id, ...rest }))
})

export const deleteEmployee = id => ({
    type: DELETE_EMPLOYEE,
    id
})

export const patchEmployee = employee =>( {
    type: PATCH_EMPLOYEE,
    employee
})

