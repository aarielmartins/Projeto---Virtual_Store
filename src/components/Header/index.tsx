import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { RootReducer } from '../../store'
import { FiMenu, FiX } from 'react-icons/fi'
import { MdShoppingBag } from 'react-icons/md'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      {isMenuOpen && <S.Overlay onClick={closeMenu} />}
      <S.HeaderContainer>
        <S.Logo src={logo} alt="logotipo trama"></S.Logo>

        <S.Menu isOpen={isMenuOpen}>
          <ul>
            <li>
              <S.Item to="/" onClick={closeMenu}>
                Home
              </S.Item>
            </li>
            <li>
              <S.Item to="/habitar" onClick={closeMenu}>
                Habitar
              </S.Item>
            </li>
            <li>
              <S.Item to="/vestir" onClick={closeMenu}>
                Vestir
              </S.Item>
            </li>
          </ul>
        </S.Menu>

        <S.Icons>
          <a onClick={openCart}>
            <MdShoppingBag />
            <S.CartQuantity
              className={items.length > 0 ? 'lenght-products' : ''}
            >
              {items.length}
            </S.CartQuantity>
          </a>

          <S.MenuButton
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </S.MenuButton>
        </S.Icons>
      </S.HeaderContainer>
    </>
  )
}

export default Header
