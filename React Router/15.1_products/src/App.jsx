import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Products from './components/Products'
import Header from './components/Header'
import Product from './components/Product'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' exact element={<Homepage />}/>
      <Route path='/products' element={<Products />}/>
      <Route path="/products/:id" element={<Product/>}/>
      
    </Routes>

    </>
  )
}

export default App
