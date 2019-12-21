import * as types from "./types"

export const addEmployees = employees => ({
    type: types.ADD_EMPLOYEES,
    employees
})

export const deleteEmployee = _id => ({
    type: types.DELETE_EMPLOYEE,
    _id
})

export const hideModal = () => ({
    type: types.HIDE_MODAL
})

export const showModalEmployeeView = _id => ({
    type: types.SHOW_MODAL_EMPLOYEE_VIEW,
    employeeId: _id
})

export const showModalEmployeeEdit = _id => ({
    type: types.SHOW_MODAL_EMPLOYEE_EDIT,
    employeeId: _id
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