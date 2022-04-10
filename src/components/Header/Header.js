import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
const Header = () => {
    const [user]=useAuthState(auth)
    const links =[
        {name:'Shop',path:'/',id:1},
        {name:'Order',path:'/order',id:2},
        {name:'Order Review',path:'/OrderReview',id:3},
        {name:'Manage Inventory',path:'/ManageInventory',id:4},
        // {name:'Login',path:'/Login',id:5},
    ]
    // for sign out 
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div className='w-full text-white h-[8rem] bg-[#1C2B35] flex items-center justify-center sticky top-0 z-30'>
            <div className="header w-[90%] mx-auto flex justify-between items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul className='flex'>
                        {
                            links.map((link,index) => <li key={index}>
                               <NavLink
                               className='ml-5 text-2xl'
                                key={link.id}
                                to={link.path}
                               >{link.name}</NavLink>
                            </li>)
                        }
                        {
                            user ? <button onClick={handleSignOut} className='ml-5 text-2xl'>Sign Out</button> :<NavLink className='ml-5 text-2xl' to='/login'>Login</NavLink>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;