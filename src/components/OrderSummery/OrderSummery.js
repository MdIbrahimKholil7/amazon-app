import { ArrowSmRightIcon, CreditCardIcon, TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderSummery = ({items,clearCart}) => {
    const location=useLocation()
    // const {price,shipping}=item
    let price=0
    let shipping=0
    let tax=0
    let total=0
    let quantity=0
   if(items){
    for(let prod of items){
        price+=parseFloat(prod.price)*prod.quantity
        shipping+=parseFloat(prod.shipping)
        tax=(price+shipping) * .1
        quantity+=prod.quantity
        total=price+shipping+tax
    }
   }
   const navigate=useNavigate()

//    for shipping 
   const handleShipping=()=>{
        navigate('/shipping')
   }
    return (
        <div className='mt-6'> 
            <h1 className='text-center text-[2.4rem]'>Order Summery</h1>
            <div className="order-details pl-3 mt-5">
                <p className='text-[1.7rem] mt-5'>Selected Items:{quantity}</p>
                <p className='text-[1.7rem] mt-5'>Total Price:${price}</p>
                <p className='text-[1.7rem] mt-5'>Shipping Charge:${shipping}</p>
                <p className='text-[1.7rem] mt-5'>Tax:{tax.toFixed(2)}</p>
                <h1 className='text-3xl font-bold mt-6'>Grand Total:${total}</h1>
            </div>
            <div className='px-5 mt-8 '>
                <button onClick={clearCart} className='flex bg-[#FF3030] w-full justify-center items-center text-white py-8 text-2xl rounded h-12 '>Clear Cart <TrashIcon className='w-[3rem] ml-2'/></button>
               {
                   location.pathname === '/order' ? <button onClick={handleShipping} className='flex bg-[#FF9900] w-full justify-between items-center text-white px-3 py-8 text-2xl rounded h-12 mt-7'>Proceed CheckOut <CreditCardIcon className='w-[2.4rem] '/></button> : <button className='flex bg-[#FF9900] w-full justify-center items-center text-white py-8 text-2xl rounded h-12 mt-7'>Review Order <ArrowSmRightIcon className='w-[3rem]'/></button>
               }
            </div>
        </div>
    );
};

export default OrderSummery;