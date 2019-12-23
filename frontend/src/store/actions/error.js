import { ERROR_SHOW, ERROR_HIDE } from "../types"

export const showError = message => ({
    type: ERROR_SHOW,
    message,
    show: true
})

export const hideError = () => ({
    type: ERROR_HIDE,
    show: false,
    message: ''
})