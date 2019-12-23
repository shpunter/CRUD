import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import Modal from 'react-bootstrap/Modal'

const ModalEmployeeView = ({ title, show, onHide, employeeId }) => {debugger;
    const { name, active, department } = useSelector(
        ({ employees }) => employees.find(({ id }) => id === employeeId),
        shallowEqual
    )

    return (
        <Modal size='lg' show={ show } onHide={ onHide }>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
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