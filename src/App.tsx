import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'
import Home from './pages/Home'
import Wear from './pages/Wear'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/vestir',
    element: <Wear />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
      <Footer />
    </>
  )
}

export default App
