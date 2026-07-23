import Banner from './components/Banner'
import Collections from './components/Collections'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <Banner />
        <Collections />
      </Container>
    </>
  )
}

export default App
