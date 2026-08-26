import {
  Card,
  ImageWrapper,
  InfoRow,
  Category,
  Name,
  PriceWrapper,
  OldPrice,
  CurrentPrice
} from './styles'
import ColorButton from '../CircleButton'
import Product from '../../models/Product'

type Props = {
  products: Product[]
}

export const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const CardProduct = ({ products }: Props) => (
  <>
    {products.map((product) => (
      <Card key={product.id}>
        <ImageWrapper>
          <img src={product.imagem} alt={product.titulo} />
          <ColorButton to={`/produtos/${product.id}`} />
        </ImageWrapper>

        <InfoRow>
          <div>
            <Category>{product.categoria}</Category>
            <Name>{product.titulo}</Name>
          </div>
          <PriceWrapper>
            {product.valorComDesconto && (
              <OldPrice>{formatarPreco(product.valor)}</OldPrice>
            )}
            <CurrentPrice>
              {formatarPreco(product.valorComDesconto ?? product.valor)}
            </CurrentPrice>
          </PriceWrapper>
        </InfoRow>
      </Card>
    ))}
  </>
)

export default CardProduct
