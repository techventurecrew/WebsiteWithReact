import React from 'react';

const CareerTeamSection = () => {
    return (
        <section className="bg-white">
            {/* Career Banner */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                {/* Decorative diagonal shape */}
                <div className="absolute bottom-0 right-0 w-full h-32 bg-orange-400 opacity-30 transform skew-y-3"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Career
                    </h1>
                    <p className="text-base sm:text-lg text-white opacity-95 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. , mattis
                        ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    </p>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Heading */}
                        <div>
                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Meet the team
                                <br />
                                behind our <span className="text-orange-500">success</span>
                            </h2>
                        </div>

                        {/* Right Side - Description */}
                        <div>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                            </p>
                        </div>
                    </div>

                    {/* Team Image */}
                    <div className="mt-12">
                        <div className="w-full rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop"
                                alt="Team working together"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerTeamSection;