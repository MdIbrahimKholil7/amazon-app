import { useState } from "react"
import { getItem } from "./storage"

const useShow=(products)=>{
    const items=getItem()
    const [cart,setCart]=useState()
    for (let id in items){
        const filterProduct= products.filter(product=>product.id === id)
        setCart(filterProduct)
    }
   return [cart,setCart]
}
export default useShow