import { PAGE_ITEMS_NUMBER } from '../types'

const init = { number: 0 }

export const pagination = (state = init, { type, number }) => {
    switch (type) {
        case PAGE_ITEMS_NUMBER:
            return { number }

        default: 
            return state
    }
}