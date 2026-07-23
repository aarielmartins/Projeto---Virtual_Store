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
  display: block;
  height: 420px;
  border-radius: 24px;
  overflow: hidden;
  text-decoration: none;

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

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0) 50%
    );
  }
`

export const CardInfo = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  z-index: 1;
  background: ${cores.branco};
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
export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: #c9f24d;
  color: #1a1a1a;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: scale(1.08);
    background: #b8e63c;
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`
