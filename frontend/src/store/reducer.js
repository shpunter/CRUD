import * as types from './types'

const initialState = {
    employees: [],
    modal: {
        show: false,
        mode: ''
    },
    error: {
        show: false,
        message: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_EMPLOYEES:
            return {
                ...state,
                employees: [...action.employees]
            }
        case types.DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(({ id }) => id !== action.id)
            }
        case types.SHOW_MODAL_EMPLOYEE_VIEW:
            return {
                ...state,
                modal: {
                    show: true,
                    mode: 'view',
                    employeeId: action.employeeId
                }
            }
        case types.SHOW_MODAL_EMPLOYEE_EDIT:
            return {
                ...state,
                modal: {
                    show: true,
                    mode: 'edit',
                    employeeId: action.employeeId
                }
            }
        case types.HIDE_MODAL:
            return {
                ...state,
                modal: {
                    show: false
                }
            }
        case types.SAVE_CHANGES_EMPLOYEE:
            const { employee: { id, name, active, department } } = action
            const targetIndex = state.employees.findIndex(employee => employee.id === id)

            state.employees[targetIndex] = Object.assign(
                {}, 
                state.employees[targetIndex], 
                { name, active, department }
            )
            return {
                ...state,
                employees: [...state.employees]
            }
        case types.SHOW_ERROR:
            return {
                ...state,
                modal: {
                    show: false,
                    mode: ''
                },
                error: {
                    show: true,
                    message: action.message
                }
            }
        case types.HIDE_ERROR: 
            return {
                ...state,
                error: {
                    show: false,
                    message: ''
                }
            }
        default:
            return state
    }
}
