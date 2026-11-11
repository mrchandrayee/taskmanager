import { useState } from 'react'
import TaskForm from './components.jsx/taskForm'
import TaskList from './components.jsx/TaskList'

function App() {
  const [task, setTask] = useState([])

  const addTask = (tasktext) => {
    const newTask = {
      id: Date.now(),
      text: tasktext,
      completed: false,
    }

    setTask([...task, newTask])
  }

  const toggleTask = (id) => {
    setTask(
      task.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Task Manager
          </h1>

          <p className="mt-2 text-gray-500">
            Organize your tasks and get things done.
          </p>
        </div>

        {/* Form */}
        <TaskForm onadd={addTask} />

        {/* Task List */}
        <div className="mt-8 w-full">
          <TaskList
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>

      </div>
    </div>
  )
}

export default App