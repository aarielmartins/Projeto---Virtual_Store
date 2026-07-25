import Banner from './components/Banner'
import Collections from './components/Collections'
import Header from './components/Header'
import Highlights from './components/Highlights'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <Banner />
        <Collections />
        <Highlights />
      </Container>
    </>
  )
}

export default App
