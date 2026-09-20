import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MdShoppingBag } from 'react-icons/md'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <S.Logo src={logo} alt="logotipo trama"></S.Logo>

      <S.Menu>
        <ul>
          <li>
            <S.Item to="/">Home</S.Item>
          </li>
          <li>
            <S.Item to="/habitar">Habitar</S.Item>
          </li>
          <li>
            <S.Item to="/vestir">Vestir</S.Item>
          </li>
        </ul>
      </S.Menu>

      <S.Icons>
        <a onClick={openCart}>
          <MdShoppingBag />
          <S.CartQuantity className={items.length > 0 ? 'lenght-products' : ''}>
            {items.length}
          </S.CartQuantity>
        </a>
      </S.Icons>
    </S.HeaderContainer>
  )
}

export default Header
