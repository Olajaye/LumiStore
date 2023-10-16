
import { createContext, useContext, useState } from "react"
import PRODUCTS from "../../shop-data.json"


const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [productItem, setProductItem] = useState(PRODUCTS)
  const value = { productItem, setProductItem }


  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export const ProductUseContext = () => {
  return useContext(ProductContext)
} 