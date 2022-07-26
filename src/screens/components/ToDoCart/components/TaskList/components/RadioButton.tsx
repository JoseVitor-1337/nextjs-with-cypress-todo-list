import { memo, useRef, InputHTMLAttributes } from 'react'

interface IRadioButton extends InputHTMLAttributes<HTMLInputElement> {
  value: string
  isActive: boolean
}

function RadioButton({
  isActive,
  name,
  value,
  onChange,
  ...rest
}: IRadioButton) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const circleSize = isActive ? 'bg-blue-500 active' : 'bg-white'

  return (
    <div className="flex items-center">
      <button
        data-cy={isActive ? `active-${value}` : `inactive-${value}`}
        onClick={() => inputRef.current?.click()}
        className="active flex items-center justify-center border-2 border-blue-500 h-5 w-5 rounded-full focus:outline-none"
      >
        <div
          className={`cursor-pointer duration-300 rounded-full absolute border-1 border-white ${circleSize} w-3 h-3`}
        />
      </button>

      <input
        hidden
        ref={inputRef}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  )
}

export default memo(RadioButton)
