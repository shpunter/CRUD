import { HTTP_CREATE_EMPLOYEE, HTTP_FETCHED_EMPLOYEES, HTTP_PATCH_EMPLOYEE, HTTP_DELETE_EMPLOYEE } from '../types'

const init = []

export const employees = (state = init, action) => {
    switch (action.type){
        case HTTP_PATCH_EMPLOYEE:
            const { employee: { id, name, active, department } } = action
            const employees = JSON.parse(JSON.stringify(state))
            const targetIndex = employees.findIndex(employee => employee.id === id)
            
            employees[targetIndex] = Object.assign(
                {}, 
                employees[targetIndex], 
                { name, active, department }
            )

            return [...employees]

        case HTTP_DELETE_EMPLOYEE:
            return state.filter(({ id }) => id !== action.id)

        case HTTP_FETCHED_EMPLOYEES:
            return [...action.employees]

        case HTTP_CREATE_EMPLOYEE: 
            return [...state, action.employee]
        default: 
            return state
    }
}