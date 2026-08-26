import styled from 'styled-components'
import { cores, texto } from '../../styles'

export const PageContainer = styled.div`
  padding-top: 116px;

  @media (max-width: 900px) {
    padding-top: 46px;
    margin: 20px 20px;
  }
`

export const Breadcrumb = styled.div`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 24px;

  a {
    color: ${cores.preto};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: ${cores.chumbo};
  }

  .current {
    color: ${cores.preto};
  }
`

export const ProductGrid = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`

export const ImageWrapper = styled.div`
  flex: 1;
  border-radius: 16px;
  overflow: hidden;
  background: #f4f4f2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    max-height: 560px;
  }
`

export const Info = styled.div`
  flex: 1;
  max-width: 440px;

  @media (max-width: 900px) {
    max-width: none;
  }
`

export const Category = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${cores.preto};
  display: block;
  margin-bottom: 8px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
  margin-bottom: 16px;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

export const OldPrice = styled.span`
  font-size: ${texto.subtitulo};
  color: ${cores.cinza};
  text-decoration: line-through;
`

export const CurrentPrice = styled.span`
  font-size: ${texto.titulo};
  font-weight: 700;
  color: ${cores.preto};
`

export const Description = styled.p`
  font-size: ${texto.subtitulo};
  color: ${cores.chumbo};
  line-height: 1.6;
  margin-bottom: 32px;
`

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  border-radius: 999px;
  border: none;
  background: ${cores.detalhe};
  color: ${cores.preto};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: 32px;

  &:hover {
    background: ${cores.detalheClaro};
  }
`

export const DetailsTable = styled.div`
  border-top: 1px solid #ececec;
`

export const DetailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #ececec;
  font-size: ${texto.detalhe};

  span:first-child {
    color: ${cores.chumbo};
  }

  span:last-child {
    color: ${cores.preto};
    font-weight: 600;
    text-align: right;
  }
`

export const RelatedSection = styled.section``

export const RelatedTitle = styled.h2`
  font-weight: 700;
  font-size: ${texto.titulo};
  color: ${cores.preto};
  margin-bottom: 24px;
`

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`
