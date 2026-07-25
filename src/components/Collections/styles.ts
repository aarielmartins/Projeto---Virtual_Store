import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const CollectionsContainer = styled.section`
  margin: 32px 32px;

  @media (max-width: 900px) {
    margin: 20px 20px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
`

export const Subtitle = styled.p`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.a`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  text-decoration: none;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const CardInfo = styled.div`
  position: relative;
  left: 24px;
  bottom: 24px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 10px 16px;
`

export const CardLabel = styled.span`
  color: ${cores.preto};
  display: block;
  margin-bottom: 4px;
  font-weight: 600;
  color: ${cores.preto};
  font-size: ${texto.subtitulo};
`

export const CardName = styled.span`
  font-size: ${texto.detalhe};
  color: ${cores.chumbo};
`
