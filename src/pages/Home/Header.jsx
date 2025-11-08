import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-4">
                        <h1 className="text-6xl sm:text-6xl lg:text-6xl font-semibold leading-tight">
                            <span className="text-black">Connect. Protect.</span>
                            <br />
                            <span className="text-black">And </span>
                            <span className="text-orange-500">Build Everywhere.</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
                            CrewTechVenture is a premier digital transformation agency.
                            We empower small businesses to build modern web and
                            mobile applications, ensuring their online presence is secure,
                            fast, and ready for growth.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300"
                                onClick={() => console.log('Book Call button clicked')}
                            >
                                Book Call
                            </button>
                            <button
                                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
                                onClick={() => window.location.href = 'Contact'}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Geometric Sphere */}
                    <div className="flex justify-center lg:justify-end overflow-hidden">
                        <div className="relative w-full max-w-lg aspect-square">
                            <svg
                                viewBox="0 0 500 500"
                                className="w-full h-full animate-spin-slow"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    animation: 'spin 20s linear infinite, pulse 3s ease-in-out infinite'
                                }}
                            >
                                {/* Geodesic Sphere Lines */}
                                <g stroke="#f97316" strokeWidth="2" fill="none">
                                    {/* Horizontal rings */}
                                    <ellipse cx="250" cy="250" rx="200" ry="200" />
                                    {/* <ellipse cx="250" cy="250" rx="180" ry="180" />
                                    <ellipse cx="250" cy="250" rx="150" ry="150" />
                                    <ellipse cx="250" cy="250" rx="110" ry="110" />
                                    <ellipse cx="250" cy="250" rx="60" ry="60" /> */}

                                    {/* Vertical rings */}
                                    <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(30 250 250)" />
                                    <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(60 250 250)" />
                                    <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(90 250 250)" />
                                    <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(120 250 250)" />
                                    <ellipse cx="250" cy="250" rx="200" ry="80" transform="rotate(150 250 250)" />

                                    {/* Diagonal rings */}
                                    <ellipse cx="250" cy="250" rx="200" ry="120" transform="rotate(45 250 250)" />
                                    <ellipse cx="250" cy="250" rx="200" ry="120" transform="rotate(135 250 250)" />

                                    {/* Additional connection lines */}
                                    <line x1="250" y1="50" x2="250" y2="450" />
                                    <line x1="50" y1="250" x2="450" y2="250" />
                                    <line x1="100" y1="100" x2="400" y2="400" />
                                    <line x1="400" y1="100" x2="100" y2="400" />
                                </g>

                                {/* Node points */}
                                <g fill="#f97316">
                                    {/* Outer ring nodes */}
                                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                                        const rad = (angle * Math.PI) / 180;
                                        const x = 250 + 200 * Math.cos(rad);
                                        const y = 250 + 200 * Math.sin(rad);
                                        return <circle key={`outer-${angle}`} cx={x} cy={y} r="6" />;
                                    })}

                                    {/* Middle ring nodes */}
                                    {/* {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => {
                                        const rad = (angle * Math.PI) / 180;
                                        const x = 250 + 150 * Math.cos(rad);
                                        const y = 250 + 150 * Math.sin(rad);
                                        return <circle key={`mid-${angle}`} cx={x} cy={y} r="6" />;
                                    })} */}

                                    {/* Inner nodes */}
                                    {/* {[0, 60, 120, 180, 240, 300].map((angle) => {
                                        const rad = (angle * Math.PI) / 180;
                                        const x = 250 + 110 * Math.cos(rad);
                                        const y = 250 + 110 * Math.sin(rad);
                                        return <circle key={`inner-${angle}`} cx={x} cy={y} r="5" />;
                                    })} */}

                                    {/* Cardinal points */}
                                    <circle cx="250" cy="50" r="7" />
                                    <circle cx="250" cy="450" r="7" />
                                    <circle cx="50" cy="250" r="7" />
                                    <circle cx="450" cy="250" r="7" />

                                    {/* Center node */}
                                    <circle cx="250" cy="250" r="8" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            {/* Custom CSS for animations */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(0.90) rotate(0deg);
          }
          50% {
            transform: scale(0.55) rotate(180deg);
          }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite, pulse 3s ease-in-out infinite;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;