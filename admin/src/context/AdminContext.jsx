import  { createContext } from 'react'
const AdminContext=createContext()
const AdminContextProvider = ({children}) => {
  const contextValue={

  }
  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
