import React, { useState } from 'react';
import { Code, Smartphone, Palette, BarChart3, Rocket, Megaphone, X } from 'lucide-react';

const ServicesCardsGrid = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            icon: Code,
            title: 'Web Development',
            description: 'We build professional, high-performance websites to grow your business online.',
            gradient: 'from-orange-500 to-orange-600',
            detailedDescription: 'Our web development services encompass creating modern, responsive, and scalable websites tailored to your business needs. We use cutting-edge technologies and best practices to ensure your online presence stands out and delivers exceptional user experiences.',
            steps: [
                'Discovery & Planning: Understanding your requirements, goals, and target audience',
                'Design & Prototyping: Creating wireframes and visual designs that align with your brand',
                'Development: Building the website with clean, maintainable code using modern frameworks',
                'Testing & QA: Ensuring everything works flawlessly across all devices and browsers',
                'Launch & Deployment: Making your site live with proper hosting and domain setup',
                'Maintenance & Support: Ongoing updates, security patches, and improvements'
            ]
        },
        {
            id: 2,
            icon: Smartphone,
            title: 'App Development',
            description: 'We design and build intuitive mobile apps for iOS, Android, and cross-platform needs.',
            gradient: 'from-orange-500 to-red-600',
            detailedDescription: 'Transform your ideas into powerful mobile applications. Our team specializes in creating seamless, user-friendly apps that deliver exceptional performance across all devices and platforms, ensuring your users have the best experience.',
            steps: [
                'Concept & Strategy: Defining app features, user flows, and business objectives',
                'UI/UX Design: Crafting intuitive and beautiful interfaces that users love',
                'Development: Building native or cross-platform apps with optimal performance',
                'Integration: Connecting APIs, databases, and backend services',
                'Testing: Rigorous quality assurance on multiple devices and OS versions',
                'App Store Submission: Publishing to iOS App Store and Google Play Store',
                'Post-Launch Support: Updates, bug fixes, new features, and enhancements'
            ]
        },
        {
            id: 3,
            icon: Palette,
            title: 'Graphic Designing',
            description: 'We provide professional graphic design services to bring your brand\'s visual identity to life.',
            gradient: 'from-orange-500 to-orange-600',
            detailedDescription: 'Create a lasting impression with stunning visual designs. From logos to marketing materials, we craft compelling graphics that communicate your brand message effectively and beautifully across all mediums.',
            steps: [
                'Brand Discovery: Understanding your vision, values, and target market',
                'Research & Inspiration: Analyzing industry trends and competitor designs',
                'Concept Development: Creating multiple initial design concepts for review',
                'Design Iteration: Refining designs based on your feedback and preferences',
                'Final Artwork: Delivering polished, print-ready, and web-optimized files',
                'Brand Guidelines: Providing comprehensive usage standards and documentation'
            ]
        },
        {
            id: 4,
            icon: BarChart3,
            title: 'Data Analysis',
            description: 'Transform raw data into actionable insights to drive informed business decisions.',
            gradient: 'from-orange-500 to-orange-600',
            detailedDescription: 'Unlock the power of your data with our comprehensive analytics services. We help you understand patterns, trends, and insights that can transform your business strategy, optimize operations, and drive sustainable growth.',
            steps: [
                'Data Collection: Gathering relevant data from multiple sources and systems',
                'Data Cleaning: Ensuring accuracy, consistency, and removing anomalies',
                'Exploratory Analysis: Identifying patterns, trends, and correlations',
                'Statistical Modeling: Building predictive models and forecasts',
                'Visualization: Creating intuitive dashboards and interactive reports',
                'Insights & Recommendations: Delivering actionable findings with clear next steps',
                'Implementation Support: Helping you act on insights and measure results'
            ]
        },
        {
            id: 5,
            icon: Rocket,
            title: 'SEO Setup',
            description: 'Boost your online visibility and rank higher in search engine results.',
            gradient: 'from-orange-500 to-red-600',
            detailedDescription: 'Dominate search engine rankings with our comprehensive SEO services. We optimize every aspect of your online presence to increase organic traffic, improve visibility, and convert visitors into loyal customers.',
            steps: [
                'SEO Audit: Analyzing your current search performance and identifying issues',
                'Keyword Research: Identifying high-value search terms and opportunities',
                'On-Page Optimization: Improving content, meta tags, and internal linking',
                'Technical SEO: Enhancing site structure, speed, and mobile-friendliness',
                'Content Strategy: Creating SEO-friendly, valuable content for your audience',
                'Link Building: Establishing quality backlinks from authoritative sources',
                'Monitoring & Reporting: Tracking rankings, traffic, and ROI continuously'
            ]
        },
        {
            id: 6,
            icon: Megaphone,
            title: 'Digital Marketing',
            description: 'Reach your target audience with strategic digital marketing campaigns.',
            gradient: 'from-orange-500 to-orange-600',
            detailedDescription: 'Amplify your brand reach with data-driven digital marketing strategies. From social media to email campaigns, we create integrated marketing solutions that drive engagement, build brand awareness, and maximize conversions.',
            steps: [
                'Market Research: Understanding your audience, competitors, and opportunities',
                'Strategy Development: Creating a comprehensive multi-channel marketing plan',
                'Campaign Creation: Designing engaging ad content and compelling copy',
                'Multi-Channel Execution: Running campaigns across social, email, and paid ads',
                'A/B Testing: Optimizing campaigns for better performance and ROI',
                'Analytics & Tracking: Measuring engagement, conversions, and revenue',
                'Continuous Optimization: Refining strategies based on data and insights'
            ]
        }
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid of Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="card-angled group relative bg-gray-200 h-96 sm:h-[450px] w-full sm:w-[350px] rounded-t-3xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
                                }}
                            >
                                {/* Card Content */}
                                <div className="relative z-10">
                                    {/* Icon Section with Gradient */}
                                    <div className={`bg-gradient-to-br ${service.gradient} p-12 flex items-center justify-center shadow-xl`}>
                                        <IconComponent className="w-16 h-16 sm:w-24 sm:h-24 text-white" strokeWidth={1.5} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-6 pb-10">
                                        <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">
                                            {service.title}
                                        </h3>
                                        <p className="text-black text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>
                                        <button
                                            onClick={() => setSelectedService(service)}
                                            className="text-orange-500 font-semibold text-sm border-2 border-orange-500 px-6 py-2 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                {/* Diagonal Shadow Effect */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-300 to-transparent opacity-50"
                                    style={{
                                        clipPath: 'polygon(0 100%, 100% 90%, 100% 100%)'
                                    }}
                                ></div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Popup */}
            {selectedService && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedService(null)}
                    style={{ animation: 'fadeIn 0.3s ease-out' }}
                >
                    <div
                        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'slideUp 0.3s ease-out' }}
                    >
                        {/* Modal Header */}
                        <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative rounded-t-2xl`}>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>
                            <div className="flex items-center gap-4">
                                {React.createElement(selectedService.icon, {
                                    className: "w-16 h-16 text-white",
                                    strokeWidth: 1.5
                                })}
                                <h2 className="text-3xl font-bold text-white">
                                    {selectedService.title}
                                </h2>
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            {/* Detailed Description */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    About This Service
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {selectedService.detailedDescription}
                                </p>
                            </div>

                            {/* Steps */}
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Our Process
                                </h3>
                                <div className="space-y-4">
                                    {selectedService.steps.map((step, index) => (
                                        <div
                                            key={index}
                                            className="flex gap-4 items-start group"
                                        >
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                                                {index + 1}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-gray-800 leading-relaxed group-hover:text-orange-600 transition-colors duration-300">
                                                    {step}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <button
                                    className={`w-full bg-gradient-to-br ${selectedService.gradient} text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                                >
                                    Get Started with {selectedService.title}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Animation Styles */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes slideUp {
                    from {
                        transform: translateY(50px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </section>
    );
};

export default ServicesCardsGrid;