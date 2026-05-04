import  { createContext } from 'react'
const ProductContext=createContext()
const ProductContextProvider = ({children}) => {
  const contextValue={

  }
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
