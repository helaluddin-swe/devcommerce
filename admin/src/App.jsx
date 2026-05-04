import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import OrderPage from './pages/OrderPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-3 md:px-4'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/list' element={<ProductList/>}/>
        <Route path='/orders' element={<OrderPage/>}/>
       
      </Routes>
    </div>
  )
}

export default App
