import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid ${cores.cinza};

  @media (max-width: 640px) {
    padding: 16px 20px;
  }
`

export const Logo = styled.img`
  height: 18px;
`

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  @media (max-width: 640px) {
    display: none;
  }
`
export const Item = styled(Link)`
  text-decoration: none;
  color: ${cores.preto};
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${cores.chumbo};
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  a {
    display: flex;
    color: ${cores.preto};
    transition: color 0.2s ease;

    &:hover {
      color: ${cores.chumbo};
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`
