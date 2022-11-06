import { Navbar } from '../Navbar'

import { HeaderContainer } from './styles'
import LogoImg from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoImg} alt="Coffee Cup - Coffee delivery" />
      </NavLink>
      <Navbar />
    </HeaderContainer>
  )
}
