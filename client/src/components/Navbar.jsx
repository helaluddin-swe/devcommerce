import { asset } from "../assets/asset"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 font-medium">
      
      {/* Logo */}
      <img src={asset.logo} alt="logo" className="w-36" />

      {/* Navigation Links - Centered using Flex */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <p className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <p className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <p className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <p className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Right Side Icons (Optional placeholder for Cart/Profile) */}
      <div className="flex items-center gap-6">
          {/* Add search or profile icons here to keep the navbar balanced */}
      </div>

    </nav>
  )
}

export default Navbar