import { Location } from './Location'
import { Cart } from './Cart'
import { NavContainer } from './styles'

export function Navbar() {
  return (
    <NavContainer>
      <Location />
      <Cart />
    </NavContainer>
  )
}
