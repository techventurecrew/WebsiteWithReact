import React from 'react';
import { MapPin, Wallet, ArrowUpRight } from 'lucide-react';

const OpenPositionsSection = () => {
    const positions = [
        {
            id: 1,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        },
        {
            id: 2,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        },
        {
            id: 3,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        },
        {
            id: 4,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        },
        {
            id: 5,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        },
        {
            id: 6,
            title: 'Job profile',
            type: 'Part time/Full time',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices.',
            location: 'Location',
            salary: '$250-$300'
        }
    ];

    return (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
                    Currently Open <span className="text-orange-500">Positions</span>
                </h2>

                {/* Job Cards Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {positions.map((position) => (
                        <div
                            key={position.id}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 relative"
                        >
                            {/* Arrow Button */}
                            <button className="absolute top-6 right-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </button>

                            {/* Job Title */}
                            <div className="mb-4">
                                <h3 className="text-xl font-bold text-orange-500 mb-1">
                                    {position.title}
                                </h3>
                                <p className="text-sm text-gray-600">{position.type}</p>
                            </div>

                            {/* Job Description */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                                {position.description}
                            </p>

                            {/* Job Details */}
                            <div className="flex items-center gap-6 text-sm text-gray-700">
                                {/* Location */}
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span className="font-semibold">{position.location}</span>
                                </div>

                                {/* Salary */}
                                <div className="flex items-center gap-2">
                                    <Wallet className="w-4 h-4" />
                                    <span className="font-semibold">{position.salary}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OpenPositionsSection;