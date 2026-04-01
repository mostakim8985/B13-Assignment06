import React from 'react';

const Decription = () => {
    return (
        <div>
            <div className="hero bg-blue-600 py-5 lg:py-40 text-white mt-40">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="md:text-5xl text-4xl font-bold">Ready to Transform Your Workflow?</h1>
                        <p className="py-6 text-gray-300 text-[14px] md:text-[16px]">
                            Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.
                        </p>
                        <div className='flex items-center justify-center gap-6'>
                            <button className="btn bg-white text-blue-500 rounded-full">Get Started</button>
                            <button className="btn bg-blue-500 text-white hover:bg-white hover:text-blue-500 rounded-full">Get Started</button>

                        </div>
                        <p className='mt-5 text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decription;