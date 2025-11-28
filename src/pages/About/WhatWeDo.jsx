import React, { useEffect, useRef, useState } from 'react';

const WhatWeDoSection = () => {
    const [visibleItems, setVisibleItems] = useState({});
    const itemsRef = useRef({});

    const services = [
        {
            id: 1,
            title: 'Web Development',
            items: ['UI/UX design', 'Custom website development', 'Website management & hosting', 'Full project lifecycle: Requirement → Research → Design → Frontend → Backend → Testing → Handover']
        },
        {
            id: 2,
            title: 'Software Development',
            items: ['Custom software solutions', 'Dashboard, CRM & automation tools', 'End-to-end development process: Requirement → Research → Design → Development → Testing → Handover']
        },
        {
            id: 3,
            title: 'Graphics & Branding',
            items: ['Logo creation', 'Posters, banners & marketing creatives', 'UI design (Figma)', 'Photoshop, Illustrator, CAD & AutoCAD']
        },
        {
            id: 4,
            title: 'Data Analytics',
            items: ['Microsoft Excel', 'SQL', 'Power BI dashboards', 'Python-based analysis & automation']
        }
    ];

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleItems(prev => ({
                        ...prev,
                        [entry.target.dataset.id]: true
                    }));
                }
            });
        }, observerOptions);

        Object.values(itemsRef.current).forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-fade-up {
                    opacity: 0;
                }
                .animate-fade-up.visible {
                    animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                }

                .animate-fade-left {
                    opacity: 0;
                }
                .animate-fade-left.visible {
                    animation: fadeInLeft 0.6s ease-out forwards;
                }

                .animate-fade-right {
                    opacity: 0;
                }
                .animate-fade-right.visible {
                    animation: fadeInRight 0.6s ease-out forwards;
                }

                .list-item.visible {
                    animation: fadeInLeft 0.6s ease-out forwards;
                }

                .list-item:nth-child(1).visible { animation-delay: 0s; }
                .list-item:nth-child(2).visible { animation-delay: 0.1s; }
                .list-item:nth-child(3).visible { animation-delay: 0.2s; }
                .list-item:nth-child(4).visible { animation-delay: 0.3s; }
            `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2
                    ref={el => itemsRef.current['heading'] = el}
                    data-id="heading"
                    className={`text-5xl sm:text-6xl font-bold mb-8 animate-fade-up ${visibleItems['heading'] ? 'visible' : ''}`}
                >
                    What we do
                </h2>

                {/* Intro Text */}
                <p
                    ref={el => itemsRef.current['intro'] = el}
                    data-id="intro"
                    className={`text-lg text-gray-700 leading-relaxed mb-12 animate-fade-up ${visibleItems['intro'] ? 'visible' : ''}`}
                >
                    At Crew Techventure, we offer a wide range of services designed to help businesses establish a strong and memorable digital presence.
                </p>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Content */}
                    <div className="space-y-6">

                        {/* Services List */}
                        <div className="space-y-6">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    data-id={`service-${service.id}`}
                                    ref={el => itemsRef.current[`service-${service.id}`] = el}
                                    className={`list-item flex gap-4 animate-fade-left ${visibleItems[`service-${service.id}`] ? 'visible' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    {/* Orange Bar */}
                                    <div className="w-1 bg-orange-500 flex-shrink-0 rounded-full mt-1"></div>

                                    {/* Service Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <span className="text-orange-500">✔</span>
                                            {service.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {service.items.map((item, idx) => (
                                                <li key={idx} className="text-gray-700 flex gap-2">
                                                    <span className="text-orange-500 flex-shrink-0 mt-1">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Closing Statement */}
                        <div
                            ref={el => itemsRef.current['closing'] = el}
                            data-id="closing"
                            className={`list-item flex gap-4 mt-8 pt-6 border-t border-gray-200 animate-fade-left ${visibleItems['closing'] ? 'visible' : ''}`}
                        >
                            <div className="w-1 bg-orange-500 flex-shrink-0 rounded-full mt-1"></div>
                            <p className="text-gray-700 italic">
                                We ensure every deliverable reflects your brand personality — clean, modern, and customer-focused.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div
                        ref={el => itemsRef.current['image'] = el}
                        data-id="image"
                        className={`flex justify-center items-start lg:sticky lg:top-20 animate-fade-right ${visibleItems['image'] ? 'visible' : ''}`}
                    >
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