import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <S.Top>
      <S.Brand>
        <S.Logo src={logo} alt="logotipo trama" />
        <S.Tagline>
          Roupas e mobiliário em tecido, feitos com calma no Brasil.
        </S.Tagline>
      </S.Brand>

      <S.Columns>
        <S.Column>
          <S.ColumnTitle>Loja</S.ColumnTitle>
          <S.ColumnLink to="/vestir">Vestir</S.ColumnLink>
          <S.ColumnLink to="/habitar">Habitar</S.ColumnLink>
        </S.Column>
      </S.Columns>
    </S.Top>

    <S.Bottom>
      <S.Copyright>© 2026 Trama. Todos os direitos reservados.</S.Copyright>
    </S.Bottom>
  </S.FooterContainer>
)

export default Footer
