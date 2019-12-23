import { HTTP_CREATE_EMPLOYEE, HTTP_PATCH_EMPLOYEE, HTTP_FETCHED_EMPLOYEES, HTTP_DELETE_EMPLOYEE } from "../types"

export const fetchedEmployees = employees => ({
    type: HTTP_FETCHED_EMPLOYEES,
    employees: employees.map(({ _id: id, ...rest }) => ({ id, ...rest }))
})

export const deleteEmployee = id => ({
    type: HTTP_DELETE_EMPLOYEE,
    id
})

export const patchEmployee = employee =>({
    type: HTTP_PATCH_EMPLOYEE,
    employee
})

export const createEmployee = ({ _id: id, ...rest }) => ({
    type: HTTP_CREATE_EMPLOYEE,
    employee: { id, ...rest }
})

