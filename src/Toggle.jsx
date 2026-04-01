import React from 'react';

const Toggle = () => {
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center gap-5'>
                <button className='btn btn-primary rounded-full'>Products</button>
                <button className='btn rounded-full'>Cart()</button>
            </div>
        </div>
    );
};

export default Toggle;