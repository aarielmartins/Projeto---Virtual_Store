import { useEffect, useState } from 'react'
import CardProduct from '../../components/CardProduct'
import CollectionHeader from '../../components/CollectionHeader'
import { GridPages } from '../../styles'
import Product from '../../models/Product'

const Inhabit = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(
      'https://projeto-virtual-store-api.onrender.com/products?colecao=habitar'
    )
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [])

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
