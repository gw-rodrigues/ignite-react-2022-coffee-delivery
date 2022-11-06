import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { OrderReview } from './components/OrderReview'
import { CheckoutContainer, FormContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FormContainer>
        <h3>Complete seu pedido</h3>
        <AddressForm />
        <PaymentForm />
      </FormContainer>
      <OrderReview />
    </CheckoutContainer>
  )
}
