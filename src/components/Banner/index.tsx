import chairImage from '../../assets/images/Poltrona.jpg'
import {
  BannerContainer,
  Content,
  Badge,
  Title,
  Description,
  Actions,
  ButtonPrimary,
  ButtonSecondary,
  ImageWrapper,
  HighlightTag
} from './styles'

const Banner = () => (
  <BannerContainer>
    <Content>
      <Badge href="#">Nova coleção · Outono</Badge>

      <Title>Vestir a casa, habitar o corpo.</Title>

      <Description>
        Trama é uma loja de peças em tecido — roupas e mobiliário estofado —
        feitas devagar, com fibras naturais e formas que envelhecem bem.
      </Description>

      <Actions>
        <ButtonPrimary href="#">Explorar Habitar →</ButtonPrimary>
        <ButtonSecondary href="#">Explorar Vestir</ButtonSecondary>
      </Actions>
    </Content>

    <ImageWrapper>
      <img src={chairImage} alt="Poltrona Orbe" />
      <HighlightTag>
        <span className="label">Em destaque</span>
        <span className="name">Poltrona Orbe · Cru</span>
      </HighlightTag>
    </ImageWrapper>
  </BannerContainer>
)

export default Banner
