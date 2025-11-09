import React from 'react';

const ServicesHeaderSection = () => {
    return (
        <section className="bg-white py-18 px-2 sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 mx-10">
                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                            Our <span className="text-orange-500">Services</span>
                        </h1>

                        {/* Description */}
                        <p className=" sm:text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            Ut et massa mi. , mattis ligula consectetur, ultrices
                            mauris. Maecenas vitae mattis tellus..
                        </p>
                    </div>

                    {/* Right Side - Animated Video */}
                    <div className="flex justify-center items-center">
                        <div className="w-full max-w-lg">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-contain"
                            >
                                <source src="/Images/Services-Header-Video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHeaderSection;