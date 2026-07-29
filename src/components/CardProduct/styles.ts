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

export const Price = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.preto};
  white-space: nowrap;
`
