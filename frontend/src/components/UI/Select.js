import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'

const Select = React.forwardRef(({ value = '', options }, ref) => {
    const [selectValue, setSelectValue] = useState(value)

    const onChange = event => setSelectValue(event.target.value)

    return (
        <Form.Control
            ref={ ref }
            as='select'
            defaultValue={ selectValue }
            onChange={ onChange }
        >
            {options.map((option, id) => (
                <option key={ id } value={ option }>
                    { option }
                </option>
            ))}
        </Form.Control>
    )
})

export default Select