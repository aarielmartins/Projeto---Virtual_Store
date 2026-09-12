import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores, texto } from '../../styles'

export const Card = styled.div`
  max-width: 560px;
  margin: 125px auto;
  background: ${cores.cinzaClaro};
  border: 1px solid ${cores.cinza};
  border-radius: 24px;
  padding: 40px;

  @media (max-width: 640px) {
    margin: 32px 20px;
    padding: 28px;
  }
`

export const IconCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${cores.detalhe};
  margin-bottom: 24px;

  svg {
    width: 24px;
    height: 24px;
    color: ${cores.preto};
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
  margin-bottom: 12px;
`

export const Subtitle = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
  margin-bottom: 24px;
`

export const Divider = styled.div`
  border-top: 1px dashed ${cores.chumbo};
  margin-bottom: 20px;
`

export const DetailsTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${texto.detalhe};

  span:first-child {
    color: ${cores.detalhe};
  }

  span:last-child {
    color: ${cores.preto};
    font-weight: 600;
  }
`

export const Message = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
  line-height: 1.6;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 24px;
  }
`

export const ContinueButton = styled(Link)`
  display: block;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 14px 24px;
  border-radius: 999px;
  background: ${cores.detalhe};
  color: ${cores.preto};
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${cores.detalheClaro};
  }
`
