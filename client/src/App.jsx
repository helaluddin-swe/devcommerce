
import {Routes,Route} from "react-router-dom"
import HomePage from './pages/home/HomePage'
import CollectionPage from "./pages/CollectionPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ProductPage from "./pages/ProductPage"
import AdminDashboard from "./pages/admin/AdminDashboard"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import CartPage from "./pages/cart/CartPage"
import CheckoutPage from "./pages/cart/CheckoutPage"
import Orders from "./pages/cart/Orders"
import PlaceOrder from "./pages/cart/PlaceOrder"
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/collections" element={<CollectionPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/products/:productId" element={<ProductPage/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/order" element={<Orders/>}/>
        <Route path="/place-order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
