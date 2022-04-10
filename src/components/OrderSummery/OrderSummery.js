import React from 'react';

const OrderSummery = ({items}) => {
    
    // const {price,shipping}=item
    console.log(items)
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
        </div>
    );
};

export default OrderSummery;