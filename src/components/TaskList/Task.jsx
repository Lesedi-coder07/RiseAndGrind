import React from 'react';

function Task({TaskName, TaskEmoji, TaskPriority}) {
    return (
        <li className='flex flex-col mx-2 border p-3 shadow-md rounded-md'>
           <h3 className='text-blue-500'>{TaskName}</h3> 
           <p>{TaskEmoji}</p>
           <p>Priority: {TaskPriority} </p>
           
        </li>
    );
}

export default Task;