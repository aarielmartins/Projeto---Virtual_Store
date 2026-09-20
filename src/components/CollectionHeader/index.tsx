import * as S from './styles'

type Props = {
  title: string
  description: string
}

const CollectionHeader = ({ title, description }: Props) => (
  <S.HeaderContainer>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.HeaderContainer>
)

export default CollectionHeader
