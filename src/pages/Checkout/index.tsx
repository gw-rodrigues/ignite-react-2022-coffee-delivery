import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'

import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { OrderReview } from './components/OrderReview'

import { CheckoutContainer, FormContainer } from './styles'
import { registeOrder } from '../../hooks/coffeeData'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cartContext'

export const listPaymentMethods = {
  credit: 'Cartão de crédito',
  debit: 'cartão de débito',
  money: 'dinheiro',
}

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
    .string()
    .min(1, 'UF no mínimo 1 carácter.')
    .max(2, 'UF no máximo 2 carácteres.'),
  paymentMethod: zod.nativeEnum(EPaymentMethods),
})

export type TOrderFormData = zod.infer<typeof orderFormValidationSchema>

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

  const navigate = useNavigate()
  const { cart } = useContext(CartContext)

  function handleFormSubmit(form: TOrderFormData) {
    if (!cart) navigate('/')

    const orderPrice = {
      totalPriceItems: '',
      deliveryPrice: '',
      totalPrice: '',
    }
    registeOrder({ form, cart, orderPrice })
    reset()
    navigate('/success', { replace: true, state: { ...form } })
  }

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
