import React from 'react';
import {ShoppingCartIcon } from '@heroicons/react/solid'
import './Item.css'
const Item = ({product,cartHandler}) => {
    const {price,img,ratings,seller,name}=product
    return (
        <div className='item relative overflow-hidden' >
                <img className='w-[28.6rem] h-[28.6rem] m-[.6rem] rounded-[.8rem]' src={img} alt="" />
                <div className="details ml-[1.4rem]">
                    <h1 className='text-[2rem]' title={name}>{name.length > 20 ? name.slice(0,20) + '...':name}</h1>
                    <h3 className='text-[1.7rem] mt-[1.1rem]'>Price:${price}</h3>
                    <div className='mt-7'>
                        <h3 className='text-[1.2rem]'>Manufacture:{seller}</h3>
                        <p className='text-[1.2rem] mt-[.7rem]'>Ratings:{ratings}</p>
                    </div>
                </div>
                <button onClick={()=>cartHandler(product)} className='absolute bottom-0 bg-[#FFE0B3] text-center text-[1.8rem] w-full py-4 flex justify-center items-center hover:bg-[#f4b658] duration-300 ease' >
                    Add To Cart <ShoppingCartIcon  className='w-[1.7rem] ml-2 h-[1.7rem]'/>
                </button>
        </div>
    );
};

export default Item;