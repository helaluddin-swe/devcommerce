import { LogOut } from "lucide-react"
import { asset } from "../assets/assest"

const Navbar = () => {
  return (
    <div>
      <>
        <div className="flex justify-between items-center  py-2  ">
          <div> <img src={asset.logo} alt="" className="w-40" /></div>
          <div className="flex gap-2 px-3 py-2 bg-blue-300 cursor-pointer hover:bg-blue-400  rounded-md">
            <LogOut size={22} />
            <p className="text-gray-700 font-bold">Logout</p>
          </div>

        </div>
      </>
      <hr className=" mt-2 text-gray-400" />
    </div>
  )
}

export default Navbar
