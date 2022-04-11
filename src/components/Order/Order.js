import React from 'react';
import useProduct from '../../hooks/useProduct';
import useShow from '../../hooks/useShow';
import OrderProduct from '../OrderProduct/OrderProduct';
import OrderSummery from '../OrderSummery/OrderSummery';
import deleteProduct from '../../hooks/deleteProduct'
const Order = () => {
    const [products,setProduct]=useProduct()
    const [cart,setCart]=useShow(products)
    // product remove 
    const removeCart=(product)=>{
        const filterProduct=cart.filter(item => item.id !== product.id)
        setCart(filterProduct)
        deleteProduct(product.id)
    }
    //clear cart 
    const clearCart=()=>{
        setCart([])
        removeCart()
    }
    // console.log(cart)
    return (
        <div className='flex justify-end'>

            <section className='shop-container'>
            <div className="order-product mt-20">
                <h1 className='mb-20 text-center text-5xl'>Your Order Product</h1>
                {
                    cart.map(item=><OrderProduct 
                        key={item.id}
                        item={item}
                        removeCart={removeCart}
                        />)
                }
            </div>
            <div className="cart-container order-cart">
                <OrderSummery
                 items={cart}
                 clearCart={clearCart}
                 />
            </div>
        </section>
        </div>
    );
};

export default Order;