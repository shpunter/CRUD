import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Check = React.forwardRef(({ value = true }, ref) => {
    const [checkValue, setCheckValue] = useState(value)
    
    const onChange = event => setCheckValue(event.target.checked)

    return (
        <Form.Check
            ref={ ref }
            type='switch'
            defaultChecked={ checkValue }
            id='custom-switch'
            label={ checkValue  ? 'PRESENT' : 'LEFT'}
            onChange={ onChange }
        />
    )
})

export default Check