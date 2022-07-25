import { memo } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'

function ToDoCard() {
  return (
    <div className="h-96 w-96 rounded-md flex flex-col p-4">
      <Header />

      <section className="flex flex-col space-y-8">
        <TaskList />
      </section>
    </div>
  )
}

export default memo(ToDoCard)
