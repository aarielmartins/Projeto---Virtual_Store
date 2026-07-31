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

const CardProduct = ({ products }: Props) => (
  <>
    {products.map((product) => (
      <Card key={product.id} href="#">
        <ImageWrapper>
          <img src={product.image} alt={product.name} />
          <ColorButton to="/vestir" />
        </ImageWrapper>

        <InfoRow>
          <div>
            <Category>{product.category}</Category>
            <Name>{product.name}</Name>
          </div>
          <PriceWrapper>
            {product.discount && <OldPrice>{product.price}</OldPrice>}
            <CurrentPrice>{product.discount ?? product.price}</CurrentPrice>
          </PriceWrapper>
        </InfoRow>
      </Card>
    ))}
  </>
)

export default CardProduct
