import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { hideModal } from '../store/actions/modal'
import View from './employees/employee/modal/View'
import Edit from './employees/employee/modal/Edit'
import Create from './employees/employee/modal/Create'

const ModalManager = () => {
    const dispatch = useDispatch()
    const { mode, ...restProps } = useSelector(({ modal }) => modal, shallowEqual)
    const onHide = () => dispatch(hideModal())
    const components = {
        view: { Component: View, props: { onHide, ...restProps }},
        edit: { Component: Edit, props: { onHide, ...restProps }},
        create: { Component: Create, props: { onHide, ...restProps }}
    }
    const { Component, props } = components[mode] || {}

    return mode ? <Component { ...props } /> : <></>
}

export default ModalManager
