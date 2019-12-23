import { ERROR_HIDE, ERROR_SHOW } from '../types'

const init = { show: false, message: '' }

export const error = (state = init, { type, ...action }) => {
    switch (type) {
        case ERROR_SHOW:
            return { ...action }

        case ERROR_HIDE: 
            return { ...action }

        default: 
            return state
    }
}