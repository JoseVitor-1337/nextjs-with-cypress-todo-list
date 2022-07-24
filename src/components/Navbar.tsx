import { memo } from 'react'

function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 ">
      <p className="text-white">Tailwind CSS Funcionando</p>
    </nav>
  )
}

export default memo(Navbar)
