import React from 'react'
import { useDispatch } from 'react-redux'

import {
    deleteEmployee,
    showModalEmployeeView,
    showModalEmployeeEdit
} from '../../../store/actions'
import { useHttp } from '../../../hook/http-hook'
import './employee.css'

const EmployeeTableBody = ({ employee: { _id, name, active, department } }) => {
    const dispatch = useDispatch()
    const [ removeEmployee ] = useHttp()
    const cssClass = active ? '' : 'not-active'
    const onClickDelete = () => {
        removeEmployee({ url: '/employees', method: 'DELETE', body: { _id }})
            .then(() => dispatch(deleteEmployee(_id)))
    }
    const onClickView = () => dispatch(showModalEmployeeView(_id))
    const onClickEdit = () => dispatch(showModalEmployeeEdit(_id))

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
