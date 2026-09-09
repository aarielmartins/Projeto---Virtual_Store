import styled from 'styled-components'
import { cores, texto } from '../../styles'
import { Props } from '.'

type PaymentTabType = {
  isActive: boolean
}

export const Row = styled.div<Props>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.gapNumber ?? 3}, 1fr);
  gap: 16px;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  grid-column: span ${(props) => props.gapNumber ?? 1};
`

export const Label = styled.label`
  color: ${cores.preto};
`

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid ${cores.cinza};
  background: ${cores.cinzaClaro};
  font-size: ${texto.detalhe};
  color: ${cores.preto};
  outline: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: ${cores.cinza};
  }

  &:focus {
    border-color: ${cores.preto};
  }
`

export const Select = styled.select`
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid ${cores.cinza};
  background: ${cores.cinzaClaro};
  font-size: ${texto.detalhe};
  color: ${cores.preto};
  outline: none;
  appearance: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  &:focus {
    border-color: ${cores.preto};
  }

  option {
    background: ${cores.cinzaClaro};
    color: ${cores.preto};
  }
`

export const PaymentTabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`

export const PaymentTab = styled.button<PaymentTabType>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 999px;
  font-size: ${texto.detalhe};
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, border 0.2s ease;

  background: ${(props) =>
    props.isActive ? cores.detalheClaro : cores.branco};
  border: 1px solid ${(props) => (props.isActive ? 'transparent' : cores.cinza)};
  color: ${cores.preto};

  &:hover {
    background: ${(props) =>
      props.isActive ? cores.detalheClaro : cores.cinzaClaro};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const PaymentNotice = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
`
export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${cores.cinza};
  margin-bottom: 20px;
`

export const ItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${texto.detalhe};
`

export const ItemName = styled.span`
  color: ${cores.detalhe};
`

export const ItemPrice = styled.span`
  color: ${cores.preto};
`

export const Totals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 20px;
  border-bottom: 1px dashed ${cores.cinza};
  margin-bottom: 20px;
`

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
`

export const GrandTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: ${texto.subtitulo};
  color: ${cores.preto};
  margin-bottom: 24px;
`

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  background: ${cores.preto};
  color: ${cores.branco};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 16px;

  &:hover {
    background: ${cores.chumbo};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const SecureNotice = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: ${cores.detalhe};
  text-align: center;
  padding-top: 10px;

  svg {
    width: 14px;
    height: 14px;
  }
`
