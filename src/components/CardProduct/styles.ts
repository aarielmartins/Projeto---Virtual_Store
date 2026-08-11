import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const Card = styled.a`
  display: block;
  text-decoration: none;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Category = styled.span`
  font-size: ${texto.detalhe};
  text-transform: uppercase;
  color: ${cores.chumbo};
  display: block;
  margin-bottom: 4px;
`

export const Name = styled.h3`
  font-size: ${texto.subtitulo};
  font-weight: 600;
  color: ${cores.preto};
`
export const PriceWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 3px;
`

export const OldPrice = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.cinza};
  text-decoration: line-through;
`

export const CurrentPrice = styled.span`
  font-size: ${texto.detalhe};
  font-weight: 600;
  color: ${cores.preto};
`
