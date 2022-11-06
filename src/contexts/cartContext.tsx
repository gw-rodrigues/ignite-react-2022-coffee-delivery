import { createContext, ReactNode, useState } from 'react'
import { string } from 'zod'

export type TCart = {
  id: string
  quantity: number
}

interface ICartContext {
  cart: TCart[]
  updateQuantityFromProduct: (id: string, quantity: number) => void

  addProductToCart: (id: string, quantity: number) => void
  remProductFromCart: (id: string) => void
}

export const CartContext = createContext({} as ICartContext)

interface ICartContextProvider {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cart, setCart] = useState<TCart[]>([])

  function updateQuantityFromProduct(id: string, quantity: number) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity
      }
      return item
    })
    setCart(newCart)
  }

  function addProductToCart(id: string, quantity: number) {
    const hasProductOnCart = cart.some((item) => item.id === id)
    if (hasProductOnCart) {
      updateQuantityFromProduct(id, quantity)
      return
    }

    setCart((prev) => [...prev, { id, quantity }])
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
