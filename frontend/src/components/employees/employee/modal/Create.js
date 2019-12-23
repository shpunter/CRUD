import React, { useRef } from "react"
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import Input from '../../../UI/Input'
import Check from '../../../UI/Check'
import Select from '../../../UI/Select'
import { createEmployee } from '../../../../store/actions/employees'
import { useHttp } from '../../../../hook/http-hook'

const OPTIONS = ['HR', 'Junior Developer', 'Junior QA']

const ModalEmployeeCreate = ({ title, show, onHide }) => { 
    const dispatch = useDispatch()
    const [ postNewEmployee ] = useHttp()
    const [ employeeName, employeeActive, employeeDepartment ] = [ useRef(), useRef(), useRef() ]

    const onSave = () => {
        const draftEmployee = { 
            name: employeeName.current.value,
            active: employeeActive.current.checked,
            department: employeeDepartment.current.value
        }

        postNewEmployee({ url: '/employees', method: 'POST', body: draftEmployee })
            .then(({ data: createdEmployee }) => dispatch(createEmployee(createdEmployee)))
            .then(() => onHide())
    }

    return (
        <Modal size='lg' show={ show } onHide={ onHide }>
        <Modal.Header closeButton>
            <Modal.Title>{ title }</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Input ref={ employeeName }/>
            <Check ref={ employeeActive }/>
            <Select options={ OPTIONS } ref={ employeeDepartment }/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={ onSave }>
                Create{' '}
            </Button>
        </Modal.Footer>
        </Modal>
    )
}

export default ModalEmployeeCreate
