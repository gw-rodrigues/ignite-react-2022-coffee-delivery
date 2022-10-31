import { MapPin } from 'phosphor-react'
import { LocalizationContainer } from './styles'

export function Location() {
  return (
    <LocalizationContainer>
      <MapPin size={22} weight="fill" />
      <span>Porto Alegre, RS</span>
    </LocalizationContainer>
  )
}
