import { createContext, useContext } from "react";

const productContext = createContext()

const useProductContext = () => useContext(productContext)

export default useProductContext
export { productContext }