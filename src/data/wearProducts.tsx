import vestidoVermelho from '../assets/images/vestido-vermelho.png'
import vestidoDourado from '../assets/images/vestido-dourado.png'
import Product from '../models/Product'

const wearProducts: Product[] = [
  {
    id: 2,
    image: vestidoVermelho,
    category: 'Puff',
    name: 'Puff Lua',
    price: 'R$ 890,00'
  },
  {
    id: 4,
    image: vestidoDourado,
    category: 'Cama',
    name: 'Cama Nuvem',
    price: 'R$ 6.290,00',
    discount: 'R$ 5.290,00'
  },
  {
    id: 5,
    image: vestidoVermelho,
    category: 'Puff',
    name: 'Puff Lua',
    price: 'R$ 890,00'
  },
  {
    id: 6,
    image: vestidoDourado,
    category: 'Cama',
    name: 'Cama Nuvem',
    price: 'R$ 6.290,00',
    discount: 'R$ 5.290,00'
  }
]

export default wearProducts
