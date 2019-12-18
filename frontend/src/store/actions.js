import * as types from "./types"

export const addEmployees = employees => ({
    type: types.ADD_EMPLOYEES,
    employees
})

export const deleteEmployee = id => ({
    type: types.DELETE_EMPLOYEE,
    id
})

export const hideModal = () => ({
    type: types.HIDE_MODAL
})

export const showModalEmployeeView = id => ({
    type: types.SHOW_MODAL_EMPLOYEE_VIEW,
    employeeId: id
})

export const showModalEmployeeEdit = id => ({
    type: types.SHOW_MODAL_EMPLOYEE_EDIT,
    employeeId: id
})

export const saveChangesEmployee = employee =>( {
    type: types.SAVE_CHANGES_EMPLOYEE,
    employee
})

export const showError = message => ({
    type: types.SHOW_ERROR,
    message
})

export const hideError = () => ({
    type: types.HIDE_ERROR
})