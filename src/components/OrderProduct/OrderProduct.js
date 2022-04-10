import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';

const OrderProduct = ({ item }) => {
    const { img, name, price, quantity,shipping } = item
    return (
        <div className='flex '>
            <img className='w-[9rem] h-[9rem]' src={img} alt="" />
            <div className='flex'>
                <div>
                    <h1>{name}</h1>
                    <p>Price:<span>{price}</span></p>
                    <p>Shipping Charge:<span>{shipping}</span></p>
                    <p>Quantity:<span>{quantity}</span></p>
                </div>
                <button><TrashIcon className='w-[3rem]'/></button>
            </div>
        </div>
    );
};

export default OrderProduct;