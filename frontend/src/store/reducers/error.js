import { HIDE_ERROR, SHOW_ERROR } from '../types'

const init = { show: false, message: '' }

export const error = (state = init, { type, ...action }) => {
    switch (type) {
        case SHOW_ERROR:
            return { ...action }

        case HIDE_ERROR: 
            return { ...action }

        default: 
            return state
    }
}