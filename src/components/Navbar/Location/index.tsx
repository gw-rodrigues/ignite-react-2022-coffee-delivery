import { MapPin } from 'phosphor-react'
import { MouseEvent, useState } from 'react'
import {
  LocalizationButton,
  LocalizationContainer,
  LocalizationList,
} from './styles'

export function Location() {
  const [isHidden, setIsHidden] = useState(true)
  const [location, setLocation] = useState('Porto Alegre, RS')

  function handleSelectShopLocation(e: MouseEvent<HTMLButtonElement>) {
    const { innerText }: any = e.target
    setLocation(innerText)
    setIsHidden(true)
  }
  return (
    <LocalizationContainer>
      <LocalizationButton
        onClick={() => {
          setIsHidden(!isHidden)
        }}
      >
        <MapPin size={22} weight="fill" />
        <span>{location}</span>
      </LocalizationButton>
      <LocalizationList hidden={isHidden}>
        <button onClick={handleSelectShopLocation}>Santa Catarina, SC</button>
        <button onClick={handleSelectShopLocation}>São Paulo, SP</button>
        <button onClick={handleSelectShopLocation}>Bahia, MG</button>
        <button onClick={handleSelectShopLocation}>Tocantins, TO</button>
        <button onClick={handleSelectShopLocation}>Goiás, GO</button>
        <button onClick={handleSelectShopLocation}>Rio de Janeiro, RJ</button>
      </LocalizationList>
    </LocalizationContainer>
  )
}
