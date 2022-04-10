import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import useProduct from '../../hooks/useProduct';
import './Shop.css'
import OrderSummery from '../OrderSummery/OrderSummery';
import { addItem, getItem,} from '../../hooks/storage';
const Shop = () => {
    const [products, setProduct] = useProduct()
    const [items, setItem] = useState([])
    let selectedItem = [];
    // load product from local storage 
    useEffect(() => {
        let loadProduct = []
        const getData = getItem()
        for (let id in getData) {
        
            const findProduct = products.find(product => product.id === id)
            // findProduct.quantity=getData[id]
            console.log(findProduct)
            if(findProduct){
                findProduct.quantity=getData[id]
                loadProduct.push(findProduct)
            }
            
        }
        setItem(loadProduct)
    }, [products])
    // cart handler 
    const cartHandler = product => {
        const findProduct = items.find(item => item.id === product.id)
        if (!findProduct) {
            product.quantity = 1
            selectedItem = [...items, product]
        } else {
            const rest = items.filter(item => item.id !== product.id)
            findProduct.quantity += 1
            selectedItem = [...rest, findProduct]
        }
        setItem(selectedItem)
        addItem(product.id)
    }
    return (
        <div className='flex items-end justify-end'>
            <section className='shop-container'>
                <section className='product-container mt-24'>
                    {
                        products.map(product => <Item
                            key={product.id}
                            product={product}
                            cartHandler={cartHandler}
                        />)
                    }
                </section>
                <section className="cart-container">
                    <OrderSummery
                        items={items}
                    />
                </section>
            </section>
        </div>
    );
};

export default Shop;