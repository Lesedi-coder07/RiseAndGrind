import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './components/input/TodoInput'
import './App.css'
import MakeTask from './components/MakeTask/MakeTask'
import TaskList from './components/TaskList/TaskList'

function App() {
 

  let [tasks, setTasks] = useState([
    // {
    //     TaskName: 'Study For Physics',
    //     TaskDueDate: null,
    //     TaskPriority: 3, //1 - 5 with 5 being really important and 1 being super unimportant
    //     TaskEmoji: 'Smile',
    // }
])

const allItems = {};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  allItems[key] = localStorage.getItem(key);
}

console.log(allItems);



const updateTaskList = (value) => {
    setTasks((tasks) => [
        ...tasks, value,
    ]

    )
    console.log(tasks);
    
}

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="flex " alt="Vite logo" />
        </a> */}
    
      </div>
      <h1>What do you need to do?</h1>
      <div className="card">
         <MakeTask updateTaskList={updateTaskList} />
        <p>
        </p>
      </div>
      <p className="read-the-docs">
       Here are all your current to do's
      </p> <br />

      <TaskList tasks={tasks} />
    </>
  )
}

export default App
