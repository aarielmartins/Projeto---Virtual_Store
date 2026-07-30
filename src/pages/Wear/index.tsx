import CardProduct from '../../components/CardProduct'
import CollectionHeader from '../../components/CollectionHeader'
import wearProducts from '../../data/vestirProducts'
import { GridPages } from '../../styles'

const Wear = () => {
  return (
    <>
      <CollectionHeader
        title="Vestir"
        description="Peças em tecidos nobres, feitas a mão."
      />
      <GridPages>
        <CardProduct products={wearProducts} />
      </GridPages>
    </>
  )
}

export default Wear
