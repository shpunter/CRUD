import React from 'react'
import Modal from 'react-bootstrap/Modal'

import { useSelector, useDispatch } from 'react-redux'
import { hideError } from '../../store/actions/actionsError'

const ErrorModal = () => {
    const dispatch = useDispatch()
    const { show, message } = useSelector(({ error }) => error)

    const onHide = () => dispatch(hideError())
    return (
        <Modal size='lg' show={ show } onHide={ onHide }>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div>{ message }</div>
            </Modal.Body>
        </Modal>
    )
}

export default ErrorModal
