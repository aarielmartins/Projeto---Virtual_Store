import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const HighlightsContainer = styled.section`
  margin: 32px 32px;

  @media (max-width: 900px) {
    margin: 20px 20px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
  margin-bottom: 32px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
