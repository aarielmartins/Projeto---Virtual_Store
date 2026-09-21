import { priceSymbol } from '../../utils'
import * as S from './styles'
import ColorButton from '../CircleButton'

type Props = {
  products: Product[]
}

const CardProduct = ({ products }: Props) => (
  <>
    {products.map((product) => (
      <S.Card key={product.id}>
        <S.ImageWrapper>
          <img src={product.imagem} alt={product.titulo} />
          <ColorButton to={`/produtos/${product.id}`} />
        </S.ImageWrapper>

        <S.InfoRow>
          <S.TittleBox>
            <S.Category>{product.categoria}</S.Category>
            <S.PriceWrapper>
              {product.discountedPrice && (
                <S.OldPrice>{priceSymbol(product.valor)}</S.OldPrice>
              )}
              <S.CurrentPrice>
                {priceSymbol(product.discountedPrice ?? product.valor)}
              </S.CurrentPrice>
            </S.PriceWrapper>
          </S.TittleBox>
          <S.Name>{product.titulo}</S.Name>
        </S.InfoRow>
      </S.Card>
    ))}
  </>
)

export default CardProduct
