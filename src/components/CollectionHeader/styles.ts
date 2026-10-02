import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const HeaderContainer = styled.div`
  margin-top: 122px;
  margin-right: 32px;
  margin-left: 32px;

  @media (max-width: 1230px) {
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 102px;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.chamada};
  line-height: 1.1;
  color: ${cores.preto};
  margin-bottom: 12px;

  @media (max-width: 1230px) {
    font-size: 36px;
    padding: 0 24px;
  }
`

export const Description = styled.p`
  line-height: 1.6;
  color: ${cores.chumbo};
  margin-bottom: 32px;

  @media (max-width: 1230px) {
    padding: 0 24px;
  }
`
