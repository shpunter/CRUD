import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

import EmployeeTableBody from './employee/EmployeeTableBody'
import EmployeeTableHead from './employee/EmployeeTableHead'
import { useHttp } from '../../hook/http-hook'
import { useUrlSearchCreate } from '../../hook/urlParams-hook'
import { fetchedEmployees } from '../../store/actions/employees'
import { employeeCreate } from '../../store/actions/modal'
import { employeesNumber } from '../../store/actions/pagination'

const Employees = () => {
    const urlSearch = useUrlSearchCreate([
        { paramKey: 'p', defaultValue: 1 }, 
        { paramKey: 'q' }
    ])
    const dispatch = useDispatch()
    const employees = useSelector(({ employees }) => employees)
    const [ getEmployees ] = useHttp()
    
    const onClickCreate = () => dispatch(employeeCreate())

    useEffect(() => {
        getEmployees({ url: `/employees${urlSearch}`, method: 'GET' })
            .then(({ data: { docs: employees, count: number } }) => {
                dispatch(fetchedEmployees(employees))
                dispatch(employeesNumber(number))
            })
    }, [dispatch, getEmployees, urlSearch])

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
