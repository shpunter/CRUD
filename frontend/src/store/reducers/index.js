import { combineReducers } from 'redux'
import { error } from './error'
import { employees } from './employees'
import { modal } from './modal'

export default combineReducers({
    employees, 
    modal,
    error
})