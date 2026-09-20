import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { add, remove, close } from '../../store/reducers/cart'
import Product from '../../models/Product'
import * as S from './styles'
import {
  finalValue,
  finalValueItens,
  priceSymbol,
  totalItem,
  totalItens
} from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const navigate = useNavigate()

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

  const goToCheckout = () => {
    navigate('/checkout')
    closeCart()
  }

  return (
    <>
      <S.CardBar className={isOpen ? 'is-open' : ''}>
        <S.Overlay onClick={closeCart} />
        <div>
          <S.CartContainer>
            <S.Header>
              <S.Title>Seu carrinho</S.Title>
              <S.CloseButton onClick={closeCart}>
                <FiX />
              </S.CloseButton>
            </S.Header>

            <S.ItemsList>
              {items.length === 0 && (
                <S.EmptyMessage>Seu carrinho ainda está vazio.</S.EmptyMessage>
              )}

              {items.map((item) => (
                <S.Item key={item.id}>
                  <S.ItemImage src={item.imagem} alt={item.titulo} />
                  <S.ItemInfo>
                    <S.ItemHeader>
                      <div>
                        <S.ItemCategory>{item.categoria}</S.ItemCategory>
                        <S.ItemName>{item.titulo}</S.ItemName>
                      </div>
                      <S.ItemPrice>{priceSymbol(totalItem(item))}</S.ItemPrice>
                    </S.ItemHeader>

                    <S.Quantity>
                      <S.QuantityButton onClick={() => removeItem(item.id)}>
                        <FiMinus />
                      </S.QuantityButton>
                      <S.QuantityValue>{item.quantity}</S.QuantityValue>
                      <S.QuantityButton onClick={() => addItem(item)}>
                        <FiPlus />
                      </S.QuantityButton>
                    </S.Quantity>
                  </S.ItemInfo>
                </S.Item>
              ))}
            </S.ItemsList>
            {items.length !== 0 && (
              <S.Footer>
                <S.SummaryRow>
                  <span>
                    {totalItens(items)}
                    {totalItens(items) === 1 ? 'item' : 'itens'}
                  </span>
                  <span>{priceSymbol(finalValueItens(items))}</span>
                </S.SummaryRow>

                <S.SummaryRow>
                  <span>Entrega</span>
                  <span>R$40,00</span>
                </S.SummaryRow>

                <S.TotalRow>
                  <span>Total</span>
                  <span>{priceSymbol(finalValue(items))}</span>
                </S.TotalRow>

                <S.CheckoutButton onClick={goToCheckout}>
                  Finalizar compra
                </S.CheckoutButton>
              </S.Footer>
            )}
          </S.CartContainer>
        </div>
      </S.CardBar>
    </>
  )
}

export default Cart
