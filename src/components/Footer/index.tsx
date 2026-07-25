import logo from '../../assets/images/logo.png'
import {
  FooterContainer,
  Top,
  Brand,
  Logo,
  Tagline,
  Columns,
  Column,
  ColumnTitle,
  ColumnLink,
  Bottom,
  Copyright
} from './styles'

const Footer = () => (
  <FooterContainer>
    <Top>
      <Brand>
        <Logo src={logo} alt="logotipo trama" />
        <Tagline>
          Roupas e mobiliário em tecido, feitos com calma no Brasil.
        </Tagline>
      </Brand>

      <Columns>
        <Column>
          <ColumnTitle>Loja</ColumnTitle>
          <ColumnLink href="#">Vestir</ColumnLink>
          <ColumnLink href="#">Habitar</ColumnLink>
          <ColumnLink href="#">Novidades</ColumnLink>
        </Column>

        <Column>
          <ColumnTitle>Ajuda</ColumnTitle>
          <ColumnLink href="#">Entrega</ColumnLink>
          <ColumnLink href="#">Trocas</ColumnLink>
          <ColumnLink href="#">Contato</ColumnLink>
        </Column>

        <Column>
          <ColumnTitle>Social</ColumnTitle>
          <ColumnLink href="#">Instagram</ColumnLink>
          <ColumnLink href="#">Pinterest</ColumnLink>
        </Column>
      </Columns>
    </Top>

    <Bottom>
      <Copyright>© 2026 Trama. Todos os direitos reservados.</Copyright>
    </Bottom>
  </FooterContainer>
)

export default Footer
