import { priceSymbol } from '../../utils'
import * as S from './styles'

type Props = {
  products: Product[]
}

const CardProduct = ({ products }: Props) => (
  <>
    {products.map((product) => (
      <S.Card key={product.id}>
        <S.ImageWrapper to={`/produtos/${product.id}`}>
          <img src={product.imagem} alt={product.titulo} />
        </S.ImageWrapper>

        <S.InfoRow>
          <S.TittleBox>
            <S.Category>{product.categoria}</S.Category>
            <S.PriceWrapper>
              {product.valorComDesconto && (
                <S.OldPrice>{priceSymbol(product.valor)}</S.OldPrice>
              )}
              <S.CurrentPrice>
                {priceSymbol(product.valorComDesconto ?? product.valor)}
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
