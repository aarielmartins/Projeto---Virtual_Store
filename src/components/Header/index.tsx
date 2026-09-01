import { MdSearch, MdShoppingBag } from 'react-icons/md'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, Logo, Menu, Icons, Item } from './styles'
import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

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
        </a>
      </Icons>
    </HeaderContainer>
  )
}

export default Header
