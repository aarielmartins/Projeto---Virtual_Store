import { HeaderContainer, Title, Description } from './styles'

type Props = {
  title: string
  description: string
}

const CollectionHeader = ({ title, description }: Props) => (
  <HeaderContainer>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </HeaderContainer>
)

export default CollectionHeader
