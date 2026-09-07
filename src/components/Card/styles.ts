import styled from 'styled-components'
import { texto, cores } from '../../styles'

export const CardContainer = styled.div`
  background: ${cores.cinzaClaro};
  border-radius: 16px;
  border: 1px solid ${cores.cinza};
  padding: 32px;
  margin-bottom: 24px;
`

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: ${texto.subtitulo};
  color: ${cores.preto};
  margin-bottom: 24px;
`
