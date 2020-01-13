import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import EmployeeTableBody from './employee/EmployeeTableBody'
import EmployeeTableHead from './employee/EmployeeTableHead'
import { useHttp } from '../../hook/http-hook'
import { fetchedEmployees } from '../../store/actions/employees'
import { employeeCreate } from '../../store/actions/modal'
import { employeesNumber } from '../../store/actions/pagination'

const Employees = () => {
    const urlParams = new URLSearchParams(useLocation().search)
    const page = `p=${urlParams.get('p') || 1}`
    const filter = urlParams.get('q') ? `&q=${urlParams.get('q') || ''}` : ''
    const dispatch = useDispatch()
    const employees = useSelector(({ employees }) => employees)
    const [ getEmployees ] = useHttp()
    
    const onClickCreate = () => dispatch(employeeCreate())

    useEffect(() => {
        getEmployees({ url: `/employees?${ page }${ filter }`, method: 'GET' })
            .then(({ data: { docs: employees, count: number } }) => {
                dispatch(fetchedEmployees(employees))
                dispatch(employeesNumber(number))
            })
    }, [dispatch, getEmployees, page, filter])

    return (
        <>
            <Table size='sm'>
                <EmployeeTableHead />
                <tbody>{
                    employees.map(employee => <EmployeeTableBody key={ employee.id } employee={ employee } />)
                }</tbody>
            </Table>

            <Button variant='primary' onClick={ onClickCreate }>
                Create employee{' '}
            </Button>
        </>
    )
}

export default Employees
