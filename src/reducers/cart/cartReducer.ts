import { string } from 'zod'
import { TCartProduct } from '../../contexts/cartContext'
import { EActionsTypes } from './actions'

interface ICartState {
  cart: TCartProduct[]
}

interface IActionReceived {
  type: keyof typeof EActionsTypes
  payload?: any
}

export function cartReducer(state: ICartState, action: IActionReceived) {
  switch (action.type) {
    case EActionsTypes.ADD_PRODUCT:
      return { ...state, cart: [...state.cart, action.payload.newProduct] }

    case EActionsTypes.UPDATE_PRODUCT_QUANTITY:
      return {
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item.orderQuantity = action.payload.orderQuantity
          }
          return item
        }),
      }

    case EActionsTypes.REMOVE_PRODUCT:
      return {
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      }

    case EActionsTypes.CLEAN_CART:
      return {
        cart: [],
      }

    default:
      return state
  }
}
