import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
import './Login.css'
const Login = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center '>
            <div className='w-[50rem]  h-[60rem] px-[4.2rem] py-16 border-2 solid border-[#95A0A7] rounded-[.8rem] form-container'>
                <form>
                    <h1 className='text-center text-5xl mb-[2.9rem]'>Login</h1>
                    <div className="input-field flex flex-col w-full mb-20">
                        <label htmlFor="" className='text-3xl mb-2'>Name</label>
                        <input className='h-[5.5rem] border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="email" name='email' placeholder='Enter your email' />
                    </div>
                    <div className="input-field flex flex-col w-full mb-20">
                        <label htmlFor="" className='text-3xl mb-2'>Password</label>
                        <input className='h-[5.5rem] border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="email" name='email' placeholder='Enter your password' />
                    </div>
                    <button className='w-full text-[2.1rem] text-center border-0 rounded-[.5rem] bg-[#FFE0B3] h-[5.5rem]' type='submit'>Login</button>
                    <div className='flex justify-center items-center text-[1.5rem] mt-[.9rem]'>
                        <p>New To Ema-John<span className='mx-2'>?</span></p>
                        <NavLink className='text-[#FF9900]' to='signup'>Create New Account</NavLink>
                    </div>
                    <div className='flex justify-center items-center mt-7'>
                        <div className="left-div w-[14.5rem] h-[.2rem] bg-[#95A0A7]"></div>
                        <p className='px-5 text-[1.7rem]'>or</p>
                        <div className="right-div w-[14.5rem] h-[.2rem] bg-[#95A0A7]"></div>
                    </div>
                    <div className='mt-[3rem]'>
                        <button className='h-[5.5rem] flex justify-center items-center w-full border-2 solid border-[#95A0A7] rounded-[.5rem] text-[1.7rem]' ><img className='w-[3rem] mr-[.9rem]' src={logo} alt="" />Continue With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;