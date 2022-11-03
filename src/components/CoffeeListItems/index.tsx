import { CoffeeListItemsContainer, TypeOfCoffeeList } from './styles'

import tradicional from '../../assets/types/Americano.svg'
import { CoffeeListItemsBuy } from './Buy'

export function CoffeeListItems() {
  return (
    <CoffeeListItemsContainer>
      <figure>
        <img src={tradicional} alt="" />
      </figure>
      <TypeOfCoffeeList>
        <li>Tradicional</li>
      </TypeOfCoffeeList>
      <h3>Expresso Tradicional</h3>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <CoffeeListItemsBuy />
    </CoffeeListItemsContainer>
  )
}
