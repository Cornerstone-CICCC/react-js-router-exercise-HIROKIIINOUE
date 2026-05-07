import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import PageLayout from './layouts/PageLayout'
import ProductsList from './pages/Products/ProductsList'
import ProductDetail from './pages/Products/ProductDetail'

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<ProductsList />} />
            <Route path=':id' element={<ProductDetail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
