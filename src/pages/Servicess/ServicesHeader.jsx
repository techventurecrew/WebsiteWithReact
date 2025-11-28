import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ServicesHeaderSection = () => {
    return (
        <section className="bg-white mt-24 py-18 px-2 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 items-center">

                    {/* Left Side - Content */}
                    <div className="space-y-6 mx-10">
                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            Our <span className="text-orange-500">Services</span>
                        </h1>

                        {/* Description */}
                        <p className="sm:text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                            At Crew Techventure, we provide modern, reliable, and scalable digital solutions designed to help businesses grow online.
                            From websites to custom software, graphics, branding, and data analytics — we build everything with precision, creativity, and purpose.

                            Our goal is simple: to help your business stand out, attract customers, and operate smarter in today’s digital world.
                        </p>
                    </div>

                    {/* Right Side - Lottie Animation */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-[400px] h-[500px] sm:w-[500px] sm:h-[500px]">
                            <DotLottieReact
                                src="https://lottie.host/2a738bfb-b4ca-40b8-aa82-c24ff5ad8ea3/nzfooyJKLz.lottie"
                                loop
                                autoplay
                                className=" h-[400px]"

                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesHeaderSection;
