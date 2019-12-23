import { MODAL_EMPLOYEE_CREATE, MODAL_HIDE, MODAL_EMPLOYEE_VIEW, MODAL_EMPLOYEE_EDIT } from '../types'

const init = { show: false, mode: '' }

export const modal = (state = init, { type, employeeId, show, title, mode }) => {
    switch (type) {
        case MODAL_EMPLOYEE_VIEW:
            return { show, title, mode, employeeId }

        case MODAL_EMPLOYEE_EDIT:
            return { show, title, mode, employeeId }

        case MODAL_HIDE:
            return { show }

        case MODAL_EMPLOYEE_CREATE: 
            return { show, title, mode }
        default: 
            return state
    }
}