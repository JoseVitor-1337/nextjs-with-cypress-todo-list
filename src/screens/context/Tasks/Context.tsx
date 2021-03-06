import { createContext } from 'react'

import { ITask } from './Provider'

interface ITaskContext {
  tasks: ITask[]
  addTask: (task: string) => void
  removeTask: (task: string) => void
  completeTask: (task: string) => void
}

const TasksContext = createContext<ITaskContext>({
  tasks: [],
  addTask: () => {
    console.log('addTask')
  },
  removeTask: () => {
    console.log('removeTask')
  },
  completeTask: () => {
    console.log('completeTask')
  },
})

export default TasksContext
