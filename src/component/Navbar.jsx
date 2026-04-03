import React from 'react';
import Cartimg from '../assets/products/shopping-cart.png'

const Navbar = ({cart}) => {
    return (
        
            <div className="navbar navposition w-full shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                              <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <a className="md:text-4xl text-xl py-1 font-bold bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-[16px]">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end items-center gap-4">

                    <a className="flex items-center relative mr-3 justify-center">
                        <img src={Cartimg} alt="" /> 
                        <div className="md:w-5 md:h-5 w-4 h-4 flex items-center justify-center bg-red-500 p-1 rounded-full text-[10px] md:text-[12px] text-white font-semibold absolute -top-2.5 -right-3.5">{cart.length}</div>
                    </a>
                    <a href="#" className='font-semibold md:text-[18px] hover:text-gray-600'>Login</a>
                    <button className='btn btn-primary rounded-full'>Get Started</button>
                </div>
            </div>
      
    );
};

export default Navbar;