import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import './OrderProduct.css'
const OrderProduct = ({ item,removeCart }) => {
    const { img, name, price, quantity, shipping } = item
    return (
        <div className=''>
            <div className='flex w-[50rem] border-2 solid border-[#95A0A7] my-10 rounded-[.8rem] p-2'>
                <img className='w-[9rem] h-[9rem] rounded-[.8rem] ' src={img} alt="" />
                <div className='flex justify-between items-center w-full ml-[1.7rem]'>
                    <div>
                        <h1 className='text-xl font-[500]'>{name}</h1>
                        <p className='text-[1.5rem] mb-[.2rem]'>Price:<span>{price}</span></p>
                        <p className='text-[1.5rem] mb-[.4rem]'>Shipping Charge:<span>{shipping}</span></p>
                        <small className=' mb-[.4rem] text-[1rem]'>Quantity:<span>{quantity}</span></small>
                    </div>
                    <button onClick={()=>removeCart(item)} className='btn p-8 rounded-[50%] mr-[2rem]'><TrashIcon className='w-[3rem] text-[#EB5757]' /></button>
                </div>
            </div>
        </div>
    );
};

export default OrderProduct;