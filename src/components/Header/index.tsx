import { MdSearch, MdShoppingBag } from 'react-icons/md'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, Logo, Menu, Icons, Item } from './styles'

const Header = () => (
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
      <a href="#">
        <MdSearch />
      </a>
      <a href="#">
        <MdShoppingBag />
      </a>
    </Icons>
  </HeaderContainer>
)

export default Header
