import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { Container, GlobalCss } from './styles'
import Home from './pages/Home'
import Wear from './pages/Wear'
import Inhabit from './pages/Inhabit'
import ProductPage from './pages/ProductPage'
import { store } from './store'
import Cart from './components/Cart'

const rotas = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/vestir', element: <Wear /> },
      { path: '/habitar', element: <Inhabit /> },
      { path: '/produtos/:id', element: <ProductPage /> }
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={rotas} />
        <Cart />
      </Provider>
    </>
  )
}

export default App
