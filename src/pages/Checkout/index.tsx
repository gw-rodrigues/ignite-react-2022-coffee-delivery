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
import { Errors } from './components/Errors'

export const listPaymentMethods = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Débito',
  money: 'Dinheiro',
}

export enum EPaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const orderFormValidationSchema = zod.object({
  cep: zod
    .number()
    .min(11111111, 'CEP inválido no mínimo 8 dígitos.')
    .max(99999999, 'CEP inválido ou incorreto, máximo 8 dígitos.'),
  street: zod.string().min(1, 'Endereço é obrigatória.'),
  houseNumber: zod
    .number()
    .min(1, 'Número da casa é inválido ou incorreto.'),
  houseComplement: zod.string().optional(),
  district: zod.string().min(1, 'Bairro é obrigatório.'),
  city: zod.string().min(1, 'Cidade é obrigatória.'),
  uf: zod.string().min(2, 'UF: Unidades federativas é obrigatório.'),
  paymentMethod: zod.nativeEnum(EPaymentMethods, {
    errorMap: (issue, ctx) => {
      return { message: 'Método de pagamento é obrigatório.' }
    },
  }),
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

  const { handleSubmit, reset } = orderForm

  const navigate = useNavigate()
  const { cart, cleanCart } = useContext(CartContext)

  function handleFormSubmit(form: TOrderFormData) {
    const orderPrice = {
      totalPriceItems: '',
      deliveryPrice: '',
      totalPrice: '',
    }

    if (cart.length === 0) {
      navigate('/')
    } else {
      registeOrder({ form, cart, orderPrice })
      cleanCart()
      reset()
      navigate('/success', { replace: true, state: { ...form } })
    }
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFormSubmit)} action="">
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <FormProvider {...orderForm}>
            <Errors />
            <AddressForm />
            <PaymentForm />
          </FormProvider>
        </FormContainer>
        <OrderReview />
      </form>
    </CheckoutContainer>
  )
}
