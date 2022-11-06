import { ShoppingCart } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../../contexts/cartContext'
import { CartContainer, CartItemsCount } from './styles'

export function Cart() {
  const { cart } = useContext(CartContext)
  let cartTotalItems = 0

  useEffect(() => {
    cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0)
  }, [cart])

  return (
    <CartContainer>
      {cartTotalItems ? (
        <CartItemsCount>{cartTotalItems}</CartItemsCount>
      ) : null}
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  )
}
