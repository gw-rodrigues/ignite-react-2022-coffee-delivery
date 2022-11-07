import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputElement, InputOptionalElement } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  inputSize?: 'sm' | 'md' | 'lg'
  optional?: boolean
}

export function Input({
  id,
  inputSize = 'lg',
  optional = false,
  ...rest
}: IInputProps) {
  const { register } = useFormContext()
  return optional ? (
    <InputOptionalElement inputSize={inputSize}>
      <input {...rest} {...register(id)} />
      <span>Opcional</span>
    </InputOptionalElement>
  ) : (
    <InputElement {...rest} inputSize={inputSize} {...register(id)} />
  )
}
