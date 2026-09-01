import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
`

export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 420px;
  max-width: 100vw;
  background: ${cores.branco};
  z-index: 201;
  display: none;
  flex-direction: column;
  border-radius: 34px;

  &.is-open {
    display: flex;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${cores.cinza};
`

export const Title = styled.h2`
  font-size: ${texto.titulo};
  color: ${cores.preto};
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid;
  background-color: ${cores.branco};
  cursor: pointer;
  color: ${cores.preto};
  transition: background 0.2s ease;

  &:hover {
    background-color: ${cores.cinzaClaro};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const ItemsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const EmptyMessage = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
  text-align: center;
  margin-top: 40px;
`

export const Item = styled.div`
  display: flex;
  gap: 16px;
`

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`

export const ItemCategory = styled.span`
  text-transform: uppercase;
  color: ${cores.chumbo};
  display: block;
  margin-bottom: 4px;
`

export const ItemName = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.preto};
`

export const ItemPrice = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.preto};
`

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
`

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid;
  background: ${cores.branco};
  cursor: pointer;
  color: ${cores.preto};
  transition: background 0.2s ease;

  &:hover {
    background: ${cores.cinzaClaro};
  }

  &.active {
    background: ${cores.detalhe};
    border: none;

    &:hover {
      background: ${cores.detalheClaro};
    }
  }

  svg {
    width: 14px;
    height: 14px;
  }
`

export const QuantityValue = styled.span`
  font-size: ${texto.detalhe};
  font-weight: 600;
  color: ${cores.preto};
  min-width: 16px;
  text-align: center;
`

export const Footer = styled.div`
  border-top: 1px solid ${cores.cinza};
  padding: 24px;
`

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
  margin-bottom: 8px;
`

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${texto.subtitulo};
  font-weight: 700;
  color: ${cores.preto};
  padding-top: 12px;
  margin: 12px 0 20px;
  border-top: 1px solid ${cores.cinza};
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  background: ${cores.detalhe};
  color: ${cores.preto};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${cores.detalheClaro};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
