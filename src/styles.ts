import { createGlobalStyle } from 'styled-components'

const cores = {
  branco: '#ffffff',
  cinza: '#fafafa',
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
    background-color: ${cores.branco}
  }
`
