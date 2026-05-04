import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductContextProvider from './context/ProductContext.jsx'
import AdminContextProvider from './context/AdminContext.jsx'
import OrderContextProvider from './context/OrderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AdminContextProvider>
        <OrderContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </OrderContextProvider>
      </AdminContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
