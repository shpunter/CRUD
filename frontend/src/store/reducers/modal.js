import { EMPLOYEE_CREATE, HIDE_MODAL, EMPLOYEE_VIEW, EMPLOYEE_EDIT } from '../types'

const init = { show: false, mode: '' }

export const modal = (state = init, action) => {
    const { type, employeeId, show, title, mode } = action
    switch (type) {
        case EMPLOYEE_VIEW:
            return { show, title, mode, employeeId }

        case EMPLOYEE_EDIT:
            return { show, title, mode, employeeId }

        case HIDE_MODAL:
            return { show }

        case EMPLOYEE_CREATE: 
            return { show, title, mode }
        default: 
            return state
    }
}