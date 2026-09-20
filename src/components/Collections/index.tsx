import { useGetProductQuery } from '../../services/api'
import { FiArrowRight } from 'react-icons/fi'
import ColorButton from '../CircleButton'
import * as S from './styles'
import Loader from '../Loader'

const Collections = () => {
  const { data: wearProduct } = useGetProductQuery('15')
  const { data: inhabitProduct } = useGetProductQuery('12')

  if (!wearProduct || !inhabitProduct) {
    return <Loader />
  }

  return (
    <S.CollectionsContainer>
      <S.Header>
        <S.Title>Coleções</S.Title>
        <S.Subtitle>Duas linhas, um mesmo jeito de fazer.</S.Subtitle>
      </S.Header>

      <S.Grid>
        <S.Card to="/vestir">
          <img src={wearProduct.imagem} alt="Coleção Vestir" />
          <S.CardInfo>
            <S.CardLabel>Vestir</S.CardLabel>
            <S.CardName>
              Peças em tecidos nobre, cortadas e trançadas a mão.
            </S.CardName>
          </S.CardInfo>
          <ColorButton icon={FiArrowRight} to="/vestir" />
        </S.Card>

        <S.Card to="/habitar">
          <img src={inhabitProduct.imagem} alt="Coleção Habitar" />
          <S.CardInfo>
            <S.CardLabel>Habitar</S.CardLabel>
            <S.CardName>
              Mobiliário para descansar o corpo e o olhar.
            </S.CardName>
          </S.CardInfo>
          <ColorButton icon={FiArrowRight} to="/habitar" />
        </S.Card>
      </S.Grid>
    </S.CollectionsContainer>
  )
}
export default Collections
