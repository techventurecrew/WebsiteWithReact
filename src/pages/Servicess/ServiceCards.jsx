import React from 'react';
import { Code, Smartphone, Palette, BarChart3, Rocket, Megaphone } from 'lucide-react';

const ServicesCardsGrid = () => {
    const services = [
        {
            id: 1,
            icon: Code,
            title: 'Web Development',
            description: 'We build professional, high-performance websites to grow your business online.',
            gradient: 'from-orange-500 to-orange-600'
        },
        {
            id: 2,
            icon: Smartphone,
            title: 'App Development',
            description: 'We design and build intuitive mobile apps for iOS, Android, and cross-platform needs.',
            gradient: 'from-orange-500 to-red-600'
        },
        {
            id: 3,
            icon: Palette,
            title: 'Graphic Designing',
            description: 'We provide professional graphic design services to bring your brand\'s visual identity to life.',
            gradient: 'from-orange-500 to-orange-600'
        },
        {
            id: 4,
            icon: BarChart3,
            title: 'Data Analysis',
            description: 'We build professional, high-performance websites to grow your business online.',
            gradient: 'from-orange-500 to-orange-600'
        },
        {
            id: 5,
            icon: Rocket,
            title: 'SEO Setup',
            description: 'We design and build intuitive mobile apps for iOS, Android, and cross-platform needs.',
            gradient: 'from-orange-500 to-red-600'
        },
        {
            id: 6,
            icon: Megaphone,
            title: 'Digital Marketing',
            description: 'We provide professional graphic design services to bring your brand\'s visual identity to life.',
            gradient: 'from-orange-500 to-orange-600'
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid of Service Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="card-angled group relative bg-[#E4E4E4] inset-shadow-3xl relative h-[450px] w-[350px] rounded-t-[2rem] hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',


                                }}
                            >
                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Icon Section with Gradient */}
                                    <div className={`bg-gradient-to-br ${service.gradient} p-12 flex items-center justify-center shadow-xl backdrop-blur-xl`}>
                                        <IconComponent className="w-24 h-24 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Text Content */}
                                    <div className=" p-6 pb-10 ">
                                        <h3 className="text-xl bg-[#E4E4E4] font-bold mb-3 text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-black text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <button className="text-orange-500 font-semibold text-sm border-2 border-orange-500 px-6 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Diagonal Shadow Effect */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-200 to-transparent opacity-50"
                                    style={{
                                        clipPath: 'polygon(0 100%, 100% 90%, 100% 100%)'
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesCardsGrid;