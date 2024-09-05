import React from 'react';
import { useState } from 'react';
import TodoInput from '../input/TodoInput';

function MakeTask({updateTaskList}) {


    
    return (
        <div>
            <TodoInput updateTaskList={updateTaskList} />
        </div>
    );
}

export default MakeTask;