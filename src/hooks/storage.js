
const addItem=id=>{
    let product=getItem()
    if(product[id]){
        product[id]+=1
    }else{
        product[id]=1
    }
    localStorage.setItem('add-to-cart',JSON.stringify(product))
}

const getItem=()=>{
    let product={}
    const getItem=localStorage.getItem('add-to-cart')
    if(getItem){
        product=JSON.parse(getItem)
    }
    return product
}


export {addItem,getItem}


