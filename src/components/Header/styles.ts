import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
  border-bottom: 1px solid ${cores.cinza};

  @media (max-width: 640px) {
    padding: 16px 20px;
  }
`

export const Logo = styled.img`
  height: 22px;
`

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${cores.preto};
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: ${cores.chumbo};
    }
  }

  @media (max-width: 640px) {
    display: none;
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
    width: 30px;
    height: 30px;
  }
`
