import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { QuantityButton } from '../../../../../components/QuantityButton'
import { QuantitySelect } from '../../../../../components/QuantityButton/styles'
import { CartContext } from '../../../../../contexts/cartContext'
import {
  ActionsContainer,
  BuyButton,
  BuyContainer,
  PriceContainer,
} from './styles'

interface ICoffeeListItemsBuyProps {
  id: string
}

export function CoffeeListItemsBuy({ id }: ICoffeeListItemsBuyProps) {
  const { addProductToCart } = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)

  function handleAddProductToCart() {
    addProductToCart(id, quantity)
  }

  return (
    <BuyContainer>
      <PriceContainer>
        <span>R$</span>
        <span>9,90</span>
      </PriceContainer>
      <ActionsContainer>
        <QuantityButton defaultValue={1} handleUpdateQuantity={setQuantity} />
        <BuyButton onClick={handleAddProductToCart}>
          <ShoppingCart weight="fill" size={22} />
        </BuyButton>
      </ActionsContainer>
    </BuyContainer>
  )
}
