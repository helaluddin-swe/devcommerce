import { PlusCircle, ShoppingBag, Store } from "lucide-react"
import { NavLink } from "react-router-dom"


const Sidebar = () => {
  return (
    <div className="w-[10%] border-r  min-h-screen py-6">
      <div className="flex-col gap-6 flex ">
        <NavLink to="/add" className="flex items-center px-2 py-2 rounded-md mr-2 gap-2">
          <PlusCircle/>
          <p className="hidden md:block text-2xl ">Add</p>
        </NavLink>
         <NavLink to="/list" className="flex items-center px-2 py-2 rounded-md mr-2 gap-2">
          <ShoppingBag/>
          <p className="hidden md:block text-2xl ">List</p>
        </NavLink>
         <NavLink to="/orders" className="flex items-center px-2 py-2 rounded-md mr-2 gap-2">
          <Store/>
          <p className="hidden md:block text-2xl ">Orders</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
