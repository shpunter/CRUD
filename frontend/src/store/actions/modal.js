import { EMPLOYEE_CREATE, HIDE_MODAL, EMPLOYEE_VIEW, EMPLOYEE_EDIT } from '../types'

export const hideModal = () => ({
    type: HIDE_MODAL,
    show: false
})

export const employeeView = id => ({
    type: EMPLOYEE_VIEW,
    employeeId: id,
    title: 'View Employee',
    mode: 'view',
    show: true
})

export const employeeEdit = id => ({
    type: EMPLOYEE_EDIT,
    employeeId: id,
    title: 'Edit Employee',
    mode: 'edit',
    show: true
})

export const employeeCreate = () => ({
    type: EMPLOYEE_CREATE,
    title: 'Create Employee',
    mode: 'create',
    show: true
})