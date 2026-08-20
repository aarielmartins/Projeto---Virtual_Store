type Product = {
  id: number
  titulo: string
  categoria: string
  colecao: 'habitar' | 'vestir'
  imagem: string
  valor: number
  valorComDesconto?: number
  descricao: string
  composicao: string
  dimensoes?: {
    largura?: string
    profundidade?: string
    altura?: string
    diametro?: string
    comprimento?: string
  }
  tamanhos?: string[]
  feitoAMao: boolean
  origem: string
  entrega: string
}

export default Product
