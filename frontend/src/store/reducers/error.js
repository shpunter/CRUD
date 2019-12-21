import { HIDE_ERROR, SHOW_ERROR } from '../types'

const init = { show: false, message: '' }

export const error = (state = init, { type, message }) => {
    switch (type) {
        case SHOW_ERROR:
            return {
                show: true,
                message
            }

        case HIDE_ERROR: 
            return {
                show: false,
                message: ''
            }

        default: 
            return state
    }
}