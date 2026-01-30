import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('Graphic Designing'); // Default category set to your work
    const [currentSlide, setCurrentSlide] = useState(0);

    const categories = [
        'Web Development',
        'App Development',
        'Graphic Designing',
        'SEO Handeling'
    ];

    const projects = {
        'Graphic Designing': [
            {
                id: 10,
                title: 'Crew Brand Identity',
                description: 'Complete visual identity including logo and brand colors.',
                image: '/Images/project_5.png', // Image_54597e.png
                tags: ['Branding', 'Logo']
            },
            {
                id: 11,
                title: 'Rèel Coffee Poster',
                description: 'Premium coffee packaging and promotional poster design.',
                image: '/Images/project_3.png', // image (6).jpg
                tags: ['Poster', 'Marketing']
            },
            {
                id: 12,
                title: 'Megamere Product Visualization',
                description: 'Creative product shoot and edit for luxury fragrance.',
                image: '/Images/project_2.png', // unnamed (1).jpg
                tags: ['Product Design', 'Visuals']
            },
            {
                id: 13,
                title: 'Stella Essence',
                description: 'Minimalist and refreshing aesthetic for perfume branding.',
                image: '/Images/project_1.png', // unnamed (3).jpg
                tags: ['Digital Art', 'Graphics']
            },
            {
                id: 14,
                title: 'Tech Gadget Launch',
                description: 'Packaging concept for high-end audio devices.',
                image: '/Images/project_4.png', // image (2).jpg
                tags: ['Packaging', '3D Concept']
            }
        ],
        'Web Development': [
            { id: 1, title: 'E-Commerce Platform', description: 'Seamless shopping experience.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', tags: ['Web', 'UI/UX'] },
            { id: 2, title: 'Corporate Portal', description: 'Enterprise level solutions.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800', tags: ['Business', 'React'] }
        ],
        // ... Baki categories ke liye bhi aap aise hi images add kar sakte ho
    };

    const currentProjects = projects[activeCategory] || [];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % currentProjects.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);

    useEffect(() => {
        if (currentProjects.length <= 1) return;
        const autoPlay = setInterval(() => { nextSlide(); }, 4000);
        return () => clearInterval(autoPlay);
    }, [currentSlide, activeCategory]);

    const getVisibleProjects = () => {
        const visible = [];
        if (currentProjects.length === 0) return [];
        // Handle single project case
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
                        Our <span className="text-orange-500">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-medium">
                        Creative solutions across various domains, tailored for digital excellence.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => { setActiveCategory(category); setCurrentSlide(0); }}
                            className={`relative px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${activeCategory === category ? 'text-white' : 'text-orange-500 border-2 border-orange-500 hover:bg-orange-50'}`}
                        >
                            <span className="relative z-10">{category}</span>
                            {activeCategory === category && (
                                <motion.div layoutId="activePill" className="absolute inset-0 bg-orange-500 rounded-full shadow-lg shadow-orange-500/30" />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Carousel Area */}
                <div className="relative h-[550px] flex items-center justify-center">
                    <div className="relative w-full max-w-[450px] h-full flex items-center justify-center [perspective:1200px]">
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

                                            {/* Image Container with No-Crop Logic */}
                                            <div className="h-64 bg-gray-50 flex items-center justify-center relative overflow-hidden group">
                                                {/* Blur Background */}
                                                <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 scale-125" />

                                                {/* Main Poster (Full View) */}
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="relative z-10 max-w-full max-h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>

                                            <div className="p-6">
                                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
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

                    {/* Nav Buttons */}
                    <button onClick={prevSlide} className="hidden md:flex absolute left-4 z-40 w-12 h-12 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="hidden md:flex absolute right-4 z-40 w-12 h-12 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators */}
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