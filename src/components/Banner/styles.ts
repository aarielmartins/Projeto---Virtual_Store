import styled from 'styled-components'
import { cores, texto } from '../../styles'
import { Link } from 'react-router-dom'

export const BannerContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  background: ${cores.cinzaClaro};
  border-radius: 24px;
  padding: 56px;
  margin-top: 122px;
  margin-right: 32px;
  margin-left: 32px;

  @media (max-width: 1230px) {
    flex-direction: column;
    padding: 32px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 102px;
  }
`

export const Content = styled.div`
  max-width: 480px;

  @media (max-width: 1230px) {
    max-width: 100%;
  }
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
  scroll-behavior: smooth;

  @media (max-width: 1230px) {
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.chamada};
  line-height: 1.1;
  color: ${cores.preto};
  margin-bottom: 24px;

  @media (max-width: 1230px) {
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

  @media (max-width: 1230px) {
    display: flex;
    justify-content: center;
  }
`

export const ImageWrapper = styled(Link)`
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

  @media (max-width: 1230px) {
    width: 100%;
    height: 360px;
  }

  @media (max-width: 640px) {
    height: 280px;
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
