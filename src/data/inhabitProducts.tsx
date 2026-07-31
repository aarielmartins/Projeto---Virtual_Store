import tapecariaParede from '../assets/images/tapecaria-parede.png'
import manta from '../assets/images/manta.png'
import Product from '../models/Product'

const inhabitProducts: Product[] = [
  {
    id: 3,
    image: manta,
    category: 'Cabeceira',
    name: 'Cabeceira Arco',
    price: 'R$ 2.390,00'
  },
  {
    id: 1,
    image: tapecariaParede,
    category: 'Sofá',
    name: 'Sofá Onda',
    price: 'R$ 8.490,00',
    discount: 'R$ 7.490,00'
  }
]

export default inhabitProducts
