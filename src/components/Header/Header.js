import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
const Header = () => {
    const links =[
        {name:'Shop',path:'/',id:1},
        {name:'Order',path:'/order',id:2},
        {name:'Order Review',path:'/OrderReview',id:3},
        {name:'Manage Inventory',path:'/ManageInventory',id:4},
        {name:'Login',path:'/Login',id:5},
    ]
    return (
        <div className='w-full text-white h-[8rem] bg-[#1C2B35] flex items-center justify-center'>
            <div className="header w-[90%] mx-auto flex justify-between items-center">
                <div>
                    <img src={logo} alt="" />
                </div>
                <nav>
                    <ul className='flex'>
                        {
                            links.map(link => <li>
                               <NavLink
                               className='ml-5 text-2xl'
                                key={link.id}
                                to={link.path}
                               >{link.name}</NavLink>
                            </li>)
                        }
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;