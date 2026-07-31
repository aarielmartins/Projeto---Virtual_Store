import vestidoVermelho from '../assets/images/vestido-vermelho.png'
import vestidoDourado from '../assets/images/vestido-dourado.png'
import Product from '../models/Product'

const wearProducts: Product[] = [
  {
    id: 2,
    image: vestidoVermelho,
    category: 'Vestido',
    name: 'Vestido Lia',
    price: 'R$890,00'
  },
  {
    id: 4,
    image: vestidoDourado,
    category: 'Saia',
    name: 'Saia Curvas',
    price: 'R$500,00',
    discount: 'R$400,00'
  }
]

export default wearProducts
