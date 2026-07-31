import CardProduct from '../../components/CardProduct'
import CollectionHeader from '../../components/CollectionHeader'
import inhabitProducts from '../../data/inhabitProducts'
import { GridPages } from '../../styles'

const Inhabit = () => {
  return (
    <>
      <CollectionHeader
        title="Habitar"
        description="Peças em tecidos nobres, feitas a mão."
      />
      <GridPages>
        <CardProduct products={inhabitProducts} />
      </GridPages>
    </>
  )
}

export default Inhabit
