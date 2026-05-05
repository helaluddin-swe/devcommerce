import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddProduct from './pages/AddProduct'
import ProductList from './pages/ProductList'
import OrderPage from './pages/OrderPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import LoginPage from './pages/LoginPage'
import {ToastContainer} from "react-toastify"
export const backendUrl=import.meta.env.VITE_BACKEND_URL
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):"")
  useEffect(()=>{
    localStorage.setItem('token',token)

  },[token])
  return (
    <div className='min-h-screen bg-gray-50'>
      <ToastContainer/>
      
      {
        token === "" ? <LoginPage setToken={setToken} /> :
          (<> <Navbar setToken={setToken}/>
           <hr className="  text-gray-400" />
          <div className='flex '>
            <Sidebar />

            <Routes>
              <Route path='/' element={<HomePage  token={token}/>} />
              <Route path='/add' element={<AddProduct token={token} />} />
              <Route path='/list' element={<ProductList token={token}/>} />
              <Route path='/orders' element={<OrderPage token={token}/>} />


            </Routes>
          </div>
          </>)
      }

    </div>
  )
}

export default App
