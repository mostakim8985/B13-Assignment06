import React from 'react';
import UserImage from '../assets/user.png'
import PackageImage from '../assets/package.png'
import RocketImage from '../assets/rocket.png'

const Information = () => {
    return (
        <div>
            <div className='text-center mt-15 px-4'>
                <div className='space-y-3'>

                    <h2 className='md:text-5xl text-4xl font-bold '>Get Started in 3 Steps</h2>
                    <p className='text-gray-600 text-[14px] md:text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='flex flex-col md:flex-row mt-10 justify-center gap-20 items-center'>
                    <div className='relative shadow-sm shadow-accent flex flex-col justify-center items-center p-4 gap-5'>
                        <span className='absolute w-5 flex justify-center items-center text-white font-bold p-4 top-0 right-0 h-5 bg-blue-500 rounded-full'>01</span>
                        <div className='w-fit bg-[#00000010] p-4 flex rounded-full justify-center items-center'>

                            <img className='w-full ' src={UserImage} alt="" />
                        </div>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-gray-600 text-[14px]'>Sign up for free in seconds. <br /> No credit card required to get started.</p>
                    </div>
                    <div className='relative shadow-sm shadow-accent flex flex-col justify-center items-center p-4 gap-5'>
                        <span className='absolute w-5 flex justify-center items-center text-white font-bold p-4 top-0 right-0 h-5 bg-blue-500 rounded-full'>01</span>
                        <div className='w-fit bg-[#00000010] p-4 flex rounded-full justify-center items-center'>

                            <img className='w-full ' src={PackageImage} alt="" />
                        </div>
                        <h3 className='text-2xl font-bold'>Choose Products</h3>
                        <p className='text-gray-600 text-[14px]'>Browse our catalog and select the tools <br /> that fit your needs.</p>
                    </div>
                    <div className='relative shadow-sm shadow-accent flex flex-col justify-center items-center p-4 gap-5'>
                        <span className='absolute w-5 flex justify-center items-center text-white font-bold p-4 top-0 right-0 h-5 bg-blue-500 rounded-full'>01</span>
                        <div className='w-fit bg-[#00000010] p-4 flex rounded-full justify-center items-center'>

                            <img className='w-full ' src={RocketImage} alt="" />
                        </div>
                        <h3 className='text-2xl font-bold'>Start Creating</h3>
                        <p className='text-gray-600 text-[14px]'>Download and start using your premium <br /> tools immediately.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Information;