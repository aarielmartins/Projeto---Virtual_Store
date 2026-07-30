import { HeaderContainer, Category, Title, Description } from './styles'

type Props = {
  title: string
  description: string
}

const CollectionHeader = ({ title, description }: Props) => (
  <HeaderContainer>
    <Category>coleção</Category>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </HeaderContainer>
)

export default CollectionHeader
