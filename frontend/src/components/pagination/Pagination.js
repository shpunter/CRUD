import React from 'react'
import { useSelector } from 'react-redux'
import uuid from 'uuid/v4'

import { Link, useLocation } from 'react-router-dom';

const ITEMS_PER_PAGE = 3

const Pagination = () => {
    const employeesNumber = useSelector(({ pagination: { number } }) => number)
    const pages = Math.ceil(employeesNumber / ITEMS_PER_PAGE)
    const links = [];
    const urlParams = new URLSearchParams(useLocation().search)
    const filter = urlParams.get('q') ? `&q=${urlParams.get('q')}` : ''

    for (let i = 1; i <= pages; i++){
        links.push(<Link key={ uuid() } to={{
            pathname: '/page',
            search: `?p=${ i }${ filter }`
        }}> { i } </Link>)
    }

    return <section>{ links }</section>
}

export default Pagination 