import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledNavbar = styled.nav`
  background-color: var(--primary);
  padding: 12px 24px;
`

const StyledLink = styled(NavLink)`
  color: #aaa;
  text-decoration: none;
  padding: 12px;

  &.active {
    color: #fff;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledLink className={({isActive}) => isActive ? 'active' : ''} to="/">Index</StyledLink>
      <StyledLink className={({isActive}) => isActive ? 'active' : ''} to="/about">
        About
      </StyledLink>
    </StyledNavbar>
  )
}