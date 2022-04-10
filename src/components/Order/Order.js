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
            <div className="order-product">
                {
                    cart.map(item=><OrderProduct 
                        key={item.id}
                        item={item}
                        />)
                }
            </div>
            <div className="cart-container">
                <OrderSummery items={cart}/>
            </div>
        </section>
        </div>
    );
};

export default Order;