import ToDoCart from './components/ToDoCart'
import TasksProvider from 'screens/context/Tasks/Provider'

export default function Home() {
  return (
    <TasksProvider>
      <main className="relative antialiased font-body">
        <div className="pt-12 h-screen flex justify-center bg-slate-200">
          <ToDoCart />
        </div>
      </main>
    </TasksProvider>
  )
}
