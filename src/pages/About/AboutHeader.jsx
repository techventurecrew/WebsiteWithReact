import React, { useEffect, useRef, useState } from 'react';

const AboutSectionWithWaves = () => {
    const [visibleItems, setVisibleItems] = useState({});
    const itemsRef = useRef({});

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
        <section className="bg-white">
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
            `}</style>

            {/* Decorative Wave Banner */}
            <div className="relative w-full overflow-hidden">
                {/* Wave Image with Animation */}
                <img
                    ref={el => itemsRef.current['wave-image'] = el}
                    data-id="wave-image"
                    src="/Images/AboutHeaderImage.png"
                    alt="Decorative Wave Banner"
                    className={`w-full h-64 sm:h-80 object-cover animate-fade-up ${visibleItems['wave-image'] ? 'visible' : ''}`}
                />
            </div>

            {/* Content Section */}
            <div className="py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Heading */}
                        <div>
                            <h2
                                ref={el => itemsRef.current['left-heading'] = el}
                                data-id="left-heading"
                                className={`text-2xl sm:text-5xl lg:text-5xl font-semibold leading-tight animate-fade-left ${visibleItems['left-heading'] ? 'visible' : ''}`}
                            >
                                Lorem ipsum dolor sit amet consectetur adipiscing elit.
                            </h2>
                        </div>

                        {/* Right Side - About Content */}
                        <div className="space-y-3">
                            <h3
                                ref={el => itemsRef.current['about-heading'] = el}
                                data-id="about-heading"
                                className={`text-3xl sm:text-4xl font-bold animate-fade-right ${visibleItems['about-heading'] ? 'visible' : ''}`}
                            >
                                About <span className="text-orange-500">Crewtechventure</span>
                            </h3>
                            <p
                                ref={el => itemsRef.current['about-text'] = el}
                                data-id="about-text"
                                className={`text-base sm:text-lg font-semibold text-gray-700 leading-relaxed animate-fade-up ${visibleItems['about-text'] ? 'visible' : ''}`}
                            >
                                Crew Techventure is dedicated to empowering businesses of all sizes by helping them build, grow, and
                                strengthen their online presence. As a leading technology solutions company in India, we understand
                                that in today's digital world, visibility and professionalism are essential for success—and we make it
                                accessible to everyone.
                                We're more than just a service provider—we're your trusted IT services provider in India. Our mission is
                                simple: deliver reliable and affordable digital solutions that help small businesses and enterprises
                                upgrade from traditional operations to fully digital, high-impact systems. Whether it's a website,
                                software, mobile app, branding, or digital marketing, our goal is to ensure every business stands out and
                                grows confidently in the online marketplace.
                                At Crew Techventure, we believe great technology shouldn't break the bank. That's why we combine
                                speed, quality, and cost-effectiveness to give you the competitive edge you need to succeed in the digital
                                age.   </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionWithWaves;