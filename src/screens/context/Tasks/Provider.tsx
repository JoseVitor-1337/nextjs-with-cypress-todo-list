import {
  ReactElement,
  useState,
  useCallback,
  useEffect,
  useContext,
} from 'react'

import TasksContext from './Context'

type ITasksProvider = {
  children: ReactElement
}

export type ITask = {
  task: string
  completed: boolean
}

function TasksProvider({ children }: ITasksProvider) {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = useCallback((task: string) => {
    const newTask: ITask = {
      task,
      completed: false,
    }

    setTasks((oldTasks) => {
      return [...oldTasks, newTask]
    })
  }, [])

  const removeTask = useCallback((task: string) => {
    setTasks((oldTasks) => {
      const newTask = oldTasks.filter((oldTask) => oldTask.task !== task)

      localStorage.setItem('tasks', JSON.stringify(newTask))

      return newTask
    })
  }, [])

  const completeTask = useCallback((task: string) => {
    setTasks((oldTasks) => {
      return oldTasks.map((oldTask) => {
        if (oldTask.task === task) {
          return { ...oldTask, completed: true }
        }

        return oldTask
      })
    })
  }, [])

  useEffect(() => {
    if (tasks.length !== 0) localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const stringifyTasks = localStorage.getItem('tasks')

    const currentTasks: ITask[] = stringifyTasks
      ? JSON.parse(stringifyTasks)
      : []

    setTasks(currentTasks)
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, completeTask }}>
      <div>{children}</div>
    </TasksContext.Provider>
  )
}

export default TasksProvider

export const useTasks = () => useContext(TasksContext)
