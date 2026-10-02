import { useGetProductQuery } from '../../services/api'
import Loader from '../Loader'
import Tag from '../Tag'
import * as S from './styles'

const Banner = () => {
  const { data: Product } = useGetProductQuery('4')

  if (!Product) {
    return <Loader />
  }

  return (
    <S.BannerContainer>
      <S.Content>
        <S.Badge href="#highlights">Conheça nossa coleção</S.Badge>

        <S.Title>Vestir a casa, habitar o corpo.</S.Title>

        <S.Description>
          Trama é uma loja de peças em tecidos nobres: sejam eles roupas,
          mobiliários ou decoração. Feitos devagar, com fibras naturais e
          técnicas manuais.
        </S.Description>

        <S.Actions>
          <Tag to="/habitar">Explorar Habitar</Tag>
          <Tag to="/vestir" color="background" border="solid">
            Explorar Vestir
          </Tag>
        </S.Actions>
      </S.Content>

      <S.ImageWrapper to={`/produtos/${Product.id}`}>
        <img src={Product.imagem} alt="Poltrona Orbe" />
        <S.HighlightTag>
          <span className="label">Em destaque</span>
          <span className="name">{Product.titulo}</span>
        </S.HighlightTag>
      </S.ImageWrapper>
    </S.BannerContainer>
  )
}

export default Banner
