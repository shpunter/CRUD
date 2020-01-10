import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

import Input from '../UI/Input'
import { useHttp } from '../../hook/http-hook'
import { fetchedEmployees } from '../../store/actions/employees'

const Search = () => {
    const searchRef = useRef()
    const dispatch = useDispatch()
    const [ getFilteredEmployees ] = useHttp()

    const onSearch = () => {
        getFilteredEmployees({ url: `/search?q=${searchRef.current.value}`, method: 'GET' })
            .then(({ data: employees }) => dispatch(fetchedEmployees(employees)))
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
