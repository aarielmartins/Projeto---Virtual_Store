import { HighlightsContainer, Title, Grid } from './styles'
import { useGetFeatureProductsQuery } from '../../services/api'
import CardProduct from '../CardProduct'

const Highlights = () => {
  const { data: products } = useGetFeatureProductsQuery()

  //modelo de requisição usando useState e useEffect apenas para fins de estudo
  // const [products, setProducts] = useState<Product[]>([])

  // useEffect(() => {
  //   fetch('https://projeto-virtual-store-api.onrender.com/products')
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res))
  // }, [])

  if (!products) {
    return <p>Carregando...</p>
  }

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
