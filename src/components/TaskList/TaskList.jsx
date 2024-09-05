import React from 'react';
import '../../App.css';
import Task from './Task';


function TaskList({tasks}) {

    // let tasks = [
    //     {
    //         TaskName: 'Study For Physics',
    //         TaskDueDate: null,
    //         TaskPriority: 3, //1 - 5 with 5 being really important and 1 being super unimportant
    //         TaskEmoji: 'Smile',
    //     }, {
    //         TaskName: 'Make a Todo List App',
    //         TaskDueDate: null,
    //         TaskPriority: 2, //1 - 5 with 5 being really important and 1 being super unimportant
    //         TaskEmoji: 'Smile',
    //     }
    // ]

    return (
        <>
            <div className=''>
                <ul className='flex flex-row justify-center' >
                    {tasks.map(task => (
                        <Task key={task.TaskName} TaskName={task.TaskName} TaskEmoji={task.TaskEmoji} TaskPriority={task.TaskPriority} />
                    ))}
                </ul>
            </div>

        </>
    );
}

export default TaskList;