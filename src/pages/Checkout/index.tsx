import { FormProvider, FormState, useForm, useFormState } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { OrderReview } from './components/OrderReview'
import { CheckoutContainer, FormContainer } from './styles'

export enum EPaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const orderFormValidationSchema = zod.object({
  cep: zod
    .number()
    .min(11111111, 'CEP no mínimo 8 números.')
    .max(99999999, 'CEP no máximo 8 números.'),
  street: zod.string().min(1, 'Endereço é obrigatória.'),
  houseNumber: zod.number().min(1, 'Número da casa é obrigatória.'),
  houseComplement: zod.string().optional(),
  district: zod.string().min(1, 'Bairro é obrigatória.'),
  city: zod.string().min(1, 'Cidade é obrigatória.'),
  uf: zod
    .number()
    .min(1, 'UF no mínimo 2 números.')
    .max(26, 'UF no máximo 2 números.'),
  paymentMethod: zod.nativeEnum(EPaymentMethods),
})

type TOrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const orderForm = useForm<TOrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      cep: undefined,
      street: undefined,
      houseNumber: undefined,
      houseComplement: undefined,
      district: undefined,
      city: undefined,
      uf: undefined,
      paymentMethod: undefined,
    },
  })

  const {
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = orderForm

  console.log(errors)

  function handleFormSubmit(data: TOrderFormData) {
    // console.log(data)
    // reset()
  }

  console.log(JSON.stringify(orderForm.watch(), null, 2))

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} action="">
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <FormProvider {...orderForm}>
            <AddressForm />
            <PaymentForm />
          </FormProvider>
        </FormContainer>
        <OrderReview />
      </form>
    </CheckoutContainer>
  )
}
