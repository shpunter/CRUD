import { MODAL_EMPLOYEE_CREATE, MODAL_HIDE, MODAL_EMPLOYEE_VIEW, MODAL_EMPLOYEE_EDIT } from '../types'

export const hideModal = () => ({
    type: MODAL_HIDE,
    show: false
})

export const employeeView = id => ({
    type: MODAL_EMPLOYEE_VIEW,
    employeeId: id,
    title: 'View Employee',
    mode: 'view',
    show: true
})

export const employeeEdit = id => ({
    type: MODAL_EMPLOYEE_EDIT,
    employeeId: id,
    title: 'Edit Employee',
    mode: 'edit',
    show: true
})

export const employeeCreate = () => ({
    type: MODAL_EMPLOYEE_CREATE,
    title: 'Create Employee',
    mode: 'create',
    show: true
})