import styled from 'styled-components'
import { cores } from '../../styles'

export const CircleButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 24px;
  bottom: 24px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  border: none;
  background: ${cores.detalhe};
  color: ${cores.preto};
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateX(4px);
    background: ${cores.detalheClaro};
  }

  &:active {
    transform: translateX(2px);
  }

  svg {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`
