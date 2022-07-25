import { memo } from 'react'

function Navbar() {
  return (
    <nav className="fixed p-4 w-full bg-blue-500 text-white font-bold">
      <h1>TailwindCSS com Cypress</h1>
    </nav>
  )
}

export default memo(Navbar)
