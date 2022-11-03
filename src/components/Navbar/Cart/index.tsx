import { ShoppingCart } from 'phosphor-react'
import { CartContainer, CartItemsCount } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CartItemsCount>3</CartItemsCount>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  )
}
