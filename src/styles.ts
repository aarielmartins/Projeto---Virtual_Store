import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#ffffff',
  cinzaClaro: '#f7f6f6',
  cinza: '#c5c3c3',
  chumbo: '#848484',
  preto: '#0b0b0b',
  detalhe: '#ec780c',
  detalheClaro: '#fdbc80'
}

export const texto = {
  detalhe: '16px',
  titulo: '36px',
  subtitulo: '22px',
  chamada: '70px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
  }

  body {
    background-color: ${cores.branco};
    color: ${cores.preto};
    font-size: 16px;
  }
`

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
`

export const GridPages = styled.div`
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
