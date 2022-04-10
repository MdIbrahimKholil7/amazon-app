import React from 'react';
import useProduct from '../../hooks/useProduct';
import useShow from '../../hooks/useShow';
import OrderProduct from '../OrderProduct/OrderProduct';
import OrderSummery from '../OrderSummery/OrderSummery';

const Order = () => {
    const [products,setProduct]=useProduct()
    const [cart,setCart]=useShow(products)
    return (
        <div className='flex justify-end'>

            <section className='shop-container'>
            <div className="order-product mt-20">
                <h1 className='mb-20 text-center text-5xl'>Your Order Product</h1>
                {
                    cart.map(item=><OrderProduct 
                        key={item.id}
                        item={item}
                        />)
                }
            </div>
            <div className="cart-container order-cart">
                <OrderSummery items={cart}/>
            </div>
        </section>
        </div>
    );
};

export default Order;