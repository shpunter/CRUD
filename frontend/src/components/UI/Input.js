import React, { useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Input = React.forwardRef(({ placeHolder = '', value = '' }, ref) => {
    const [inputValue, setInputValue] = useState(value)
    
    const onChange = event => setInputValue(event.target.value)

    return (
        <InputGroup className='mb-3'>
            <FormControl ref={ ref }  value={ inputValue } onChange={ onChange } placeholder={ placeHolder }/>
        </InputGroup>
    )
})

export default Input