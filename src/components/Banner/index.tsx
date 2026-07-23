import chairImage from '../../assets/images/Poltrona.jpg'
import Tag from '../Tag'
import {
  BannerContainer,
  Content,
  Badge,
  Title,
  Description,
  Actions,
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
        <Tag>Explorar Habitar</Tag>
        <Tag color="background" border="solid">
          Explorar Vestir
        </Tag>
      </Actions>
    </Content>

    <ImageWrapper href="#">
      <img src={chairImage} alt="Poltrona Orbe" />
      <HighlightTag>
        <span className="label">Em destaque</span>
        <span className="name">Poltrona Orbe · Cru</span>
      </HighlightTag>
    </ImageWrapper>
  </BannerContainer>
)

export default Banner
