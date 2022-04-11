const deleteProduct=(id)=>{
    const data=localStorage.getItem('add-to-cart')
    if(data){
        const newData=JSON.parse(data)
       if(id in newData){
         delete newData[id]
         localStorage.setItem('add-to-cart',JSON.stringify(newData))
       }
    }
 }
 export default deleteProduct