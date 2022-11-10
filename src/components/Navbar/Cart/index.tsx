import { ShoppingCart } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../contexts/cartContext'
import { CartContainer, CartItemsCount } from './styles'

export function Cart() {
  const { cart } = useContext(CartContext)
  const cartTotalItems = cart.reduce(
    (total, item) => total + item.orderQuantity,
    0,
  )

  return (
    <NavLink to="/checkout">
      <CartContainer>
        {cartTotalItems ? (
          <CartItemsCount>{cartTotalItems}</CartItemsCount>
        ) : null}

        <ShoppingCart size={22} weight="fill" />
      </CartContainer>
    </NavLink>
  )
}
