import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { number } from 'zod'
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

  /**
   * Must use like that if not will not loading the register properties correctly. Can cause some bugs with zod validation.
   */
  const inputRegister = register(id, {
    valueAsNumber: rest.type === 'number' ? true : false,
    valueAsDate: rest.type === 'date' ? true : false,
  })

  return optional ? (
    <InputOptionalElement inputSize={inputSize}>
      <input {...inputRegister} {...rest} />
      <span>Opcional</span>
    </InputOptionalElement>
  ) : (
    <InputElement {...rest} inputSize={inputSize} {...register(id)} />
  )
}
