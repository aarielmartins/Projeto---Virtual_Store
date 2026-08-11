import vestirImage from '../../assets/images/colecao-vestir.png'
import habitarImage from '../../assets/images/colecao-habitar.png'
import ColorButton from '../CircleButton'
import { FiArrowRight } from 'react-icons/fi'
import {
  CollectionsContainer,
  Header,
  Title,
  Subtitle,
  Grid,
  Card,
  CardInfo,
  CardLabel,
  CardName
} from './styles'

const Collections = () => (
  <CollectionsContainer>
    <Header>
      <Title>Coleções</Title>
      <Subtitle>Duas linhas, um mesmo jeito de fazer.</Subtitle>
    </Header>

    <Grid>
      <Card to="/vestir">
        <img src={vestirImage} alt="Coleção Vestir" />
        <CardInfo>
          <CardLabel>Vestir</CardLabel>
          <CardName>
            Peças em tecidos nobre, cortadas e trançadas a mão.
          </CardName>
        </CardInfo>
        <ColorButton icon={FiArrowRight} to="/vestir" />
      </Card>

      <Card to="/habitar">
        <img src={habitarImage} alt="Coleção Habitar" />
        <CardInfo>
          <CardLabel>Habitar</CardLabel>
          <CardName>Mobiliário para descansar o corpo e o olhar.</CardName>
        </CardInfo>
        <ColorButton icon={FiArrowRight} to="/habitar" />
      </Card>
    </Grid>
  </CollectionsContainer>
)

export default Collections
