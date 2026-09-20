import chairImage from '../../assets/images/Poltrona.jpg'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => (
  <S.BannerContainer>
    <S.Content>
      <S.Badge href="#highlights">Conheça nossa coleção</S.Badge>

      <S.Title>Vestir a casa, habitar o corpo.</S.Title>

      <S.Description>
        Trama é uma loja de peças em tecido — roupas e mobiliário estofado —
        feitas devagar, com fibras naturais e formas que envelhecem bem.
      </S.Description>

      <S.Actions>
        <Tag to="/habitar">Explorar Habitar</Tag>
        <Tag to="/vestir" color="background" border="solid">
          Explorar Vestir
        </Tag>
      </S.Actions>
    </S.Content>

    <S.ImageWrapper href="#">
      <img src={chairImage} alt="Poltrona Orbe" />
      <S.HighlightTag>
        <span className="label">Em destaque</span>
        <span className="name">Poltrona Orbe · Cru</span>
      </S.HighlightTag>
    </S.ImageWrapper>
  </S.BannerContainer>
)

export default Banner
