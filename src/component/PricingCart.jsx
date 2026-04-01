

const PricingCart = () => {

    return (
        <div className="mt-55">
            <div className='space-y-3 text-center'>

                <h2 className='md:text-5xl text-4xl font-bold '>Simple, Transparent Pricing</h2>
                <p className='text-gray-600 text-[14px] md:text-[16px]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='mt-10 container mx-auto flex flex-col md:flex-row items-center justify-center gap-5'>
                <div className="card w-96 hover:bg-primary hover:py-4 transition-all duration-600 rounded-3xl hover:text-white shadow-sm">
                    <div className="card-body relative">

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold">Starter</h2>
                                <p className='text-gray-400 text-[14px]'>Perfect for getting started</p>
                            </div>
                            <span className="text-3xl font-semibold">$0/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 min-h-35 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>

                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary hover:bg-white hover:text-black rounded-full btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-primary relative rounded-3xl py-4 text-white shadow-sm">
                    <div className="card-body">
                        <span className="badge badge-md rounded-full absolute -top-3 left-[30%] bg-yellow-100 font-bold">Most Popular</span>
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold">Pro</h2>
                                <p className='text-gray-400 text-[14px]'>Best for professionals</p>
                            </div>
                            <span className="text-3xl font-semibold">$29/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="">Cloud sync</span>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="">Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn bg-white rounded-full btn-block">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 hover:bg-primary hover:py-4 transition-all duration-600 rounded-3xl hover:text-white shadow-sm">
                    <div className="card-body relative">

                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold">Enterprise</h2>
                                <p className='text-gray-400 text-[14px]'>For teams and businesses</p>
                            </div>
                            <span className="text-3xl font-semibold">$99/month</span>
                        </div>
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Dedicated support</span>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="">SLA guarantee</span>
                            </li>
                            <li className="">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className="">Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className={`btn btn-primary hover:bg-white hover:text-black rounded-full btn-block`}>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;