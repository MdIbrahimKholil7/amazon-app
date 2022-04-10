import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import useProduct from '../../hooks/useProduct';
import './Shop.css'
import OrderSummery from '../OrderSummery/OrderSummery';
import { addItem, getItem,} from '../../hooks/storage';
import useShow from '../../hooks/useShow';
const Shop = () => {
   const [products,setProduct]=useProduct()
//    getting store product 
   const [cart,setCart]=useShow(products)
   console.log(cart)
//    adding cart product 
const cartHandler=product=>{
    let cartProduct;
    const findProduct=cart.find(item=>item.id===product.id)
    if(!findProduct){
        product.quantity=1
        cartProduct=[...cart,product]
    }else{
        const rest=cart.filter(item=>item.id !== product.id)
        findProduct.quantity+=1
        cartProduct=[...rest,findProduct]
    }
    setCart(cartProduct)
    addItem(product.id)
}
    return (
        <div className='flex items-end justify-end'>
            <section className='shop-container'>
                <section className='product-container mt-24'>
                    {
                        products.map(product=><Item 
                            key={product.key}
                            product={product}
                            cartHandler={cartHandler}
                        />)
                    }
                </section>
                <section className="cart-container">
                    <OrderSummery items={cart}/>
                </section>
            </section>
        </div>
    );
};

export default Shop;