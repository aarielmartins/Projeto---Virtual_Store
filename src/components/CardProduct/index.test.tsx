import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CardProduct from './index'

const produtoSemDesconto: Product = {
  id: 1,
  titulo: 'Sofá Onda',
  categoria: 'Sofá',
  colecao: 'habitar',
  imagem: 'sofa-onda.jpg',
  valor: 8490,
  descricao: '',
  composicao: '',
  feitoAMao: true,
  origem: 'Brasil',
  entrega: ''
}

const produtoComDesconto: Product = {
  ...produtoSemDesconto,
  id: 4,
  titulo: 'Cama Nuvem',
  valor: 6290,
  valorComDesconto: 5290
}

// função auxiliar pra não repetir o wrapper do Router em todo teste
const renderCardProduct = (products: Product[]) => {
  render(
    <MemoryRouter>
      <CardProduct products={products} />
    </MemoryRouter>
  )
}

describe('CardProduct', () => {
  it('deve exibir o título e a categoria do produto', () => {
    renderCardProduct([produtoSemDesconto])

    expect(screen.getByText('Sofá Onda')).toBeInTheDocument()
    expect(screen.getByText('Sofá')).toBeInTheDocument()
  })

  it('deve exibir a imagem com o alt correto', () => {
    renderCardProduct([produtoSemDesconto])

    const imagem = screen.getByAltText('Sofá Onda')
    expect(imagem).toBeInTheDocument()
    expect(imagem).toHaveAttribute('src', 'sofa-onda.jpg')
  })

  it('não deve mostrar preço riscado quando não há desconto', () => {
    renderCardProduct([produtoSemDesconto])

    expect(screen.getByText('R$ 8.490,00')).toBeInTheDocument()
    expect(screen.queryByText('R$ 8.490,00')).not.toHaveStyle(
      'text-decoration: line-through'
    )
  })

  it('deve mostrar preço riscado e preço com desconto quando houver desconto', () => {
    renderCardProduct([produtoComDesconto])

    const precoAntigo = screen.getByText('R$ 6.290,00')
    const precoComDesconto = screen.getByText('R$ 5.290,00')

    expect(precoAntigo).toBeInTheDocument()
    expect(precoComDesconto).toBeInTheDocument()
    expect(precoAntigo).toHaveStyle('text-decoration: line-through')
  })

  it('deve renderizar um card para cada produto da lista', () => {
    renderCardProduct([produtoSemDesconto, produtoComDesconto])

    expect(screen.getByText('Sofá Onda')).toBeInTheDocument()
    expect(screen.getByText('Cama Nuvem')).toBeInTheDocument()
  })

  it('o botão de cada produto deve linkar para a página correta', () => {
    renderCardProduct([produtoSemDesconto])

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/produtos/1')
  })
})
