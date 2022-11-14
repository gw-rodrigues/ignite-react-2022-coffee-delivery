import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { TCoffee } from '../pages/Home'
import {
  addProductAction,
  removeProductAction,
  updateProductQuantityAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/cartReducer'

export type TCartProduct = TCoffee & { orderQuantity: number }

interface ICartContext {
  cart: TCartProduct[]
  updateQuantityFromProduct: (id: string, quantity: number) => void
  addProductToCart: (product: TCartProduct) => void
  remProductFromCart: (id: string) => void
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProvider {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] }, () => {
    const storeStateJSON = localStorage.getItem(
      '@ignite-coffee:cart-state-1.0.0',
    )

    if (storeStateJSON) {
      return JSON.parse(storeStateJSON)
    }
    return {
      cart: [],
    }
  })

  const { cart } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@ignite-coffee:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProductToCart(product: TCartProduct) {
    const hasProductOnCart = cart.some((item) => item.id === product.id)
    if (hasProductOnCart) {
      dispatch(updateProductQuantityAction(product.id, product.orderQuantity))
      return
    }

    dispatch(addProductAction(product))
  }

  function updateQuantityFromProduct(id: string, orderQuantity: number) {
    dispatch(updateProductQuantityAction(id, orderQuantity))
  }

  function remProductFromCart(id: string) {
    dispatch(removeProductAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantityFromProduct,
        addProductToCart,
        remProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
