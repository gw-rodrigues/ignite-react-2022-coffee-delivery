import { Trash } from 'phosphor-react'
import { QuantityButton } from '../../../../components/QuantityButton'
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
  return (
    <OrderContainer>
      <h3>Cafés selecionados</h3>
      <OrderItems>
        <OrderItem>
          <img src="/assets/Americano.svg" alt="Americano" />
          <ActionsContainer>
            <p>Expresso Tradicional</p>
            <ActionsButtons>
              <QuantityButton />
              <RemoveButton>
                <Trash size={16} />
                remover
              </RemoveButton>
            </ActionsButtons>
          </ActionsContainer>
          <ItemPrice>R$ 9,90</ItemPrice>
        </OrderItem>

        <OrderItem>
          <img src="/assets/Americano.svg" alt="Americano" />
          <ActionsContainer>
            <p>Expresso Tradicional</p>
            <ActionsButtons>
              <QuantityButton />
              <RemoveButton>
                <Trash size={16} />
                remover
              </RemoveButton>
            </ActionsButtons>
          </ActionsContainer>
          <ItemPrice>R$ 9,90</ItemPrice>
        </OrderItem>

        <TotalContainer>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </TotalContainer>

        <ConfirmButton type="submit">confirmar pedido</ConfirmButton>
      </OrderItems>
    </OrderContainer>
  )
}
