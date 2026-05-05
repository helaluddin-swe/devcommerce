import { useState } from "react"
import axios from "axios"
import { backendUrl } from "../App"
import { toast } from "react-toastify"

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmitHandler = async (e) => {
   try {
     e.preventDefault()
    const response = await axios.post(backendUrl+"/api/user/admin", { email, password })
    if (response.data.success) {
      setToken(response.data.token)
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
    
   } catch (error) {
    console.log(error)
    toast.error(error.message)
    
   }

  }
  return (
    <div className=" bg-gray-200 z-20   rounded-2xl px-10 py-10   ">
      <div className=" "> 
      <h2 className="font-bold  text-2xl text-center">Admin Login </h2>
      <form onSubmit={onSubmitHandler} className=" mx-auto my-auto w-100  ">

        <div className="flex flex-col w-full "><label className="text-2xl">
          Email
        </label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="border-gray-400 border rounded-md w-full px-2 py-2 " type="email" />
        </div>
        <div className="flex flex-col gap-1 w-full  "><label className="text-2xl">
          Password
        </label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className="border-gray-400 border rounded-md w-full px-2 py-2" type="password" />
        </div>
        <button type="submit" className="bg-cyan-200 rounded-md px-3 py-2 text-gray-900 hover:bg-cyan-400 font-bold w-1/2 items-center justify-center mt-6">Login</button>

      </form>
      </div>
    </div>
  )
}

export default LoginPage
