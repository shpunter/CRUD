import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import Input from '../UI/Input'
import { useHttp } from '../../hook/http-hook'
import { fetchedEmployees } from '../../store/actions/employees'
import { employeesNumber } from '../../store/actions/pagination'

const Search = () => {
    const searchRef = useRef()
    const dispatch = useDispatch()
    const [ getFilteredEmployees ] = useHttp()
    const history = useHistory()

    const onSearch = () => {
        const url = `/employees?p=1&q=${searchRef.current.value}`

        getFilteredEmployees({ url, method: 'GET' })
            .then(({ data: { docs: employees, count: number } }) => {
                dispatch(fetchedEmployees(employees))
                dispatch(employeesNumber(number))
                history.push(url)
            })
    }

    return (
        <div>
            <Input ref={ searchRef } placeHolder='Search by employee name (only start with)'/>
            <Button variant='primary' onClick={ onSearch }>
                Search {' '}
            </Button>
        </div>
    )
}

export default Search
