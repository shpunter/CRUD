import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Modal from 'react-bootstrap/Modal'

const ModalEmployeeView = ({ showModal, onHide, employeeId }) => {
    const { name, active, department } = useSelector(
        ({ employees }) => employees.find(({ id }) => id === employeeId),
        shallowEqual
    )

    return (
        <Modal size='lg' show={ showModal } onHide={ onHide }>
            <Modal.Header closeButton>
                <Modal.Title>View Employee</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>{ name }</div>
                <div>{ active ? 'Active' : 'Not active' }</div>
                <div> {department }</div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalEmployeeView