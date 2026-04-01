import React from 'react';

const Card = ({ info }) => {
    console.log(info);
    return (

        <div className="card border w-full bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h3>hello</h3>
                    <span className="badge badge-xs badge-warning">Most Popular</span>
                </div>
                <div className=" space-y-3">
                    <h2 className="text-3xl font-bold">Premium</h2>
                    <p className='text-gray-600'>hi hello</p>
                    <span className="text-xl font-semibold">$29/mo</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>High-resolution image generation</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Customizable style templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Batch processing capabilities</span>
                    </li>

                </ul>
                <div className="mt-6">
                    <button className="btn rounded-full btn-primary btn-block">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Card;