import  { createContext } from 'react'
const OrderContext=createContext()
const OrderContextProvider = ({children}) => {
  const contextValue={

  }
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContextProvider
