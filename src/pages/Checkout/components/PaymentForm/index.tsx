import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  PaymentMethodContainer,
  PaymentMethodSelectButton,
  PaymentMethodSelectContainer,
} from './styled'

export function PaymentForm() {
  return (
    <PaymentMethodContainer>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </header>
      <PaymentMethodSelectContainer>
        <PaymentMethodSelectButton>
          <CreditCard size={16} />
          Cartão de crédito
        </PaymentMethodSelectButton>
        <PaymentMethodSelectButton>
          <Bank size={16} />
          cartão de débito
        </PaymentMethodSelectButton>
        <PaymentMethodSelectButton selected disabled>
          <Money size={16} />
          dinheiro
        </PaymentMethodSelectButton>
      </PaymentMethodSelectContainer>
    </PaymentMethodContainer>
  )
}
