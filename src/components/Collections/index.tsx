import vestirImage from '../../assets/images/colecao-vestir.png'
import habitarImage from '../../assets/images/colecao-habitar.png'
import { FiArrowRight } from 'react-icons/fi'
// FiPlus
import {
  CollectionsContainer,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  CardInfo,
  CardLabel,
  CardName,
  CircleButton
} from './styles'

const Collections = () => (
  <CollectionsContainer>
    <Header>
      <Title>Coleções</Title>
      <Subtitle>Duas linhas, um mesmo jeito de fazer.</Subtitle>
    </Header>

    <Grid>
      <Card href="#">
        <img src={vestirImage} alt="Coleção Vestir" />
        <CardInfo>
          <CardLabel>Vestir</CardLabel>
          <CardName>
            Peças em tecidos nobre, cortadas e trançadas a mão.
          </CardName>
          <CircleButton aria-label="Ver mais">
            <FiArrowRight />
          </CircleButton>
        </CardInfo>
      </Card>

      <Card href="#">
        <img src={habitarImage} alt="Coleção Habitar" />
        <CardInfo>
          <CardLabel>Habitar</CardLabel>
          <CardName>Mobiliário para descansar o corpo e o olhar.</CardName>
          <CircleButton aria-label="Ver mais">
            <FiArrowRight />
          </CircleButton>
        </CardInfo>
      </Card>
    </Grid>
  </CollectionsContainer>
)

export default Collections
