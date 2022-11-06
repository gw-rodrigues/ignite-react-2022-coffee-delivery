import { AddressForm } from './components/AddressForm'
import { PaymentForm } from './components/PaymentForm'
import { OrderReview } from './components/OrderReview'
import { CheckoutContainer, FormContainer } from './styles'
import { HtmlHTMLAttributes, ReactHTMLElement } from 'react'

export function Checkout() {
  function handleFormSubmit(e: any) {
    e.preventDefault()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleFormSubmit}>
        <FormContainer>
          <h3>Complete seu pedido</h3>
          <AddressForm />
          <PaymentForm />
        </FormContainer>
        <OrderReview />
      </form>
    </CheckoutContainer>
  )
}
