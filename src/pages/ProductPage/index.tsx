import { useEffect, useState } from 'react'
import ProductView from '../../components/ProductView'
import Product from '../../models/Product'

const ProductPage = () => {
  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    fetch(
      'https://projeto-virtual-store-api.onrender.com/products?colecao=vestir'
    )
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])
  return (
    <>
      <ProductView />
    </>
  )
}

export default ProductPage
