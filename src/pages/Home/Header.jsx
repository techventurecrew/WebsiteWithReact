import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Left Content */}
                    <div className="space-y-3">
                        <h1 className="text-6xl sm:text-6xl lg:text-6xl font-semibold leading-tight ">
                            <span className="text-black">Transform Your Business with Fast,</span>
                            <br />
                            {/* <span className="text-black">And </span> */}
                            <span className="text-orange-500">Affordable IT Solutions.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                            Your Trusted Online Partner for complete digital success. Crew Techventure is a leading IT services
                            company in India, delivering end-to-end IT solutions that help small businesses and enterprises thrive
                            online. From web development to digital marketing, we turn your vision into reality—quickly and costeffectively
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                                onClick={() => window.open('https://wa.me/8273943836', '_blank')}
                            >
                                <span>Get Started Today</span>
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    📞
                                </span>
                            </button>
                            <button
                                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
                                onClick={() => window.location.href = 'about'}
                            >
                                View Our Work                            </button>
                        </div>
                    </div>

                    {/* Right Content - Lottie Animation */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] pt-8">
                            <DotLottieReact
                                src="https://lottie.host/f7c1abcd-35dd-4326-a9e4-33967bdb0626/vIeaObnyYT.lottie"
                                loop
                                autoplay
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
