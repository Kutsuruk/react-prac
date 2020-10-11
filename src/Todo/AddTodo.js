import PropTypes from 'prop-types';
import React, {useState} from 'react';

function AddTodo({onCreate}) {
    const [value, setValue] = useState('') 

    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input value={value} onChange={(event) => setValue(event.target.value)} />
            <button type='submit'>Add to-do</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;