import { CardContainer, SectionTitle } from './styles'

type Props = {
  children: JSX.Element
  title: string
}

const Card = ({ children, title }: Props) => (
  <CardContainer>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </CardContainer>
)

export default Card
