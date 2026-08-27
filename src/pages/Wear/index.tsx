import { GridPages } from '../../styles'
import { useGetProductsByCollectionQuery } from '../../services/api'
import CardProduct from '../../components/CardProduct'
import CollectionHeader from '../../components/CollectionHeader'

const Wear = () => {
  const { data: products } = useGetProductsByCollectionQuery('vestir')

  if (!products) {
    return <p>Carregando...</p>
  }

  //modelo de requisição usando useState e useEffect apenas para fins de estudo
  // const [products, setProducts] = useState<Product[]>([])

  // useEffect(() => {
  //   fetch(
  //     'https://projeto-virtual-store-api.onrender.com/products?colecao=vestir'
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res))
  // }, [])

  return (
    <>
      <CollectionHeader
        title="Vestir"
        description="Peças em tecidos nobres, feitas a mão."
      />
      <GridPages>
        <CardProduct products={products} />
      </GridPages>
    </>
  )
}

export default Wear
