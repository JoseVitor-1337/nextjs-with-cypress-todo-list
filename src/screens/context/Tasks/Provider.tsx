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
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const defaultTasks = String(localStorage.getItem('tasks'))

    const currentTasks: ITask[] = JSON.parse(defaultTasks)

    setTasks(currentTasks)
  }, [])

  return (
    <TasksContext.Provider value={{ tasks, addTask, completeTask }}>
      <div>{children}</div>
    </TasksContext.Provider>
  )
}

export default TasksProvider

export const useTasks = () => useContext(TasksContext)
