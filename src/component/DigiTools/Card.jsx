import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Card = ({ info, cart, setCart }) => {
    const [isBuy, setIsBuy] = useState(false)

    const handleBuy = () => {
        setIsBuy(true);
        const isFound = cart.find(item => item.name === info.name);
        if(isFound) {
            toast.error(`${info.name} Already Added`)
            return;
        }
        setCart([...cart, info])
        toast.success(`${info.name} Added to Cart`)
    }


    return (

        <div className="card border w-fit sm:px-5 md:px-2 bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center items-center'>

                        <img className='w-fit' src={info.icon} alt="" />
                    </div>
                    <span className={`badge capitalize badge-md ${info.tagType === 'best-seller' ? 'badge-warning' : info.tagType === 'new' ? 'badge-secondary' : 'badge-primary'}`}>{info.tagType}</span>
                </div>
                <div className=" mt-5 space-y-3">
                    <h2 className="text-3xl font-bold">{info.name}</h2>
                    <p className='text-gray-600 w-2/3'>{info.description}</p>
                    <span className="text-xl font-semibold">${info.price}/{info.period}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{info.features[0]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{info.features[1]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{info.features[2]}</span>
                    </li>

                </ul>
                <div className="mt-6">
                    <button onClick={handleBuy} className={`btn rounded-full ${isBuy ? 'btn-error' : 'btn-primary'} btn-block`}>{isBuy ? 'Added to Cart' : 'Buy Now'}</button>
                </div>
            </div>
        </div>

    );
};

export default Card;