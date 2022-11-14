import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { ErrorsContainer } from './styles'

export function Errors() {
  const {
    formState: { errors },
  } = useFormContext()

  console.log(errors)
  if (Object.keys(errors).length === 0) return null

  return (
    <ErrorsContainer>
      <ErrorMessage
        errors={errors}
        name="cep"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="street"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="houseNumber"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="district"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="city"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="uf"
        render={({ message }) => <p>- {message}</p>}
      />

      <ErrorMessage
        errors={errors}
        name="paymentMethod"
        render={({ message }) => <p>- {message}</p>}
      />
    </ErrorsContainer>
  )
}
