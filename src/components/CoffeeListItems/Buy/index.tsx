import { ShoppingCart } from 'phosphor-react'
import { QuantityButton } from '../../QuantityButton'
import {
  ActionsContainer,
  BuyButton,
  BuyContainer,
  PriceContainer,
} from './styles'

export function CoffeeListItemsBuy() {
  return (
    <BuyContainer>
      <PriceContainer>
        <span>R$</span>
        <span>9,90</span>
      </PriceContainer>
      <ActionsContainer>
        <QuantityButton />
        <BuyButton>
          <ShoppingCart weight="fill" size={22} />
        </BuyButton>
      </ActionsContainer>
    </BuyContainer>
  )
}
