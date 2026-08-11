import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const HeaderContainer = styled.div`
  margin-bottom: 32px;
  padding-top: 76px;
`

export const Category = styled.span`
  font-size: ${texto.detalhe};
  text-transform: uppercase;
  color: ${cores.chumbo};
  display: block;
  margin-bottom: 12px;
  margin-top: 32px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.chamada};
  line-height: 1.1;
  color: ${cores.preto};
  margin-bottom: 12px;

  @media (max-width: 900px) {
    font-size: 36px;
  }
`

export const Description = styled.p`
  line-height: 1.6;
  color: ${cores.chumbo};
  margin-bottom: 32px;
`
