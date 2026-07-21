import Banner from './components/Banner'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <Banner />
      </Container>
    </>
  )
}

export default App
