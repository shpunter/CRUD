import { EMPLOYEE_CREATE, HIDE_MODAL, EMPLOYEE_VIEW, EMPLOYEE_EDIT } from '../types'

const init = { show: false, mode: '' }

export const modal = (state = init, { employeeId, type }) => {
    switch (type) {
        case EMPLOYEE_VIEW:
            return {
                show: true,
                mode: 'view',
                employeeId
            }

        case EMPLOYEE_EDIT:
            return {
                show: true,
                mode: 'edit',
                employeeId
            }

        case HIDE_MODAL:
            return {
                show: false
            }

        case EMPLOYEE_CREATE: 
            return {
                show: true,
                mode: 'create'
            }
        default: 
            return state
    }
}