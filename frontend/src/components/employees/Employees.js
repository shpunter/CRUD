import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'

import { fetchedEmployees } from '../../store/actions/employees'
import EmployeeTableBody from './employee/EmployeeTableBody'
import EmployeeTableHead from './employee/EmployeeTableHead'
import Button from 'react-bootstrap/Button'
import { useHttp } from '../../hook/http-hook'
import { employeeCreate } from '../../store/actions/modal'

const Employees = () => {
    const dispatch = useDispatch()
    const employees = useSelector(({ employees }) => employees)
    const [ getEmployees ] = useHttp()

    useEffect(() => {
        getEmployees({ url: '/employees', method: 'GET' })
            .then(({ data: employees }) => dispatch(fetchedEmployees(employees)))
    }, [dispatch, getEmployees])

    const onClickCreate = () => dispatch(employeeCreate())

    return (<>
        <Table size='sm'>
            <EmployeeTableHead />
            <tbody>
                {employees.map(employee => (
                    <EmployeeTableBody key={ employee.id } employee={ employee } />
                ))}
            </tbody>
        </Table>

        <Button variant='primary' onClick={ onClickCreate }>
            Create employee{' '}
        </Button>
    </>)
}

export default Employees
