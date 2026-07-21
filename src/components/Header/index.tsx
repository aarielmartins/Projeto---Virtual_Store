import { MdSearch, MdShoppingBag } from 'react-icons/md'
import logo from '../../assets/images/logo.png'
import { HeaderContainer, Logo, Menu, Icons } from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} alt="logotipo trama"></Logo>

    <Menu>
      <ul>
        <li>
          <a href="#">Vestir</a>
        </li>
        <li>
          <a href="#">Habitar</a>
        </li>
        <li>
          <a href="#">Sobre</a>
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
