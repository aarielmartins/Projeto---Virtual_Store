import { HighlightsContainer, Title, Grid } from './styles'
import CardProduct from '../CardProduct'

const Highlights = () => (
  <HighlightsContainer>
    <Title>Em destaque</Title>

    <Grid>
      <CardProduct />
    </Grid>
  </HighlightsContainer>
)

export default Highlights
