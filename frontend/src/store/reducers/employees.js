import { CREATE_EMPLOYEE, FETCHED_EMPLOYEES, PATCH_EMPLOYEE, DELETE_EMPLOYEE } from '../types'

const init = []

export const employees = (state = init, action) => {
    switch (action.type){
        case PATCH_EMPLOYEE:
            const { employee: { id, name, active, department } } = action
            const employees = JSON.parse(JSON.stringify(state))
            const targetIndex = employees.findIndex(employee => employee.id === id)
            
            employees[targetIndex] = Object.assign(
                {}, 
                employees[targetIndex], 
                { name, active, department }
            )

            return [...employees]

        case DELETE_EMPLOYEE:
            return state.filter(({ id }) => id !== action.id)

        case FETCHED_EMPLOYEES:
            return [...action.employees]

        case CREATE_EMPLOYEE: 
        debugger;
            return [...state, action.employee]
        default: 
            return state
    }
}