import { Navbar } from '../Navbar'

import { HeaderContainer } from './styles'
import LogoImg from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={LogoImg} alt="Coffee Cup - Coffee delivery" />
      </a>
      <Navbar />
    </HeaderContainer>
  )
}
