import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  background: ${cores.detalheClaro};
  border-radius: 24px;
  padding: 56px;
  margin: 64px 32px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 32px;
    margin: 20px 20px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
  max-width: 550px;
`

export const Description = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.cinzaClaro};
  max-width: 550px;
`
