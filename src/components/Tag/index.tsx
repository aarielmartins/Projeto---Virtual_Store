import { TagContainer } from './styles'

export type Props = {
  color?: 'detalhe' | 'background'
  border?: 'none' | 'solid'
  children: string
}

const Tag = ({ children, color = 'detalhe', border = 'none' }: Props) => (
  <TagContainer color={color} border={border}>
    {children}
  </TagContainer>
)

export default Tag
