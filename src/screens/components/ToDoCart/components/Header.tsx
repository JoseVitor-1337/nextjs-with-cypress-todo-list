import { memo, useMemo } from 'react'

type IPossibleWeakStringFormat = {
  [key: number]: string
}

function ToDoHeader() {
  const date = new Date()

  const possibleWeakStringFormat: IPossibleWeakStringFormat = useMemo(() => {
    return {
      0: 'Domingo',
      1: 'Segunda',
      2: 'Terça',
      3: 'Quarta',
      4: 'Quinta',
      5: 'Sexta',
      6: 'Sábado',
    }
  }, [])

  const stringLongDate = date.toLocaleString('pt-BR', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })

  const stringfyWeakDay = possibleWeakStringFormat[date.getDay()]

  return (
    <header className="transition animate-fade mb-2">
      <h2 className="text-lg text-slate-500">{stringLongDate}</h2>
      <h2 className="font-bold text-3xl text-blue-500">{stringfyWeakDay}</h2>
    </header>
  )
}

export default memo(ToDoHeader)
