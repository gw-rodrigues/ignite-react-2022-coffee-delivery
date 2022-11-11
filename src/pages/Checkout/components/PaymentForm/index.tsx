import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

import {
  PaymentMethodContainer,
  PaymentMethodSelectButton,
  PaymentMethodSelectContainer,
} from './styled'
import { EPaymentMethods } from '../..'

type TPaymentMethods = keyof typeof EPaymentMethods | undefined

export function PaymentForm() {
  const { register } = useFormContext()

  const [paymentMethod, setPaymentMethod] = useState<TPaymentMethods>()

  const isDebit = paymentMethod === 'debit' ? true : false
  const isCredit = paymentMethod === 'credit' ? true : false
  const isMoney = paymentMethod === 'money' ? true : false

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
        <PaymentMethodSelectButton selected={isCredit}>
          <input
            {...register('paymentMethod')}
            id="credit"
            type="radio"
            value="credit"
            onChange={() => setPaymentMethod('credit')}
          />
          <label htmlFor="credit">
            <CreditCard size={16} />
            Cartão de crédito
          </label>
        </PaymentMethodSelectButton>
        <PaymentMethodSelectButton selected={isDebit}>
          <input
            {...register('paymentMethod')}
            id="debit"
            type="radio"
            value="debit"
            onChange={() => setPaymentMethod('debit')}
          />
          <label htmlFor="debit">
            <Bank size={16} />
            cartão de débito
          </label>
        </PaymentMethodSelectButton>
        <PaymentMethodSelectButton selected={isMoney}>
          <input
            {...register('paymentMethod')}
            id="money"
            type="radio"
            value="money"
            onChange={() => setPaymentMethod('money')}
          />
          <label htmlFor="money">
            <Money size={16} />
            dinheiro
          </label>
        </PaymentMethodSelectButton>
      </PaymentMethodSelectContainer>
    </PaymentMethodContainer>
  )
}
