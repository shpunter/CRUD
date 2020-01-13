import React from 'react'
import { useSelector } from 'react-redux'
import uuid from 'uuid/v4'
import { Link } from 'react-router-dom';

import { useUrlSearchCreate } from '../../hook/urlParams-hook'

const ITEMS_PER_PAGE = 3

const Pagination = () => {
    const employeesNumber = useSelector(({ pagination: { number } }) => number)
    const pages = Math.ceil(employeesNumber / ITEMS_PER_PAGE)
    const links = [];
    const urlSearch = useUrlSearchCreate([{ paramKey: 'q' }])

    for (let i = 1; i <= pages; i++){
        links.push(<Link key={ uuid() } to={{
            pathname: '/employees',
            search: `${urlSearch}&p=${i}`
        }}> { i } </Link>)
    }

    return <section>{ links }</section>
}

export default Pagination 