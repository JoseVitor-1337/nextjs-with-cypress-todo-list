import { memo, useState } from 'react'

import CloseImg from 'assets/icons/close.png'

import { useTasks } from 'screens/context/Tasks/Provider'
import RadioButton from './components/RadioButton'

function TaskList() {
  const [task, setTask] = useState('')

  const { tasks, addTask, removeTask, completeTask } = useTasks()

  return (
    <div className="animate-fade bg-white rounded-md p-2 space-y-4">
      {tasks.length > 0 ? (
        <ul data-cy="list-tasks" className="space-y-1">
          {tasks.map(({ task, completed }) => {
            return (
              <li
                key={task}
                className="animate-fade flex items-center justify-between space-x-2 p-2"
              >
                <p
                  className={`transition font-medium ${
                    completed ? 'text-slate-500 line-through' : 'text-slate-600'
                  }`}
                >
                  {task}
                </p>

                <div className="flex space-x-2">
                  <RadioButton
                    isActive={completed}
                    name="To Do"
                    data-cy={task}
                    value={task}
                    onChange={() => completeTask(task)}
                  />

                  <button
                    data-cy={`${task}-remove-btn`}
                    type="button"
                    onClick={() => removeTask(task)}
                  >
                    <img
                      className="h-4"
                      src={CloseImg.src}
                      alt="Apagar tarefa"
                    />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <h2 className="p-2 font-bold text-center text-slate-600">
          Nenhuma tarefa adicionada.
        </h2>
      )}

      <hr />

      <form
        onSubmit={(event) => {
          event.preventDefault()
          if (task !== '') addTask(task)

          setTask('')
        }}
        className="flex space-x-2 items-center justify-between"
      >
        <input
          data-cy="task-input"
          value={task}
          onChange={({ target }) => setTask(target.value)}
          type="text"
          placeholder="Escreva uma tarefa"
          className="p-1 px-2 border-2 text-slate-500 border-slate-200 rounded-md"
        />

        <button
          data-cy="add-task-btn"
          className="bg-blue-500 p-1 px-2 rounded-md border-2 border-transparent text-white hover:bg-blue-800 hover:animation-pulse"
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}

export default memo(TaskList)
