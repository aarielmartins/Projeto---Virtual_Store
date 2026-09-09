import { Provider } from 'react-redux'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Container, GlobalCss } from './styles'
import { store } from './store'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Wear from './pages/Wear'
import Inhabit from './pages/Inhabit'
import ProductPage from './pages/ProductPage'
import Cart from './components/Cart'
import Checkout from './pages/Checkout'

const rotas = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Cart />
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
      { path: '/produtos/:id', element: <ProductPage /> },
      { path: '/checkout', element: <Checkout /> }
    ]
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalCss />
        <RouterProvider router={rotas} />
      </Provider>
    </>
  )
}

export default App
