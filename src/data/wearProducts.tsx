import vestidoVermelho from '../assets/images/vestido-vermelho.png'
import vestidoDourado from '../assets/images/vestido-dourado.png'
import tapecariaParede from '../assets/images/tapecaria-parede.png'
import manta from '../assets/images/manta.png'
import Product from '../models/Product'

const wearProducts: Product[] = [
  {
    id: 1,
    image: tapecariaParede,
    category: 'Sofá',
    name: 'Sofá Onda',
    price: 'R$ 8.490,00',
    discount: 'R$ 7.490,00'
  },
  {
    id: 2,
    image: vestidoVermelho,
    category: 'Puff',
    name: 'Puff Lua',
    price: 'R$ 890,00'
  },
  {
    id: 3,
    image: manta,
    category: 'Cabeceira',
    name: 'Cabeceira Arco',
    price: 'R$ 2.390,00'
  },
  {
    id: 4,
    image: vestidoDourado,
    category: 'Cama',
    name: 'Cama Nuvem',
    price: 'R$ 6.290,00',
    discount: 'R$ 5.290,00'
  }
  // {
  //   id: 2,
  //   image: vestidoVermelho,
  //   category: 'Puff',
  //   name: 'Puff Lua',
  //   price: 'R$ 890,00'
  // },
  // {
  //   id: 4,
  //   image: vestidoDourado,
  //   category: 'Cama',
  //   name: 'Cama Nuvem',
  //   price: 'R$ 6.290,00',
  //   discount: 'R$ 5.290,00'
  // },
  // {
  //   id: 5,
  //   image: vestidoVermelho,
  //   category: 'Puff',
  //   name: 'Puff Lua',
  //   price: 'R$ 890,00'
  // },
  // {
  //   id: 6,
  //   image: vestidoDourado,
  //   category: 'Cama',
  //   name: 'Cama Nuvem',
  //   price: 'R$ 6.290,00',
  //   discount: 'R$ 5.290,00'
  // }
]

export default wearProducts

// import tapecariaParede from '../../assets/images/tapecaria-parede.png'
// import vestidoVermelho from '../../assets/images/vestido-vermelho.png'
// import manta from '../../assets/images/manta.png'
// import vestidoDourado from '../../assets/images/vestido-dourado.png'
// import {
//   Card,
//   ImageWrapper,
//   InfoRow,
//   Category,
//   Name,
//   PriceWrapper,
//   OldPrice,
//   CurrentPrice
// } from './styles'
// import ColorButton from '../CircleButton'
// import Product from '../../models/Product'

// const products: Product[] = [
//   {
//     id: 1,
//     image: tapecariaParede,
//     category: 'Sofá',
//     name: 'Sofá Onda',
//     price: 'R$ 8.490,00',
//     discount: 'R$ 7.490,00'
//   },
//   {
//     id: 2,
//     image: vestidoVermelho,
//     category: 'Puff',
//     name: 'Puff Lua',
//     price: 'R$ 890,00'
//   },
//   {
//     id: 3,
//     image: manta,
//     category: 'Cabeceira',
//     name: 'Cabeceira Arco',
//     price: 'R$ 2.390,00'
//   },
//   {
//     id: 4,
//     image: vestidoDourado,
//     category: 'Cama',
//     name: 'Cama Nuvem',
//     price: 'R$ 6.290,00',
//     discount: 'R$ 5.290,00'
//   }
// ]
