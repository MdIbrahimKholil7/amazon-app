import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user]=useAuthState(auth)
    console.log(user)
    return (
        <div className='w-full h-[100vh] flex justify-center items-center py-[43rem]'>
        <div className='w-[50rem]  h-auto px-[4.2rem] py-16 border-2 solid border-[#95A0A7] rounded-[.8rem] signup-container'>
            <form>
                <h1 className='text-center text-5xl mb-[2.9rem]'>Shipping Information</h1>
                <div className="input-field flex flex-col w-full mb-20">
                    <label htmlFor="" className='text-3xl mb-2'>Name</label>
                    <input className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="text" name='name' placeholder='Enter your name' required/>
                    {/* <p className='text-red-600 text-3xl mt-3'>{email.error}</p> */}
                </div>
                <div className="input-field flex flex-col w-full mb-20">
                    <label htmlFor="" className='text-3xl mb-2'>Emai</label>
                    <input className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="Email" value={user?.email} readOnly name='email' placeholder='Enter your email' required />
                    {/* <p className='text-red-600 text-3xl mt-3'>{password.error}</p> */}
                </div>
                <div className="input-field flex flex-col w-full mb-20">
                    <label htmlFor="" className='text-3xl mb-2'>Address</label>
                    <input className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="text" name='address' placeholder='Enter your confirm address' required/>
                    {/* <p className='text-red-600 text-3xl mt-3'>{confirmPassword.error}</p> */}
                </div>
                <div className="input-field flex flex-col w-full mb-20">
                    <label htmlFor="" className='text-3xl mb-2'>Phone Number</label>
                    <input className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' name='phone-number' placeholder='Enter your phone number' required/>
                    {/* <p className='text-red-600 text-3xl mt-3'>{confirmPassword.error}</p> */}
                </div>
                <button className='w-full text-[2.1rem] text-center border-0 rounded-[.5rem] bg-[#FFE0B3] h-[5.5rem]' type='submit' >Add Shipping</button>
              
            </form>
        </div>
    </div>
    );
};

export default Shipping;