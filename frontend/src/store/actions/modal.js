import { EMPLOYEE_CREATE, HIDE_MODAL, EMPLOYEE_VIEW, EMPLOYEE_EDIT } from '../types'

export const hideModal = () => ({
    type: HIDE_MODAL
})

export const employeeView = id => ({
    type: EMPLOYEE_VIEW,
    employeeId: id
})

export const employeeEdit = id => ({
    type: EMPLOYEE_EDIT,
    employeeId: id
})

export const employeeCreate = () => ({
    type: EMPLOYEE_CREATE
})