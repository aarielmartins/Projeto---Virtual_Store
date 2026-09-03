import { MdShoppingBag } from 'react-icons/md'
// import { MdSearch } from 'react-icons/md'
import logo from '../../assets/images/logo.png'
import {
  HeaderContainer,
  Logo,
  Menu,
  Icons,
  Item,
  CartQuantity
} from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <Logo src={logo} alt="logotipo trama"></Logo>

      <Menu>
        <ul>
          <li>
            <Item to="/">Home</Item>
          </li>
          <li>
            <Item to="/habitar">Habitar</Item>
          </li>
          <li>
            <Item to="/vestir">Vestir</Item>
          </li>
        </ul>
      </Menu>

      <Icons>
        {/* <a href="#">
          <MdSearch />
        </a> */}
        <a onClick={openCart}>
          <MdShoppingBag />
          <CartQuantity className={items.length > 0 ? 'lenght-products' : ''}>
            {items.length}
          </CartQuantity>
        </a>
      </Icons>
    </HeaderContainer>
  )
}

export default Header
