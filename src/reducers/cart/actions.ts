import { TCartProduct } from '../../contexts/cartContext'

export enum EActionsTypes {
  ADD_PRODUCT = 'ADD_PRODUCT',
  UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function addProductAction(newProduct: TCartProduct) {
  return {
    type: EActionsTypes.ADD_PRODUCT,
    payload: { newProduct },
  }
}

export function updateProductQuantityAction(id: string, orderQuantity: number) {
  return {
    type: EActionsTypes.UPDATE_PRODUCT_QUANTITY,
    payload: { id, orderQuantity },
  }
}

export function removeProductAction(id: string) {
  return {
    type: EActionsTypes.REMOVE_PRODUCT,
    payload: { id },
  }
}
