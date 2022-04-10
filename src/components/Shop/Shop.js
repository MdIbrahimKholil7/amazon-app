import React from 'react';
import Item from '../Item/Item';
import useProduct from '../../hooks/useProduct';
import './Shop.css'
const Shop = () => {
    const [products, setProduct] = useProduct()
    console.log(products)
    return (
        <div className='flex items-end justify-end'>
            <section className='shop-container'>
                <section className='product-container'>
                    {
                        products.map(product=><Item
                        key={product.id}
                        product={product}
                        />)
                    }
                </section>
                <section className="cart-container">
                    <h1>This is cart</h1>
                </section>
            </section>
        </div>
    );
};

export default Shop;