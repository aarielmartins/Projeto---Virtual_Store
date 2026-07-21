import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  background: ${cores.cinzaClaro};
  border-radius: 24px;
  padding: 56px;
  margin: 30px 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 32px;
    margin: 20px 20px;
  }
`

export const Content = styled.div`
  max-width: 480px;
`

export const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${cores.detalhe};
  color: ${cores.preto};
  font-size: ${texto.detalhe};
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 999px;
  margin-bottom: 24px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${cores.preto};
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.chamada};
  line-height: 1.1;
  color: ${cores.preto};
  margin-bottom: 24px;

  @media (max-width: 900px) {
    font-size: 36px;
  }
`

export const Description = styled.p`
  line-height: 1.6;
  color: ${cores.chumbo};
  margin-bottom: 32px;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`

export const ButtonPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: ${cores.detalhe};
  color: ${cores.preto};
`

export const ButtonSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: ${cores.branco};
  color: ${cores.preto};
  border: 1px solid ${cores.chumbo};
`

export const ImageWrapper = styled.a`
  position: relative;
  flex-shrink: 0;
  width: 550px;
  height: 500px;
  border-radius: 25px;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1000px) {
    width: 100%;
    height: 360px;
    width: 450px;
  }
`

export const HighlightTag = styled.div`
  position: absolute;
  left: 24px;
  bottom: 24px;
  background: ${cores.branco};
  border-radius: 12px;
  padding: 10px 16px;

  .label {
    font-size: ${texto.detalhe};
    text-transform: uppercase;
    color: ${cores.chumbo};
    display: block;
    margin-bottom: 2px;
  }

  .name {
    font-weight: 600;
    color: ${cores.preto};
  }
`
