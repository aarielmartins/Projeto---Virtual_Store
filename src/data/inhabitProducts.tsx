import tapecariaParede from '../assets/images/tapecaria-parede.png'
import manta from '../assets/images/manta.png'
import Product from '../models/Product'

const inhabitProducts: Product[] = [
  {
    id: 3,
    image: manta,
    category: 'Manta',
    name: 'Manta Trama',
    price: 'R$200,00'
  },
  {
    id: 1,
    image: tapecariaParede,
    category: 'Tapeçaria',
    name: 'Tapete Onda',
    price: 'R$500,00',
    discount: 'R$300,00'
  }
]

export default inhabitProducts
