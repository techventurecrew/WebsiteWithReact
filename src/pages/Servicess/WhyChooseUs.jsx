import React from 'react';
import { Code2, Lightbulb, MessageSquare, Layers, Shield, Handshake } from 'lucide-react';

const WhyChooseUsSection = () => {
    const features = [
        {
            id: 1,
            icon: Code2,
            title: 'Expert Software Developers',
            description: 'Our team of seasoned developers brings years of experience and cutting-edge expertise to every project, ensuring top-quality solutions.'
        },
        {
            id: 2,
            icon: Lightbulb,
            title: 'Customized Solutions',
            description: 'We don\'t believe in one-size-fits-all. Every solution is tailored specifically to meet your unique business needs and goals.'
        },
        {
            id: 3,
            icon: MessageSquare,
            title: 'Transparent Communication',
            description: 'Stay informed every step of the way with clear, honest communication and regular project updates.'
        },
        {
            id: 4,
            icon: Layers,
            title: 'End-to-End Service',
            description: 'From initial concept to deployment and maintenance, we provide comprehensive solutions throughout the entire project lifecycle.'
        },
        {
            id: 5,
            icon: Shield,
            title: 'Security & Performance Focus',
            description: 'Built with security-first mindset and optimized for peak performance, ensuring your applications are fast, secure, and reliable.'
        },
        {
            id: 6,
            icon: Handshake,
            title: 'Long-Term Partnership',
            description: 'We\'re not just vendors; we\'re partners invested in your success. Building lasting relationships that grow with your business.'
        }
    ];

    return (
        <section className="bg-white">
            {/* Call to Action Banner */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 py-10 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                {/* Decorative curved wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#ffffff"
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        ></path>
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Wanna work with us?..
                    </h2>
                    <p className="text-base sm:text-lg text-white mb-8 opacity-90">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi., mattis
                        ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                    </p>
                    <button className="bg-white text-orange-500 px-8 py-3 mb-7 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:scale-105">
                        Lets do it
                    </button>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10">
                        Why choose <span className="text-orange-500">Us?</span>
                    </h2>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={feature.id}
                                    className="bg-gray-50 rounded-2xl p-6 border-4 shadow-lg border-orange-500 transition-all duration-300 hover:shadow-2xl"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-lg text-gray-700 ">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;