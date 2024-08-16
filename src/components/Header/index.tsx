import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'
export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logoIgnite} alt="" />
      </span>
      <nav>
        <NavLink title="Timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="History" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
