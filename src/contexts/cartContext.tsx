import { createContext, ReactNode, useState } from 'react'
import { TCoffee } from '../pages/Home'

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
  const [cart, setCart] = useState<TCartProduct[]>([])

  function updateQuantityFromProduct(id: string, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity
      }
      return item
    })
    setCart(newCart)
  }

  function addProductToCart(product: TCartProduct) {
    const hasProductOnCart = cart.some((item) => item.id === product.id)
    if (hasProductOnCart) {
      updateQuantityFromProduct(product.id, product.quantity)
      return
    }

    setCart((prev) => [...prev, product])
  }

  function remProductFromCart(id: string) {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
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
