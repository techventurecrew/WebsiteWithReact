import React from 'react';

const OurStoryTeamSection = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Name',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop'
        },
        {
            id: 2,
            name: 'Name',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop'
        },
        {
            id: 3,
            name: 'Name',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop'
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Our Story Section */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div className="flex justify-center items-center">
                            <div className="w-full rounded-2xl overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                    alt="Team meeting presentation"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-5xl font-bold">
                                Our <span className="text-orange-500">Story</span>
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-justify">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                            </p>
                            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors shadow-lg">
                                Read about our story here
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div>
                    {/* Section Heading */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Meet the <span className="text-orange-500">Team</span>
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                className="border-2 border-orange-500 rounded-2xl p-6 bg-white hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex gap-4 items-start">
                                    {/* Profile Image */}
                                    <div className="w-20 h-20 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {member.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => window.location.href = 'hiring'}

                            className="bg-orange-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg">
                            Take a look at our open positions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStoryTeamSection;