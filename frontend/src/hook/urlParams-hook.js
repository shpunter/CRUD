import { useLocation } from 'react-router-dom'

export const useUrlSearchCreate = (params) => {
    const urlParams = new URLSearchParams(useLocation().search)
    const urlSearch = params.reduce((accum, { paramKey, defaultValue }) => {
        const paramValue = urlParams.get(paramKey) || defaultValue
        paramValue && accum.push(`${paramKey}=${paramValue}`)

        return accum
    }, [])

    return `?${urlSearch.join('&')}`
}