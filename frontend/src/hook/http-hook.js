import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { axiosInstance } from '../axios'
import { showError } from '../store/actions'

export const useHttp = () => {
    const dispatch = useDispatch()
    const send = useCallback(
        async ({ url, method, body = {} }) => axiosInstance({ url, method, data: body})
            .catch(error => {
                const message = error.response ? error.response.data.message : error.message 

                dispatch(showError(message))
                throw Promise.reject(message)
            }),
        [dispatch]
    )

    return [ send ]
}
