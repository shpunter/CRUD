import React, { useRef } from "react"
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Input from '../../../UI/Input'
import Check from '../../../UI/Check'
import Select from '../../../UI/Select'
import { patchEmployee } from '../../../../store/actionsEmployee'
import { useHttp } from '../../../../hook/http-hook'

const OPTIONS = ['HR', 'Junior Developer', 'Junior QA']

const ModalEmployeeEdit = ({ showModal, onHide, employeeId }) => { 
    const dispatch = useDispatch()
    const [ updateChanges ] = useHttp()
    const [ employeeName, employeeActive, employeeDepartment ] = [ useRef(), useRef(), useRef() ]
    const { name, active, department } = useSelector(
        ({ employees }) => employees.find(({ id }) => id === employeeId),
        shallowEqual
    )

    const onSave = () => {
        const draftEmployee = { 
            id: employeeId,
            name: employeeName.current.value,
            active: employeeActive.current.checked,
            department: employeeDepartment.current.value
        }

        updateChanges({ url: '/employees', method: 'PATCH', body: draftEmployee })
            .then(() => dispatch(patchEmployee(draftEmployee)))
            .then(() => onHide())
    }

    return (
        <Modal size='lg' show={ showModal } onHide={ onHide }>
        <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Input value={ name } ref={ employeeName }/>
            <Check value={ active } ref={ employeeActive }/>
            <Select options={ OPTIONS } value={ department } ref={ employeeDepartment }/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={ onSave }>
                Save Changes{' '}
            </Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ModalEmployeeEdit
