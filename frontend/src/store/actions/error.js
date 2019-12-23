import { SHOW_ERROR, HIDE_ERROR } from "../types"

export const showError = message => ({
    type: SHOW_ERROR,
    message,
    show: true
})

export const hideError = () => ({
    type: HIDE_ERROR,
    show: false,
    message: ''
})