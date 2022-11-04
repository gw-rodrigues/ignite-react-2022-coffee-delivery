import { CoffeeListItemsContainer, TypeOfCoffeeList } from './styles'

import tradicional from '../../assets/types/Americano.svg'
import { CoffeeListItemsBuy } from './Buy'
import { TCoffee } from '../..'

interface ICoffeeListItem {
  coffee: TCoffee
}

export function CoffeeListItems({
  coffee: { name, description, price, types, image },
}: ICoffeeListItem) {
  return (
    <CoffeeListItemsContainer>
      <figure>
        <img src={`/assets/${image}`} alt="" />
      </figure>
      <TypeOfCoffeeList>
        {types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </TypeOfCoffeeList>
      <h3>{name}</h3>
      <p>{description}</p>
      <CoffeeListItemsBuy />
    </CoffeeListItemsContainer>
  )
}
