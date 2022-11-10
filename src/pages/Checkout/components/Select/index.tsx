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
  const { register } = useFormContext()

  const selectRegister = register(id)

  return (
    <SelectElement {...selectRegister} inputSize={inputSize} {...rest}>
      {children}
    </SelectElement>
  )
}
