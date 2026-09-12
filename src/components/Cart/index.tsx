import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { add, remove, close, CartItem } from '../../store/reducers/cart'
import { formatarPreco } from '../CardProduct'
import Product from '../../models/Product'
import {
  CardBar,
  Item,
  ItemImage,
  ItemInfo,
  ItemHeader,
  ItemCategory,
  ItemName,
  ItemPrice,
  Quantity,
  QuantityButton,
  QuantityValue,
  Overlay,
  CartContainer,
  Header,
  Title,
  CloseButton,
  ItemsList,
  EmptyMessage,
  Footer,
  SummaryRow,
  TotalRow,
  CheckoutButton
} from './styles'

//calcula o valor total do item multiplicando o preço pelo quantidade
export const totalItem = (item: CartItem) => {
  const preco = item.valorComDesconto ?? item.valor
  return preco * item.quantity
}

export const valorFinalItens = (items: CartItem[]) => {
  return items.reduce((total, item) => total + totalItem(item), 0)
}

export const valorFinal = (items: CartItem[]) => {
  return valorFinalItens(items) + 40
}

export const totalItens = (items: CartItem[]) => {
  return items.reduce((total, item) => total + item.quantity, 0)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const addItem = (product: Product) => {
    dispatch(add(product))
  }

  const removeItem = (number: number) => {
    dispatch(remove(number))
  }

  return (
    <>
      <CardBar className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeCart} />
        <div>
          <CartContainer>
            <Header>
              <Title>Seu carrinho</Title>
              <CloseButton onClick={closeCart}>
                <FiX />
              </CloseButton>
            </Header>

            <ItemsList>
              {items.length === 0 && (
                <EmptyMessage>Seu carrinho ainda está vazio.</EmptyMessage>
              )}

              {items.map((item) => (
                <Item key={item.id}>
                  <ItemImage src={item.imagem} alt={item.titulo} />
                  <ItemInfo>
                    <ItemHeader>
                      <div>
                        <ItemCategory>{item.categoria}</ItemCategory>
                        <ItemName>{item.titulo}</ItemName>
                      </div>
                      <ItemPrice>{formatarPreco(totalItem(item))}</ItemPrice>
                    </ItemHeader>

                    <Quantity>
                      <QuantityButton onClick={() => removeItem(item.id)}>
                        <FiMinus />
                      </QuantityButton>
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <QuantityButton onClick={() => addItem(item)}>
                        <FiPlus />
                      </QuantityButton>
                    </Quantity>
                  </ItemInfo>
                </Item>
              ))}
            </ItemsList>
            {items.length !== 0 && (
              <Footer>
                <SummaryRow>
                  <span>
                    {totalItens(items)}
                    {totalItens(items) === 1 ? 'item' : 'itens'}
                  </span>
                  <span>{formatarPreco(valorFinalItens(items))}</span>
                </SummaryRow>

                <SummaryRow>
                  <span>Entrega</span>
                  <span>R$40,00</span>
                </SummaryRow>

                <TotalRow>
                  <span>Total</span>
                  <span>{formatarPreco(valorFinal(items))}</span>
                </TotalRow>

                <CheckoutButton to="/checkout" onClick={closeCart}>
                  Finalizar compra
                </CheckoutButton>
              </Footer>
            )}
          </CartContainer>
        </div>
      </CardBar>
    </>
  )
}

export default Cart
