import React from 'react';

const AboutSectionWithWaves = () => {
    return (
        <section className="bg-white">
            {/* Decorative Wave Banner */}
            <div className="relative w-full">
                {/* Wave Image */}
                <img
                    src="/Images/AboutHeaderImage.png" // Replace with the actual path to your image
                    alt="Decorative Wave Banner"
                    className="w-full h-64 sm:h-80 object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Heading */}
                        <div>
                            <h2 className="text-2xl sm:text-5xl lg:text-5xl font-semibold leading-tight">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            </h2>
                        </div>

                        {/* Right Side - About Content */}
                        <div className="space-y-4">
                            <h3 className="text-3xl sm:text-4xl font-bold">
                                About <span className="text-orange-500">Crewtechventure</span>
                            </h3>
                            <p className="text-base sm:text-lg font-semibold text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionWithWaves;