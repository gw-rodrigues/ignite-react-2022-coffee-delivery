import { InputHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { SelectElement } from './styles'

interface ISelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  id: string
  children: ReactNode
  inputSize?: 'sm' | 'md' | 'lg'
}

export function Select({
  id,
  inputSize = 'lg',
  children,
  ...rest
}: ISelectProps) {
  const { register, watch } = useFormContext()

  const selectRegister = register(id)
  const isSelected = watch(id) ? true : false

  return (
    <SelectElement
      {...selectRegister}
      inputSize={inputSize}
      {...rest}
      valueSelected={isSelected}
    >
      {children}
    </SelectElement>
  )
}
