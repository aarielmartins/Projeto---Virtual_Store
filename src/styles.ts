import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#ffffff',
  cinza: '#c5c3c3',
  chumbo: '#848484',
  preto: '#0b0b0b',
  detalhe: '#a33419',
  detalheClaro: '#dc6b4f'
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
    font-size: 20px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
