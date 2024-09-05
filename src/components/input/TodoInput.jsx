import React from 'react';
import '../../App.css';
import { useState } from 'react';

function TodoInput({updateTaskList}) {
    let [input, setInput] = useState('');

   


    const handleInputChange = (e) => {
        let value = e.target.value;
        setInput(value)
    }
    


    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
              
       let newTask = {
        TaskName: input,
        TaskDueDate: null,
        TaskPriority: 2, //1 - 5 with 5 being really important and 1 being super unimportant
        TaskEmoji: 'Smile',
    }

    
     
        updateTaskList(newTask)

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleInputChange} className='px-3 bg-red border w-64 h-12' type="text" />
            </form>
        </>
    );
}

export default TodoInput;