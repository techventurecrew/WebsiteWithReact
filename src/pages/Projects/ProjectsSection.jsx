import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('Web Development');
    const [currentSlide, setCurrentSlide] = useState(0);

    const categories = [
        'Web Development',
        'App Development',
        'Data Analysis',
        'Graphic Designing',
        'SEO Handeling'
    ];

    const projects = {
        'Web Development': [
            {
                id: 1,
                title: 'E-Commerce Platform',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                tags: ['Web Application', 'UI/UX']
            },
            {
                id: 2,
                title: 'Corporate Website',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
                tags: ['Web Application', 'UI/UX']
            },
            {
                id: 3,
                title: 'Portfolio Site',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
                tags: ['Web Application', 'UI/UX']
            }
        ],
        'App Development': [
            {
                id: 4,
                title: 'Fitness Tracking App',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
                tags: ['Mobile App', 'UI/UX']
            },
            {
                id: 5,
                title: 'Food Delivery App',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
                tags: ['Mobile App', 'UI/UX']
            },
            {
                id: 6,
                title: 'Social Media App',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
                tags: ['Mobile App', 'UI/UX']
            }
        ],
        'Data Analysis': [
            {
                id: 7,
                title: 'Sales Dashboard',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
                tags: ['Analytics', 'Visualization']
            },
            {
                id: 8,
                title: 'Market Research',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
                tags: ['Analytics', 'Reports']
            },
            {
                id: 9,
                title: 'Customer Insights',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
                tags: ['Analytics', 'Data Mining']
            }
        ],
        'Graphic Designing': [
            {
                id: 10,
                title: 'Brand Identity',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
                tags: ['Branding', 'Logo Design']
            },
            {
                id: 11,
                title: 'Marketing Materials',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
                tags: ['Print Design', 'Graphics']
            },
            {
                id: 12,
                title: 'Social Media Graphics',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
                tags: ['Digital Design', 'Graphics']
            }
        ],
        'SEO Handeling': [
            {
                id: 13,
                title: 'Website Optimization',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop',
                tags: ['SEO', 'Optimization']
            },
            {
                id: 14,
                title: 'Content Strategy',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
                tags: ['SEO', 'Content']
            },
            {
                id: 15,
                title: 'Link Building',
                description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.',
                image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
                tags: ['SEO', 'Marketing']
            }
        ]
    };

    const currentProjects = projects[activeCategory] || [];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % currentProjects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
    };

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentSlide + i + currentProjects.length) % currentProjects.length;
            visible.push({ ...currentProjects[index], position: i });
        }
        return visible;
    };

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                        Our <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        At Crew Techventure, every project is designed to help businesses move confidently into the digital world by combining clean design, robust technology, and a deep understanding of local markets. From modern websites and scalable software to impactful graphics and data-driven dashboards, each solution is crafted to boost visibility, improve customer experience, and support long-term growth
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 ">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentSlide(0);
                            }}
                            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${activeCategory === category
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Carousel */}
                <div className="relative">
                    {/* Desktop/Tablet View (3D Carousel) - Hidden on mobile */}
                    <div className="hidden md:flex items-center justify-center min-h-[500px] perspective-1000">
                        {getVisibleProjects().map((project, idx) => {
                            const position = project.position;
                            const isCenter = position === 0;
                            const isLeft = position === -1;
                            const isRight = position === 1;

                            return (
                                <div
                                    key={project.id}
                                    className={`absolute transition-all duration-500 ease-in-out ${isCenter
                                        ? 'z-30 scale-100 opacity-100'
                                        : isLeft
                                            ? 'z-10 scale-75 opacity-60 -translate-x-[400px]'
                                            : 'z-10 scale-75 opacity-60 translate-x-[400px]'
                                        }`}
                                    style={{
                                        transform: `${isCenter
                                            ? 'translateX(0) scale(1)'
                                            : isLeft
                                                ? 'translateX(-400px) scale(0.75)'
                                                : 'translateX(400px) scale(0.75)'
                                            }`
                                    }}
                                >
                                    <div className="bg-gray-100 rounded-3xl border-4 border-orange-500 overflow-hidden shadow-2xl w-[400px] lg:w-[500px]">
                                        {/* Project Image */}
                                        <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Project Details */}
                                        <div className="p-6 lg:p-8">
                                            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className={`px-4 py-2 rounded-xl text-sm font-medium ${index === 0
                                                            ? 'bg-orange-100 text-orange-500'
                                                            : 'bg-gray-200 text-gray-700'
                                                            }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile View (Simple Slider) - Visible only on mobile */}
                    <div className="md:hidden overflow-hidden">
                        <div className="px-4">
                            <div className="bg-gray-100 rounded-3xl border-4 border-orange-500 overflow-hidden shadow-2xl">
                                {/* Project Image */}
                                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                                    <img
                                        src={currentProjects[currentSlide]?.image}
                                        alt={currentProjects[currentSlide]?.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Project Details */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">
                                        {currentProjects[currentSlide]?.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {currentProjects[currentSlide]?.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {currentProjects[currentSlide]?.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-medium ${index === 0
                                                    ? 'bg-orange-100 text-orange-500'
                                                    : 'bg-gray-200 text-gray-700'
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons - Desktop/Tablet */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Navigation Buttons - Mobile */}
                    <button
                        onClick={prevSlide}
                        className="md:hidden absolute left-2 top-[100px] w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="md:hidden absolute right-2 top-[100px] w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Carousel Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {currentProjects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'w-8 bg-orange-500'
                                : 'w-2 bg-orange-200 hover:bg-orange-300'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;