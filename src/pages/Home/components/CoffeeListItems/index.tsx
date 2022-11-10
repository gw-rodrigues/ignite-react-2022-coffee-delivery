import { CoffeeListItemsContainer, TypeOfCoffeeList } from './styles'

import tradicional from '../../assets/types/Americano.svg'
import { CoffeeListItemsBuy } from './Buy'
import { TCoffee } from '../..'

interface ICoffeeListItem {
  coffee: TCoffee
}

export function CoffeeListItems({ coffee }: ICoffeeListItem) {
  return (
    <CoffeeListItemsContainer>
      <figure>
        <img src={`/assets/${coffee.image}`} alt="" />
      </figure>
      <TypeOfCoffeeList>
        {coffee.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </TypeOfCoffeeList>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <CoffeeListItemsBuy coffee={coffee} />
    </CoffeeListItemsContainer>
  )
}
