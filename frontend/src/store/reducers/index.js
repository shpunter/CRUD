import { combineReducers } from 'redux'
import { error } from './error'
import { employees } from './employees'
import { modal } from './modal'
import { pagination } from './pagination'

export default combineReducers({
    employees, 
    modal,
    error,
    pagination
})