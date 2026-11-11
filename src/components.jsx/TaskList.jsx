import React from 'react'

function TaskList({ task, onDelete, onToggle }) {
  return (
    <div className="w-full max-w-xl">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Your Tasks
        </h2>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
          {task.length} {task.length === 1 ? 'task' : 'tasks'}
        </span>
      </div>

      {task.length > 0 ? (
        <div className="space-y-3">
          {task.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => onToggle(t.id)}
                className="h-5 w-5 cursor-pointer accent-blue-600"
              />

              <span
                className={`flex-1 text-sm ${
                  t.completed
                    ? 'text-gray-400 line-through'
                    : 'text-gray-700'
                }`}
              >
                {t.text}
              </span>

              <button
                onClick={() => onDelete(t.id)}
                className="rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
          <p className="text-gray-400">
            No tasks yet.
          </p>

          <p className="mt-1 text-sm text-gray-400">
            Add your first task above 🚀
          </p>
        </div>
      )}
    </div>
  )
}

export default TaskList