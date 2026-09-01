import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { close } from '../../store/reducers/cart'
import imagem from '../../assets/images/Poltrona.jpg'
import {
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

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <>
      <Overlay className={isOpen ? 'is-open' : ''} />
      <aside>
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Header>
            <Title>Seu carrinho</Title>
            <CloseButton onClick={closeCart}>
              <FiX />
            </CloseButton>
          </Header>

          <ItemsList>
            <EmptyMessage>Seu carrinho ainda está vazio.</EmptyMessage>

            <Item>
              <ItemImage src={imagem} alt="Sofa" />

              <ItemInfo>
                <ItemHeader>
                  <div>
                    <ItemCategory>Mobiliario</ItemCategory>
                    <ItemName>Sofa</ItemName>
                  </div>
                  <ItemPrice>R$200,00</ItemPrice>
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
      </aside>
    </>
  )
}

export default Cart
