import { HighlightsContainer, Title, Grid } from './styles'
import CardProduct from '../CardProduct'
import Product from '../../data/allProducts'

const Highlights = () => (
  <HighlightsContainer>
    <Title>Em destaque</Title>

    <Grid>
      <CardProduct products={Product} />
    </Grid>
  </HighlightsContainer>
)

export default Highlights
