import { useEffect, useState } from "react"
import { getItem } from "./storage"

const useShow=(products)=>{
   const [cart,setCart]=useState([])
   useEffect(()=>{
       const getData=getItem()
       let newCart=[]
       for (let id in getData){
            const findProduct=products.find(product=>product.id === id)
            if(findProduct){
                findProduct.quantity=getData[id]
                newCart.push(findProduct)
            }
       }
       setCart(newCart)
    },[products])
   return [cart,setCart]
}
export default useShow