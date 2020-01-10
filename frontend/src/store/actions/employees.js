import { HTTP_CREATE_EMPLOYEE, HTTP_PATCH_EMPLOYEE, HTTP_FETCHED_EMPLOYEES, HTTP_DELETE_EMPLOYEE } from "../types"

const unescape = string => string.replace(new RegExp("&#x27;", "g"), "'")
    .replace(new RegExp("&lt;", "g"), "<")
    .replace(new RegExp("&gt;", "g"), ">")
    .replace(new RegExp("&amp;", "g"), "&")
    .replace(new RegExp("&quot;", "g"), "\"")
    .replace(new RegExp("&#x5C;", "g"), "\\")
    .replace(new RegExp("&#x2F;", "g"), "/")

export const fetchedEmployees = employees => ({
    type: HTTP_FETCHED_EMPLOYEES,
    employees: employees.map(({ _id: id, name, ...rest }) => ({ id, name:  unescape(name), ...rest }))
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

