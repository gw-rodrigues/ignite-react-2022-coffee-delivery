import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { QuantityButton } from '../../../../components/QuantityButton'
import { CartContext } from '../../../../contexts/cartContext'

import {
  ActionsButtons,
  ActionsContainer,
  ConfirmButton,
  ItemPrice,
  OrderContainer,
  OrderItem,
  OrderItems,
  RemoveButton,
  TotalContainer,
} from './styles'

export function OrderReview() {
  const { cart, updateQuantityFromProduct, remProductFromCart } =
    useContext(CartContext)

  const totalProductsPrice = cart.reduce((total, product) => {
    console.log(product.orderQuantity)
    return total + Number(product.price) * product.orderQuantity
  }, 0)
  const deliveryPrice = 3.5
  const totalPrice = totalProductsPrice ? totalProductsPrice + deliveryPrice : 0

  return (
    <OrderContainer>
      <h3>Cafés selecionados</h3>
      <OrderItems>
        {cart &&
          cart.map((item) => {
            return (
              <OrderItem key={item.id}>
                <img src={`/assets/${item.image}`} alt={item.name} />
                <ActionsContainer>
                  <p>{item.name}</p>
                  <ActionsButtons>
                    <QuantityButton
                      defaultValue={item.orderQuantity}
                      handleUpdateQuantity={(quantity) =>
                        updateQuantityFromProduct(item.id, quantity)
                      }
                    />
                    <RemoveButton onClick={() => remProductFromCart(item.id)}>
                      <Trash size={16} />
                      remover
                    </RemoveButton>
                  </ActionsButtons>
                </ActionsContainer>
                <ItemPrice>R$ {item.price}</ItemPrice>
              </OrderItem>
            )
          })}

        <TotalContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ {totalProductsPrice.toFixed(2).replace('.', ',')}</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ {deliveryPrice.toFixed(2).replace('.', ',')}</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ {totalPrice.toFixed(2).replace('.', ',')}</span>
          </div>
        </TotalContainer>

        <ConfirmButton type="submit">confirmar pedido</ConfirmButton>
      </OrderItems>
    </OrderContainer>
  )
}
