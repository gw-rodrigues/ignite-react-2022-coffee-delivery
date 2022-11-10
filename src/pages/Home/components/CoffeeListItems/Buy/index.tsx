import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { TCoffee } from '../../..'
import { QuantityButton } from '../../../../../components/QuantityButton'
import { CartContext } from '../../../../../contexts/cartContext'
import {
  ActionsContainer,
  BuyButton,
  BuyContainer,
  PriceContainer,
} from './styles'

interface ICoffeeListItemsBuyProps {
  coffee: TCoffee
}

export function CoffeeListItemsBuy({ coffee }: ICoffeeListItemsBuyProps) {
  const { addProductToCart } = useContext(CartContext)
  const [orderQuantity, setOrderQuantity] = useState(1)

  function handleAddProductToCart() {
    addProductToCart({ ...coffee, orderQuantity })
  }

  return (
    <BuyContainer>
      <PriceContainer>
        <span>R$</span>
        <span>{coffee.price.replace('.', ',')}</span>
      </PriceContainer>
      <ActionsContainer>
        <QuantityButton
          defaultValue={1}
          handleUpdateQuantity={setOrderQuantity}
        />
        <BuyButton onClick={handleAddProductToCart}>
          <ShoppingCart weight="fill" size={22} />
        </BuyButton>
      </ActionsContainer>
    </BuyContainer>
  )
}
