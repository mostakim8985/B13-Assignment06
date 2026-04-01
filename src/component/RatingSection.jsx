import React from 'react';

const RatingSection = () => {
    return (
        <div>
            <div className='bg-blue-500 text-center p-10 flex justify-center'>
                <div className='w-full space-y-4'>
                    <h3 className='md:text-5xl text-3xl font-bold text-white'>50K+</h3>
                    <span className='text-[#ffffff90]'>Active User</span>
                </div>
                <div className='w-full border-2 border-t-0 border-b-0 border-r-0 border-l-white space-y-4'>
                    <h3 className='md:text-5xl text-3xl font-bold text-white'>200+</h3>
                    <span className='text-[#ffffff90]'>premium Tools</span>
                </div>
                <div className='w-full border-t-0 border-b-0 border-r-0 border-white border-2 space-y-4'>
                    <h3 className='md:text-5xl text-3xl font-bold text-white'>4.9</h3>
                    <span className='text-[#ffffff90]'>Rating</span>
                </div>
            </div>
        </div>
    );
};

export default RatingSection;