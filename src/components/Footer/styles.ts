import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const FooterContainer = styled.footer`
  border-top: 1px solid ${cores.cinza};
  margin-top: 32px;
`

export const Top = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding: 56px 32px 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`

export const Brand = styled.div`
  max-width: 280px;
`

export const Logo = styled.img`
  height: 18px;
  margin-bottom: 12px;
`

export const Tagline = styled.p`
  color: ${cores.chumbo};
`

export const Columns = styled.div`
  display: flex;
  gap: 96px;

  @media (max-width: 768px) {
    gap: 48px;
    flex-wrap: wrap;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColumnTitle = styled.span`
  text-transform: uppercase;
  color: ${cores.chumbo};
  margin-bottom: 16px;
`

export const ColumnLink = styled.a`
  color: ${cores.preto};
  text-decoration: none;
  margin-bottom: 8px;

  &:hover {
    text-decoration: underline;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const Bottom = styled.div`
  border-top: 1px solid ${cores.cinza};
  padding: 24px 32px;
  display: flex;
  justify-content: center;
`

export const Copyright = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
`
