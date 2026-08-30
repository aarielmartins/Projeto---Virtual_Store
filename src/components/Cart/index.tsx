import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
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
  return (
    <>
      <Overlay />
      <CartContainer>
        <Header>
          <Title>Seu carrinho</Title>
          <CloseButton>
            <FiX />
          </CloseButton>
        </Header>

        <ItemsList>
          <EmptyMessage>Seu carrinho ainda está vazio.</EmptyMessage>

          <Item>
            <ItemImage src="/path/to/item-image.jpg" alt="Sofa" />

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
    </>
  )
}

export default Cart
