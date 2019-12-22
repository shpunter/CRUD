import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Input = React.forwardRef(({ value = '' }, ref) => {
    const [inputValue, setInputValue] = useState(value)
    
    const onChange = event => setInputValue(event.target.value)

    return (
        <InputGroup className='mb-3'>
            <FormControl ref={ ref }  value={ inputValue }onChange={ onChange }/>
        </InputGroup>
    )
})

export default Input