import React, { useState } from 'react'

function TaskForm({ onadd }) {
  const [tasktext, setTasktext] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault()

    if (tasktext.trim() === '') return

    onadd(tasktext)
    setTasktext('')
  }

  return (
    <form
      onSubmit={handlesubmit}
      className="flex w-full max-w-xl gap-3"
    >
      <input
        type="text"
        value={tasktext}
        onChange={(e) => setTasktext(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />

      <button
        type="submit"
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 active:scale-95"
      >
        Add Task
      </button>
    </form>
  )
}

export default TaskForm