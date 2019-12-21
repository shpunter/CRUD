import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { hideModal } from '../../store/actionsModal'
import View from '../employees/employee/modal/View'
import Edit from '../employees/employee/modal/Edit'

const Modal = () => {
    const dispatch = useDispatch()
    const { show, mode, employeeId } = useSelector(({ modal }) => modal)
    const onHide = () => {
        dispatch(hideModal())
    }

    return (
        <>
            {mode === 'view' && (
                <View showModal={show} onHide={onHide} employeeId={employeeId} />
            )}
            {mode === 'edit' && (
                <Edit showModal={show} onHide={onHide} employeeId={employeeId} />
            )}
        </>
    )
}

export default Modal
