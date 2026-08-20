import { HighlightsContainer, Title, Grid } from './styles'
import CardProduct from '../CardProduct'
import { useEffect, useState } from 'react'
import Product from '../../models/Product'

const Highlights = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://projeto-virtual-store-api.onrender.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

  return (
    <HighlightsContainer>
      <Title>Em destaque</Title>

      <Grid>
        <CardProduct products={products} />
      </Grid>
    </HighlightsContainer>
  )
}

export default Highlights
