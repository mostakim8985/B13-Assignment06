import React from 'react';

const Toggle = ({ toggle, setToggle,cart }) => {
    const handleButton = (set) => {
        setToggle(set)
    }
    return (
        <div className='mt-10'>
            <div className='flex justify-center items-center'>
                <div className='flex items-center justify-between btn rounded-full px-0 '>
                    <button onClick={() => { handleButton('products') }} className={`btn ${toggle === 'products' ? 'btn-primary' : 'btn'}  rounded-full`}>Products</button>
                    <button onClick={() => { handleButton('cart') }} className={`btn ${toggle === 'cart' ? 'btn-primary' : 'btn'}  rounded-full`}>Cart({cart.length})</button>
                </div>
            </div>
        </div>
    );
};

export default Toggle;