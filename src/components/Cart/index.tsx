import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { close } from '../../store/reducers/cart'
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
import { formatarPreco } from '../CardProduct'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
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
              <EmptyMessage>Seu carrinho ainda está vazio.</EmptyMessage>

              {items.map((item) => (
                <Item key={item.id}>
                  <ItemImage src={item.imagem} alt={item.titulo} />
                  <ItemInfo>
                    <ItemHeader>
                      <div>
                        <ItemCategory>{item.categoria}</ItemCategory>
                        <ItemName>{item.titulo}</ItemName>
                      </div>
                      <ItemPrice>
                        {formatarPreco(item.valorComDesconto ?? item.valor)}
                      </ItemPrice>
                    </ItemHeader>

                    <Quantity>
                      <QuantityButton>
                        <FiMinus />
                      </QuantityButton>

                      <QuantityValue>2</QuantityValue>

                      <QuantityButton>
                        <FiPlus />
                      </QuantityButton>
                    </Quantity>
                  </ItemInfo>
                </Item>
              ))}
            </ItemsList>

            <Footer>
              <SummaryRow>
                <span>1 item</span>
                <span>R$ 8.000,00</span>
              </SummaryRow>

              <SummaryRow>
                <span>Entrega</span>
                <span>R$40,00</span>
              </SummaryRow>

              <TotalRow>
                <span>Total</span>
                <span>R$8,040,00</span>
              </TotalRow>

              <CheckoutButton>Finalizar compra</CheckoutButton>
            </Footer>
          </CartContainer>
        </div>
      </CardBar>
    </>
  )
}

export default Cart
