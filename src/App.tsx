import Banner from './components/Banner'
import Collections from './components/Collections'
import Footer from './components/Footer'
import Header from './components/Header'
import Highlights from './components/Highlights'
import Manifest from './components/Manifest'
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
        <Manifest />
      </Container>
      <Footer />
    </>
  )
}

export default App
