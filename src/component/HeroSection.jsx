import React from 'react';
import HeroImage from '../assets/banner.png'
import PlayImage from '../assets/play.png'
import IconImage from '../assets/Group5.png'

const HeroSection = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col gap-20 justify-between lg:flex-row-reverse">
                    <img
                        src={HeroImage}
                        className="w-fit"
                    />
                    <div className='space-y-5'>
                        <p className='badge rounded-full hidden md:flex badge-info text-[#4F39F6]'><img src={IconImage} alt="" /> New: AI-Powered Tools Available</p>
                        <h1 className="md:text-6xl md:leading-20 text-center text-4xl md:text-start font-bold">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="md:text-[16px] text-[14px] md:py-6 md:text-start text-center">
                            Access premium AI tools, design assets, templates, and <br /> productivity
                            software—all in one place. Start creating faster today. <br />

                            Explore Products
                        </p>
                        <div className='flex justify-center items-center md:justify-start'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className="btn btn-primary btn-outline ml-5 rounded-full"><img src={PlayImage} alt="" /> Watch Demo</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;