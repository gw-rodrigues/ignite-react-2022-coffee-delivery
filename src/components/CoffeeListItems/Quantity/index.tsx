import { ShoppingCart } from 'phosphor-react'
import { QuantityContainer, BuyButton, QuantitySelect } from './styles'

export function QuantityButton() {
  return (
    <QuantityContainer>
      <QuantitySelect>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </QuantitySelect>
      <BuyButton>
        <ShoppingCart weight="fill" size={22} />
      </BuyButton>
    </QuantityContainer>
  )
}
