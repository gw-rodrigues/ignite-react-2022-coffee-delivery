import { InputHTMLAttributes, ReactHTMLElement } from 'react'
import { InputElement, InputOptionalElement } from './styles'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: 'sm' | 'md' | 'lg'
  optional?: boolean
}

export function Input({
  inputSize = 'lg',
  optional = false,
  ...rest
}: IInputProps) {
  return optional ? (
    <InputOptionalElement inputSize={inputSize}>
      <input {...rest} />
      <span>Opcional</span>
    </InputOptionalElement>
  ) : (
    <InputElement {...rest} inputSize={inputSize} />
  )
}
