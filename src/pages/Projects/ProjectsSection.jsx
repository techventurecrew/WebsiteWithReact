import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Figma } from 'lucide-react';
import { Folder } from 'lucide-react';
const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('Graphic Design');
    const [currentSlide, setCurrentSlide] = useState(0);

    const categories = [
        'Web Development',
        'App Development',
        'Graphic Design',
        'UI/UX Design',
        'Data Analytics'
    ];

    const projects = {
        'Web Development': [
            {
                id: 1,
                title: 'Soso Click',
                description: 'A professional photography portfolio featuring high-resolution galleries and service booking.',
                image: '/Images/soso_clicks.png', // Add a screenshot here
                tags: ['Next.js', 'Photography'],
                liveLink: 'https://soso-click-tyka.vercel.app/',
            },
            {
                id: 2,
                title: 'Oneness Solar Power',
                description: 'Sustainable energy solutions landing page for commercial and residential solar projects.',
                image: '/Images/Website_1.jpg',
                tags: ['Sustainability', 'React'],
                liveLink: 'https://www.onenesssolarpower.com/', // Add your live link if any
            }
        ],
        'App Development': [
            { id: 20, title: 'Fitness Tracker', description: 'Cross-platform mobile app for health monitoring.', image: 'https://images.unsplash.com/photo-1510511459019-5dee9954889c?w=800', tags: ['React Native', 'Firebase'] }
        ],
        'Graphic Design': [
            { id: 10, title: 'Crew Brand Identity', description: 'Complete visual identity including logo and brand colors.', image: '/Images/project_5.png', tags: ['Branding', 'Logo'] },
            { id: 11, title: 'Rèel Coffee Poster', description: 'Premium coffee packaging and promotional poster design.', image: '/Images/project_3.png', tags: ['Poster', 'Marketing'] },
            { id: 12, title: 'Megamere Visuals', description: 'Creative product shoot and edit for luxury fragrance.', image: '/Images/project_2.png', tags: ['Product Design'] },
            { id: 13, title: 'Stella Essence', description: 'Minimalist and refreshing aesthetic for perfume branding.', image: '/Images/project_1.png', tags: ['Digital Art'] },
            { id: 14, title: 'Tech Gadget Launch', description: 'Packaging concept for high-end audio devices.', image: '/Images/project_4.png', tags: ['Packaging'] }
        ],
        'UI/UX Design': [
            {
                id: 30,
                title: 'Martha Rae® Portfolio',
                description: 'Professional high-end specialist portfolio focusing on performance and storytelling.',
                image: '/Images/Portfolio_2.png',
                tags: ['Figma', 'Personal Brand'],
                figmaLink: '#',
                driveLink: 'https://drive.google.com/file/d/1Z_r5BMIuIO_n0680NSiuyKp-0z7MLcKs/view?usp=sharing'
            },
            {
                id: 31,
                title: 'Duncan Robert Digital',
                description: 'Dark-themed creative director portfolio with high-impact visual sections.',
                image: '/Images/portfolio1.png',
                tags: ['Figma', 'Designer'],
                figmaLink: '#',
                driveLink: 'https://drive.google.com/file/d/1dNviEkJ_tRg9Pr3tZVF7L5G375Z98jJI/view?usp=sharing'
            },
            {
                id: 32,
                title: 'Eduzin Learning Hub',
                description: 'Comprehensive educational platform interface for university and online learning.',
                image: '/Images/Website_design3.png',
                tags: ['EdTech', 'Dashboard'],
                figmaLink: '#',
                driveLink: 'https://drive.google.com/file/d/1qo4t8etwkUicVyvtidStR4E_HUvmBtZz/view?usp=sharing'
            },
            {
                id: 33,
                title: 'Kiddio & Padora Schools',
                description: 'Playful and engaging UI design for early childhood education and daycare centers.',
                image: '/Images/Website_design5.png', // Also covers Website_design1.jpg logic
                tags: ['Education', 'UI Design'],
                figmaLink: '#',
                driveLink: 'https://drive.google.com/file/d/1wA9YRbVk0H7NqOqSnJp2hEkuMjJnPhN8/view?usp=sharing'
            },

            {
                id: 34,
                title: 'Timeless Brand Identity',
                description: 'Luxury branding concept focusing on "Creating timeless brands that inspire".',
                image: '/Images/Website_design4.png',
                tags: ['Branding', 'Strategy'],
                driveLink: 'https://drive.google.com/file/d/1ol3XojFrioAf5gkCVTQTfM8cjH0XykCr/view?usp=sharing'
            },
            {
                id: 35,
                title: 'Prompt Engineering Masterclass',
                description: 'Marketing-focused landing page design for technical AI courses.',
                image: '/Images/Website_design2.png',
                tags: ['Poster', 'Course Design'],
                driveLink: 'https://drive.google.com/file/d/1vhDZVA1OxGrofeSjuhzmxBXbssIShyCi/view?usp=sharing'
            },
            {
                id: 36,
                title: 'KnitKnot Fashion',
                description: 'Visual identity and promotional banners for a modern apparel brand.',
                image: '/Images/Ecommerce_3.png',
                tags: ['Branding', 'Poster'],
                driveLink: 'https://drive.google.com/file/d/19kmr_D5SyFOu4KUXzKxTvPfePWgshK4x/view?usp=sharing'
            },
        ],
        'Data Analytics': [
            {
                id: 41,
                title: 'Sales Performance Dashboard',
                description: 'Visualizing quarterly revenue trends and market growth.',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                tags: ['Python', 'Tableau']
            }
        ]
    };

    const currentProjects = projects[activeCategory] || [];

    const nextSlide = () => setCurrentSlide((prev) => (currentProjects.length ? (prev + 1) % currentProjects.length : 0));
    const prevSlide = () => setCurrentSlide((prev) => (currentProjects.length ? (prev - 1 + currentProjects.length) % currentProjects.length : 0));

    useEffect(() => {
        if (currentProjects.length <= 1) return;
        const autoPlay = setInterval(() => { nextSlide(); }, 4000);
        return () => clearInterval(autoPlay);
    }, [currentSlide, activeCategory]);

    const getVisibleProjects = () => {
        const visible = [];
        if (currentProjects.length === 0) return [];
        if (currentProjects.length === 1) return [{ ...currentProjects[0], position: 0 }];

        for (let i = -1; i <= 1; i++) {
            const index = (currentSlide + i + currentProjects.length) % currentProjects.length;
            visible.push({ ...currentProjects[index], position: i });
        }
        return visible;
    };

    return (
        <section className="bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                    <h2 className="text-5xl sm:text-7xl font-extrabold mb-4">
                        Our <span className="text-orange-500">Portfolio</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-medium">
                        Explore our creative journey across development, design, and data.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => { setActiveCategory(category); setCurrentSlide(0); }}
                            className={`relative px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 z-10 ${activeCategory === category ? 'text-white' : 'text-orange-500 border-2 border-orange-500 hover:bg-orange-50'}`}
                        >
                            <span className="relative z-20">{category}</span>
                            {activeCategory === category && (
                                <motion.div layoutId="activePill" className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/30 z-10" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Carousel Area */}
                <div className="relative h-[700px] flex items-center justify-center">
                    <div className="relative w-full max-w-[550px] h-full flex items-center justify-center [perspective:1200px]">
                        <AnimatePresence mode="popLayout">
                            {getVisibleProjects().map((project) => {
                                const isCenter = project.position === 0;
                                return (
                                    <motion.div
                                        key={`${activeCategory}-${project.id}`}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{
                                            opacity: isCenter ? 1 : 0.4,
                                            scale: isCenter ? 1 : 0.8,
                                            x: project.position * 360,
                                            rotateY: project.position * -20,
                                            z: isCenter ? 0 : -200,
                                            zIndex: isCenter ? 30 : 10,
                                        }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        className="absolute w-full"
                                    >
                                        <div className={`bg-white rounded-[2.5rem] border-4 ${isCenter ? 'border-orange-500 shadow-2xl' : 'border-gray-200'} overflow-hidden`}>

                                            <div className="h-64 bg-black flex items-center justify-center relative overflow-hidden group">
                                                <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-125" />
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="relative z-10 max-w-full max-h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                                    <div className="flex gap-3 mt-4">
                                                        {project.liveLink && (
                                                            <a href={project.liveLink} target="_blank" rel="noreferrer" title="View Live" className="p-2 bg-orange-50 text-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-all">
                                                                <ExternalLink size={18} />
                                                            </a>
                                                        )}

                                                        {project.driveLink && (
                                                            <a href={project.driveLink} target="_blank" rel="noreferrer" title="Drive Resources" className="p-2 bg-blue-50 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all">
                                                                <Folder size={18} />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                                <p className="text-gray-500 mb-4 text-xs leading-relaxed line-clamp-2">{project.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} className={`px-3 py-1 rounded-full text-[10px] font-bold ${i === 0 ? 'bg-orange-100 text-orange-500' : 'bg-gray-100 text-gray-600'}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    <button onClick={prevSlide} className="hidden md:flex absolute left-4 z-40 w-12 h-12 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="hidden md:flex absolute right-4 z-40 w-12 h-12 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div className="flex justify-center items-center gap-2 mt-8">
                    {currentProjects.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className="h-1.5 rounded-full transition-all duration-300 bg-orange-200" style={{ width: index === currentSlide ? '30px' : '8px', backgroundColor: index === currentSlide ? '#f97316' : '#fed7aa' }} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;