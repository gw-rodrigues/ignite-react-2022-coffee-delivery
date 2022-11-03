import { QuantityButton } from '../Quantity'
import { BuyContainer, PriceContainer } from './styles'

export function CoffeeListItemsBuy() {
  return (
    <BuyContainer>
      <PriceContainer>
        <span>R$</span>
        <span>9,90</span>
      </PriceContainer>
      <QuantityButton />
    </BuyContainer>
  )
}
