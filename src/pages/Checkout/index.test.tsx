import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

import cartReducer, { CartItem } from '../../store/reducers/cart'
import api from '../../services/api'
import Checkout from './index'

// Produto fictício utilizado nos testes
const itemDeExemplo: CartItem = {
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
  entrega: '',
  quantity: 1
}

// Cria uma store isolada para cada teste
const criarStoreDeTeste = (items: CartItem[] = [itemDeExemplo]) =>
  configureStore({
    reducer: {
      cart: cartReducer,
      [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState: {
      cart: {
        items,
        $isOpen: false
      }
    }
  })

// Renderiza o Checkout com Redux e React Router
const renderCheckout = (items: CartItem[] = [itemDeExemplo]) => {
  const store = criarStoreDeTeste(items)

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/checkout']}>
        <Routes>
          <Route path="/" element={<p>Página inicial</p>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  )
}

describe('Checkout', () => {
  it('deve redirecionar para a Home quando o carrinho estiver vazio', () => {
    renderCheckout([])

    expect(screen.getByText('Página inicial')).toBeInTheDocument()

    expect(screen.queryByText('Checkout')).not.toBeInTheDocument()
  })

  it('deve renderizar o formulário quando há itens no carrinho', () => {
    renderCheckout()

    expect(screen.getByLabelText('Nome completo')).toBeInTheDocument()

    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()

    expect(screen.getByText('Sofá Onda', { exact: false })).toBeInTheDocument()
  })

  //Async para aguardar
  it('deve mostrar "Campo obrigatório" ao sair de um campo vazio', async () => {
    renderCheckout()

    const campoNome = screen.getByLabelText('Nome completo')

    // Clica no campo
    userEvent.click(campoNome)

    // Sai do campo sem preencher
    userEvent.tab()

    // Aguarda a mensagem de validação aparecer
    expect(await screen.findByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('não deve mostrar campos de cartão quando "Boleto bancário" está selecionado (padrão)', () => {
    renderCheckout()

    expect(screen.queryByLabelText('Número do cartão')).not.toBeInTheDocument()
  })

  it('deve mostrar os campos de cartão ao clicar em "Cartão de crédito"', async () => {
    renderCheckout()

    // Seleciona cartão de crédito
    userEvent.click(screen.getByText('Cartão de crédito'))

    // Verifica se os campos foram renderizados
    expect(await screen.findByLabelText('Número do cartão')).toBeInTheDocument()
    expect(screen.getByLabelText('CVV')).toBeInTheDocument()
  })

  it('deve exigir a seleção de parcelamento quando o pagamento é cartão', async () => {
    renderCheckout()

    // Seleciona cartão de crédito
    userEvent.click(screen.getByText('Cartão de crédito'))

    // Aguarda o campo de parcelamento aparecer
    const selectParcelamento = await screen.findByLabelText('Parcelamento')

    // Foca no campo
    userEvent.click(selectParcelamento)

    // Sai sem selecionar uma opção
    userEvent.tab()

    // Verifica a mensagem de validação
    expect(
      await screen.findByText('Selecione o parcelamento')
    ).toBeInTheDocument()
  })
})
