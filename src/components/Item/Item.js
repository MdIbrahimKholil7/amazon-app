import React from 'react';
import './Item.css'
const Item = ({product}) => {
    const {price,img,ratings,seller,name}=product
    return (
        <div className='item'>
                <img className='w-[28.6rem] h-[28.6rem] m-[.7rem]' src={img} alt="" />
                <div className="details">
                    <h1>{name}</h1>
                    <h3>Price:${price}</h3>
                    <div>
                        <h3>Manufacture:{seller}</h3>
                        <p>Ratings:{ratings}</p>
                    </div>
                </div>
                <button>
                    Add To Cart
                </button>
        </div>
    );
};

export default Item;