import CardProduct from '../../components/CardProduct'
import CollectionHeader from '../../components/CollectionHeader'
import { GridPages } from '../../styles'
import { useGetProductsByCollectionQuery } from '../../services/api'

const Inhabit = () => {
  const { data: products } = useGetProductsByCollectionQuery('habitar')

  if (!products) {
    return <p>Carregando...</p>
  }

  //modelo de requisição usando useState e useEffect apenas para fins de estudo
  // const [products, setProducts] = useState<Product[]>([])

  // useEffect(() => {
  //   fetch(
  //     'https://projeto-virtual-store-api.onrender.com/products?colecao=habitar'
  //   )
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res))
  // }, [])

  return (
    <>
      <CollectionHeader
        title="Habitar"
        description="Peças em tecidos nobres, feitas a mão."
      />
      <GridPages>
        <CardProduct products={products} />
      </GridPages>
    </>
  )
}

export default Inhabit
