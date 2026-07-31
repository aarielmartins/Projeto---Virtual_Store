import tapecariaParede from '../assets/images/tapecaria-parede.png'
import vestidoVermelho from '../assets/images/vestido-vermelho.png'
import manta from '../assets/images/manta.png'
import vestidoDourado from '../assets/images/vestido-dourado.png'
import Product from '../models/Product'

const allProducts: Product[] = [
  {
    id: 1,
    image: tapecariaParede,
    category: 'Tapeçaria',
    name: 'Tapete Onda',
    price: 'R$500,00',
    discount: 'R$300,00'
  },
  {
    id: 2,
    image: vestidoVermelho,
    category: 'Vestido',
    name: 'Vestido Lia',
    price: 'R$890,00'
  },
  {
    id: 3,
    image: manta,
    category: 'Manta',
    name: 'Manta Trama',
    price: 'R$200,00'
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

export default allProducts
