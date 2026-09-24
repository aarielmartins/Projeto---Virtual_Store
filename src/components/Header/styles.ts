import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

type MenuProps = {
  isOpen: boolean
}

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
  z-index: 100;

  @media (max-width: 640px) {
    mangin: 16px 20px;
  }
`

export const Logo = styled.img`
  height: 18px;
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 90;
`

export const Menu = styled.nav<MenuProps>`
  ul {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  @media (max-width: 640px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 200px;
    background: ${cores.branco};
    box-shadow: -4px 0 24px rgba(0, 0, 0, 0.1);
    z-index: 101;
    border-radius: 34px;

    display: flex;
    align-items: center;

    transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
    transition: transform 0.3s ease;

    ul {
      flex-direction: column;
      gap: 24px;
      width: 100%;
      padding: 0 32px;
    }
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

  @media (max-width: 640px) {
    display: block;
    font-size: 18px;
  }
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  a {
    position: relative;
    display: flex;
    color: ${cores.preto};
    transition: color 0.2s ease;
    cursor: pointer;

    &:hover {
      color: ${cores.chumbo};
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${cores.preto};
  cursor: pointer;
  padding: 0;
  position: relative;
  z-index: 102;

  svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 640px) {
    display: flex;
  }
`

export const CartQuantity = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;

  display: none;
  align-items: center;
  justify-content: center;

  width: 15px;
  height: 15px;

  background-color: ${cores.detalhe};
  color: ${cores.preto};

  border-radius: 50%;

  font-size: 9px;
  font-weight: 600;
  line-height: 1;

  &.lenght-products {
    display: flex;
  }
`
