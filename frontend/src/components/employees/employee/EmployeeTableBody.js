import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteEmployee } from '../../../store/actions/employees'
import { employeeView, employeeEdit } from '../../../store/actions/modal'
import { useHttp } from '../../../hook/http-hook'
import './employee.css'

const EmployeeTableBody = ({ employee: { id, name, active, department } }) => {
    const dispatch = useDispatch()
    const [ removeEmployee ] = useHttp()
    const cssClass = active ? '' : 'not-active'
    const onClickDelete = () => {
        removeEmployee({ url: '/employees', method: 'DELETE', body: { id }})
            .then(() => dispatch(deleteEmployee(id)))
    }
    const onClickView = () => dispatch(employeeView(id))
    const onClickEdit = () => dispatch(employeeEdit(id))

    return (
        <tr className={ cssClass }>
            <td className='pointer' onClick={ onClickView }>View</td>
            <td className='pointer' onClick={ onClickEdit }>Edit</td>
            <td>{ name }</td>
            <td>{ active ? 'Active' : 'Not Active' }</td>
            <td>{ department }</td>
            <td className='pointer' onClick={ onClickDelete }>Delete</td>
        </tr>
    )
}

export default React.memo(EmployeeTableBody)
