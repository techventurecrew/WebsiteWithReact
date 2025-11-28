import React, { useEffect, useRef, useState } from 'react';

const OurStoryTeamSection = () => {
    const [visibleItems, setVisibleItems] = useState({});
    const itemsRef = useRef({});

    const teamMembers = [
        {
            id: 1,
            name: 'Kanak Singhal',
            description: 'CEO & Co-Founder',
            initials: 'KS'
        },
        {
            id: 2,
            name: 'Amandeep',
            description: 'Co-Founder and Project Manager',
            initials: 'AM'
        },
        {
            id: 3,
            name: 'Pranav Singhal',
            description: 'Co-Founder and App Developer',
            initials: 'PS'
        },
        {
            id: 4,
            name: 'Kaushal Chauhan',
            description: 'Manager and Figma Designer',
            initials: 'KC'
        },
        {
            id: 5,
            name: 'Akshit Chauhan',
            description: 'Backend Team Manager',
            initials: 'AC'
        },
        {
            id: 6,
            name: 'Vanshaj Bansal',
            description: 'Head of Website Development',
            initials: 'VB'
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

    const getAvatarColor = (initials) => {
        const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-red-500'];
        const index = initials.charCodeAt(0) % colors.length;
        return colors[index];
    };

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

                .card-item.visible {
                    animation: fadeInUp 0.6s ease-out forwards;
                }

                .card-item:nth-child(1).visible { animation-delay: 0s; }
                .card-item:nth-child(2).visible { animation-delay: 0.15s; }
                .card-item:nth-child(3).visible { animation-delay: 0.3s; }
                .card-item:nth-child(4).visible { animation-delay: 0.45s; }
                .card-item:nth-child(5).visible { animation-delay: 0.6s; }
                .card-item:nth-child(6).visible { animation-delay: 0.75s; }
            `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Our Story Section */}
                <div className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Image */}
                        <div
                            ref={el => itemsRef.current['story-image'] = el}
                            data-id="story-image"
                            className={`flex justify-center items-center animate-fade-left ${visibleItems['story-image'] ? 'visible' : ''}`}
                        >
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
                            <h2
                                ref={el => itemsRef.current['story-heading'] = el}
                                data-id="story-heading"
                                className={`text-4xl sm:text-5xl font-bold animate-fade-up ${visibleItems['story-heading'] ? 'visible' : ''}`}
                            >
                                Our <span className="text-orange-500">Story</span>
                            </h2>
                            <p
                                ref={el => itemsRef.current['story-text'] = el}
                                data-id="story-text"
                                className={`text-base sm:text-lg text-gray-700 leading-relaxed text-justify animate-fade-up ${visibleItems['story-text'] ? 'visible' : ''}`}
                            >
                                Crew Techventure was founded with a simple belief: every local business deserves a strong digital identity.

                                We understand the challenges small and medium businesses face in today's competitive digital era. Many struggle with visibility, branding, and adapting to fast-changing technology — and that's where we step in.

                                Our team closely collaborates with businesses to transform their traditional workflows into digital-first operations. Through modern tools, quality design, and smart solutions, we empower businesses to reach more customers, improve credibility, and grow confidently.

                                We are committed to making digital growth simple, accessible, and affordable for all.
                            </p>
                            <button
                                ref={el => itemsRef.current['story-btn'] = el}
                                data-id="story-btn"
                                className={`bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-base hover:bg-orange-600 transition-colors shadow-lg animate-fade-up ${visibleItems['story-btn'] ? 'visible' : ''}`}
                            >
                                Read about our story here
                            </button>
                        </div>
                    </div>
                </div>

                {/* Meet the Team Section */}
                <div>
                    {/* Section Heading */}
                    <div className="text-center mb-12">
                        <h2
                            ref={el => itemsRef.current['team-heading'] = el}
                            data-id="team-heading"
                            className={`text-4xl sm:text-5xl font-bold mb-4 animate-fade-up ${visibleItems['team-heading'] ? 'visible' : ''}`}
                        >
                            Meet the <span className="text-orange-500">Team</span>
                        </h2>
                        <p
                            ref={el => itemsRef.current['team-description'] = el}
                            data-id="team-description"
                            className={`text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fade-up ${visibleItems['team-description'] ? 'visible' : ''}`}
                        >
                            Our team consists of passionate professionals dedicated to building meaningful digital experiences. Each member brings creativity, technical expertise, and a customer-first mindset.
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {teamMembers.map((member) => (
                            <div
                                key={member.id}
                                ref={el => itemsRef.current[`team-${member.id}`] = el}
                                data-id={`team-${member.id}`}
                                className={`card-item border-2 border-orange-500 rounded-2xl p-6 bg-white hover:shadow-xl transition-shadow duration-300 animate-fade-up ${visibleItems[`team-${member.id}`] ? 'visible' : ''}`}
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Avatar */}
                                    <div className={`w-20 h-20 ${getAvatarColor(member.initials)} rounded-full flex items-center justify-center flex-shrink-0 mb-4 shadow-lg`}>
                                        <span className="text-white text-2xl font-bold">
                                            {member.initials}
                                        </span>
                                    </div>

                                    {/* Member Info */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-sm text-orange-500 font-semibold mb-2">
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
                            ref={el => itemsRef.current['hiring-btn'] = el}
                            data-id="hiring-btn"
                            onClick={() => window.location.href = 'hiring'}
                            className={`bg-orange-500 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg animate-fade-up ${visibleItems['hiring-btn'] ? 'visible' : ''}`}
                        >
                            Take a look at our open positions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStoryTeamSection;