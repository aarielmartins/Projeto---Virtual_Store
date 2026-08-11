import { TagContainer } from './styles'

export type Props = {
  color?: 'detalhe' | 'background'
  border?: 'none' | 'solid'
  children: string
  to: string
}

const Tag = ({ children, color = 'detalhe', border = 'none', to }: Props) => (
  <TagContainer color={color} border={border} to={to}>
    {children}
  </TagContainer>
)

export default Tag
