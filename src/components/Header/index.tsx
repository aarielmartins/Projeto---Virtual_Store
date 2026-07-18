import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.svg'
import shop from '../../assets/images/shop.svg'
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
        <img src={search} alt="logotipo trama"></img>
      </a>
      <a href="#">
        <img src={shop} alt="logotipo trama"></img>
      </a>
    </Icons>
  </HeaderContainer>
)

export default Header
