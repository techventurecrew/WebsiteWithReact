import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
            { id: 1, title: 'E-Commerce Platform', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] },
            { id: 2, title: 'Corporate Website', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] },
            { id: 3, title: 'Portfolio Site', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] }
        ],
        'App Development': [
            { id: 4, title: 'Fitness Tracking App', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', tags: ['Mobile App', 'UI/UX'] },
            { id: 5, title: 'Food Delivery App', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', tags: ['Mobile App', 'UI/UX'] },
            { id: 6, title: 'Social Media App', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop', tags: ['Mobile App', 'UI/UX'] }
        ],
        'Data Analysis': [
            { id: 7, title: 'Sales Dashboard', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', tags: ['Analytics', 'Visualization'] },
            { id: 8, title: 'Market Research', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', tags: ['Analytics', 'Reports'] },
            { id: 9, title: 'Customer Insights', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop', tags: ['Analytics', 'Data Mining'] }
        ],
        'Graphic Designing': [
            { id: 10, title: 'Brand Identity', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', tags: ['Branding', 'Logo Design'] },
            { id: 11, title: 'Marketing Materials', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop', tags: ['Print Design', 'Graphics'] },
            { id: 12, title: 'Social Media Graphics', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop', tags: ['Digital Design', 'Graphics'] }
        ],
        'SEO Handeling': [
            { id: 13, title: 'Website Optimization', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=600&fit=crop', tags: ['SEO', 'Optimization'] },
            { id: 14, title: 'Content Strategy', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop', tags: ['SEO', 'Content'] },
            { id: 15, title: 'Link Building', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop', tags: ['SEO', 'Marketing'] }
        ]
    };

    const currentProjects = projects[activeCategory] || [];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % currentProjects.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);

    const getVisibleProjects = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentSlide + i + currentProjects.length) % currentProjects.length;
            visible.push({ ...currentProjects[index], position: i });
        }
        return visible;
    };

    return (
        <section className="bg-transparent py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header - Staggered entrance */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl sm:text-7xl font-extrabold mb-4">
                        Our <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium">
                        At Crew Techventure, every project is designed to help businesses move confidently into the digital world by combining clean design and robust technology.
                    </p>
                </motion.div>

                {/* Category Tabs - Floating Layout */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveCategory(category);
                                setCurrentSlide(0);
                            }}
                            className={`relative px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === category
                                ? 'text-white'
                                : 'text-orange-500 border-2 border-orange-500 hover:bg-orange-50'
                                }`}
                        >
                            <span className="relative z-10">{category}</span>
                            {activeCategory === category && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/30"
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* 3D Projects Carousel */}
                <div className="relative h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-[500px] h-full flex items-center justify-center [perspective:1200px]">
                        <AnimatePresence mode="popLayout">
                            {getVisibleProjects().map((project) => {
                                const isCenter = project.position === 0;
                                return (
                                    <motion.div
                                        key={`${activeCategory}-${project.id}`}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8, x: project.position * 400 }}
                                        animate={{
                                            opacity: isCenter ? 1 : 0.5,
                                            scale: isCenter ? 1 : 0.8,
                                            x: project.position * 380,
                                            rotateY: project.position * -25,
                                            z: isCenter ? 0 : -200,
                                            zIndex: isCenter ? 30 : 10,
                                        }}
                                        exit={{ opacity: 0, scale: 0.5, x: project.position * 400 }}
                                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                        className="absolute w-full"
                                    >
                                        <div className={`bg-white rounded-[2.5rem] border-4 ${isCenter ? 'border-orange-500 shadow-2xl shadow-orange-500/20' : 'border-gray-200'} overflow-hidden`}>
                                            <div className="h-64 overflow-hidden relative group">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                    {/* <span className="text-white font-bold">View Case Study →</span> */}
                                                </div>
                                            </div>

                                            <div className="p-8">
                                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                                <p className="text-gray-500 mb-6 text-sm leading-relaxed">{project.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag, i) => (
                                                        <span key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold ${i === 0 ? 'bg-orange-100 text-orange-500' : 'bg-gray-100 text-gray-600'}`}>
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

                    {/* Navigation Buttons */}
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className="absolute left-0 md:left-4 z-40 w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 shadow-xl">
                        <ChevronLeft size={30} />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className="absolute right-0 md:right-4 z-40 w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 shadow-xl">
                        <ChevronRight size={30} />
                    </motion.button>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center items-center gap-3 mt-10">
                    {currentProjects.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className="group py-2">
                            <motion.div
                                animate={{
                                    width: index === currentSlide ? 40 : 12,
                                    backgroundColor: index === currentSlide ? "#f97316" : "#fed7aa"
                                }}
                                className="h-2 rounded-full transition-all duration-300"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;