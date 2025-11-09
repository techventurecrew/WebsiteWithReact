import React from 'react';

const WhatWeDoSection = () => {
    const items = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.'
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <h2 className="text-5xl sm:text-6xl font-bold mb-8">
                            What we do
                        </h2>

                        {/* List Items */}
                        <div className="space-y-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    {/* Orange Bar */}
                                    <div className="w-1 bg-orange-500 flex-shrink-0 rounded-full"></div>

                                    {/* Text Content */}
                                    <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex justify-center items-center">
                        <div className="w-full rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                                alt="Professional working at desk"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;