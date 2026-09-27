import reducer, { add, remove, clear, open, close } from './cart'

const produtoExemplo = {
  id: 1,
  titulo: 'Sofá Onda',
  categoria: 'Sofá',
  colecao: 'habitar',
  imagem: 'url-da-imagem.jpg',
  valor: 8490,
  descricao: '',
  composicao: '',
  feitoAMao: true,
  origem: 'Brasil',
  entrega: ''
} as Product

describe('cartSlice', () => {
  it('deve retornar o estado inicial', () => {
    const state = reducer(undefined, { type: '' })
    expect(state).toEqual({ items: [], isOpen: false })
  })

  it('deve adicionar um novo produto ao carrinho', () => {
    const state = reducer(undefined, add(produtoExemplo))
    expect(state.items).toHaveLength(1)
    expect(state.items[0].quantity).toBe(1)
  })

  it('deve incrementar a quantidade se o produto já existir', () => {
    let state = reducer(undefined, add(produtoExemplo))
    state = reducer(state, add(produtoExemplo))

    expect(state.items).toHaveLength(1) // continua sendo 1 item...
    expect(state.items[0].quantity).toBe(2) // ...mas com quantidade 2
  })

  it('deve decrementar a quantidade ao remover', () => {
    let state = reducer(undefined, add(produtoExemplo))
    state = reducer(state, add(produtoExemplo)) // quantity: 2
    state = reducer(state, remove(produtoExemplo.id))

    expect(state.items[0].quantity).toBe(1)
  })

  it('deve remover o item quando a quantidade chega a zero', () => {
    let state = reducer(undefined, add(produtoExemplo)) // quantity: 1
    state = reducer(state, remove(produtoExemplo.id)) // deveria remover

    expect(state.items).toHaveLength(0)
  })

  it('deve limpar todos os itens do carrinho', () => {
    let state = reducer(undefined, add(produtoExemplo))
    state = reducer(state, clear())

    expect(state.items).toHaveLength(0)
  })

  it('deve abrir e fechar o carrinho', () => {
    let state = reducer(undefined, open())
    expect(state.isOpen).toBe(true)

    state = reducer(state, close())
    expect(state.isOpen).toBe(false)
  })
})
