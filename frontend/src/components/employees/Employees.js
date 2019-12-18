import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

import { addEmployees } from '../../store/actions'
import EmployeeTableBody from './employee/EmployeeTableBody'
import EmployeeTableHead from './employee/EmployeeTableHead'
import { useHttp } from '../../hook/http-hook'

const Employees = () => {
    const dispatch = useDispatch()
    const employees = useSelector(({ employees }) => employees)
    const [ getEmployees ] = useHttp()

    useEffect(() => {
        getEmployees({ url: '/employees', method: 'GET' })
            .then(({ data }) => dispatch(addEmployees(data)))
    }, [dispatch, getEmployees])

    return (
        <Table size='sm'>
            <EmployeeTableHead />
            <tbody>
                {employees.map(employee => (
                    <EmployeeTableBody key={employee.id} employee={employee} />
                ))}
            </tbody>
        </Table>
    )
}

export default Employees
