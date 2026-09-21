import Product from '../models/Product'
import { CartItem } from '../store/reducers/cart'

//função para formatar preço
export const priceSymbol = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

//calcula o valor total do item multiplicando o preço pelo quantidade
export const totalItem = (item: CartItem) => {
  const preco = item.discountedPrice ?? item.valor
  return preco * item.quantity
}

//calcula o valor total da compra
export const finalValueItens = (items: CartItem[]) => {
  return items.reduce((total, item) => total + totalItem(item), 0)
}

//calcula o valor total da compra + o frete
export const finalValue = (items: CartItem[]) => {
  return finalValueItens(items) + 40
}

//calcula quantos produtos existem no carrinho
export const totalItens = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.quantity, 0)
}

//pega os valores do campo "dimensões" e transforma em uma string formatada
export const dimensionAdjustment = (dimensoes: Product['dimensoes']) => {
  if (!dimensoes) return ''
  return `A${dimensoes.altura} x L${dimensoes.largura} x P${dimensoes.profundidade}`
}

//cria um objeto para mapear os valores da coleção para exibir como string "vestir" e "habitar"
export const colecaoLabel: Record<Product['colecao'], string> = {
  vestir: 'Vestir',
  habitar: 'Habitar'
}
