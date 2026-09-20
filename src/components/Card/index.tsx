import * as S from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <S.CardContainer>
    <S.SectionTitle>{title}</S.SectionTitle>
    {children}
  </S.CardContainer>
)

export default Card
