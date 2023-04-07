import { useState } from 'react'
import { nanoid } from 'nanoid';

function TaskForm(props) {

    const[input, setInput] = useState('')

    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSend = e => {
        e.preventDefault();
        const newTask = {
            id: nanoid(),
            text: input,
            complete: false
        }
        
        props.onSubmit(newTask)
    }
    return(
        <form 
        className='task-form'
        onSubmit={handleSend}>
            <input
            className='task-input'
            type='text'
            name='text'
            placeholder='Escriba una tarea !!!'
            onChange={handleChange}/>
            <button className='task-button'>
                agregar tarea
            </button>
        </form>
    )
}

export default TaskForm