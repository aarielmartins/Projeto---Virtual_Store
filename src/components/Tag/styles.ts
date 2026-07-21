import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.a<Props>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: ${(props) =>
    props.color === 'detalhe' ? cores.detalhe : cores.branco};
  color: ${cores.preto};
  border: ${(props) =>
    props.border === 'none' ? 'none' : `1px solid ${cores.chumbo}`};
  color: ${cores.preto};
`
