import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import logo from '../../images/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'
import './SignUp.css'
import auth from '../../firebase.init';
const SignUp = () => {
    const [email,setEmail]=useState({})
    const [password,setPassword]=useState({})
    const [confirmPassword,setConfirmPassword]=useState({})
    const [signInWithGoogle,error]=useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword,errors,user]=useCreateUserWithEmailAndPassword(auth)
    // for email 
    const navigate=useNavigate()
    const handleEmail=event=>{
        const emailInput=event.target.value
        if(emailInput === ''){
            return setEmail({value:"",error:'Please enter a valid email'})
        }else{
            setEmail({value:emailInput,error:''})
        }
    }
    // for password 
    const handlePassword=event=>{
        const passwordInput=event.target.value
        if(passwordInput.length < 6){
            return setPassword({value:'',error:"Password should be greater than 6"})
        }else{
            setPassword({value:passwordInput,error:''})
        }
    }
    // for confirm password 
    const handleConfirmPassword=event=>{
        const confirmPasswordInput=event.target.value
        if(password.value !== confirmPasswordInput){
            return setConfirmPassword({value:"",error:'Password did not match'})
        }else{
            setConfirmPassword({value:confirmPasswordInput,error:''})
        }
    }
   /*  // for signup 
    const handleSignUp=()=>{
       
    }
 */

    if(user){
        navigate('/')
    }
    const formHandler=event=>{
        event.preventDefault()
        createUserWithEmailAndPassword(email.value,password.value)
        .then(()=>{
            console.log('user create')
        }).catch(error=>{
            console.log(error)
        })
    }
    console.log(user)
    return (
        <div className='w-full h-[100vh] flex justify-center items-center py-[43rem]'>
            <div className='w-[50rem]  h-auto px-[4.2rem] py-16 border-2 solid border-[#95A0A7] rounded-[.8rem] signup-container'>
                <form onSubmit={formHandler}>
                    <h1 className='text-center text-5xl mb-[2.9rem]'>Sign Up</h1>
                    <div className="input-field flex flex-col w-full mb-20">
                        <label htmlFor="" className='text-3xl mb-2'>Name</label>
                        <input onBlur={handleEmail} className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="email" name='email' placeholder='Enter your email' required/>
                        <p className='text-red-600 text-3xl mt-3'>{email.error}</p>
                    </div>
                    <div className="input-field flex flex-col w-full mb-20">
                        <label htmlFor="" className='text-3xl mb-2'>Password</label>
                        <input onBlur={handlePassword} className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="password" name='email' placeholder='Enter your password' required />
                        <p className='text-red-600 text-3xl mt-3'>{password.error}</p>
                    </div>
                    <div className="input-field flex flex-col w-full mb-20">
                        <label htmlFor="" className='text-3xl mb-2'>Confirm Password</label>
                        <input onBlur={handleConfirmPassword} className='h-[5.5rem] text-3xl focus:outline-none border-2 solid border-[#95A0A7] px-5 placeholder:text-3xl rounded-[.5rem]' type="password" name='confirm-password' placeholder='Enter your confirm password' required/>
                        <p className='text-red-600 text-3xl mt-3'>{confirmPassword.error}</p>
                    </div>
                    <button className='w-full text-[2.1rem] text-center border-0 rounded-[.5rem] bg-[#FFE0B3] h-[5.5rem]' type='submit' >Sign Up</button>
                    <div className='flex justify-center items-center text-[1.5rem] mt-[.9rem]'>
                        <p>Already have an account<span className='mx-2'>?</span></p>
                        <NavLink className='text-[#FF9900]' to='/login'>Login</NavLink>
                    </div>
                    <div className='flex justify-center items-center mt-7'>
                        <div className="left-div w-[14.5rem] h-[.2rem] bg-[#95A0A7]"></div>
                        <p className='px-5 text-[1.7rem]'>or</p>
                        <div className="right-div w-[14.5rem] h-[.2rem] bg-[#95A0A7]"></div>
                    </div>
                    <div className='mt-[3rem]'>
                        <button onClick={()=>signInWithGoogle()} className='h-[5.5rem] flex justify-center items-center w-full border-2 solid border-[#95A0A7] rounded-[.5rem] text-[1.7rem]' ><img className='w-[3rem] mr-[.9rem]' src={logo} alt="" />Continue With Google</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;