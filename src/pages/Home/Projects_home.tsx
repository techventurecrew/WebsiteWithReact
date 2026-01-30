import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated projects array with your uploaded designs
  const projects = [
    { 
      id: 1, 
      title: 'Logo Identity Design', 
      description: 'Modern and tech-driven visual identity for CrewTechventure.', 
      image: '/Images/project_5.png', // Replace with your actual path for image_54597e.png
      tags: ['Branding', 'Logo Design'] 
    },
    { 
      id: 2, 
      title: 'Premium Coffee Branding', 
      description: 'Elegant packaging and poster design for Rèel Premium Coffee.', 
      image: '/Images/project_3.png', // Replace with your actual path for image (6).jpg
      tags: ['Poster Design', 'Packaging'] 
    },
    { 
      id: 3, 
      title: 'MEGAMERE Fragrance', 
      description: 'High-end product visualization with refreshing citrus and aquatic themes.', 
      image: '/Images/project_2.png', // Replace with your actual path for unnamed (1).jpg
      tags: ['Product Design', 'Visuals'] 
    },
    { 
      id: 4, 
      title: 'STELLA Mint Essence', 
      description: 'Clean and vibrant product presentation for premium mint fragrances.', 
      image: '/Images/project_1.png', // Replace with your actual path for unnamed (3).jpg
      tags: ['Visual Arts', 'UI/UX'] 
    },
    { 
      id: 5, 
      title: 'Tech Gadget Launch', 
      description: 'Sleek headphone packaging design with "Try It" interactive concept.', 
      image: '/Images/project_4.png', // Replace with your actual path for image (2).jpg
      tags: ['Marketing', 'Product Design'] 
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentSlide + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Our <span className="text-orange-500">Creative</span> Work
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-4">Design That Speaks Louder</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From iconic logos to stunning product visualizations, we bring brands to life 
            through meticulous design and creative storytelling.
          </p>
        </motion.div>

        {/* 3D Projects Carousel */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-[500px] h-full flex items-center justify-center [perspective:1200px]">
            <AnimatePresence mode="popLayout">
              {getVisibleProjects().map((project) => {
                const isCenter = project.position === 0;
                
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isCenter ? 1 : 0.6,
                      scale: isCenter ? 1 : 0.8,
                      x: project.position * 350, 
                      rotateY: project.position * -25,
                      z: isCenter ? 0 : -200,
                      zIndex: isCenter ? 30 : 10,
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="absolute w-full"
                  >
                    <motion.div 
                      className={`bg-gray-50 rounded-[2.5rem] border-4 ${isCenter ? 'border-orange-500 shadow-2xl shadow-orange-500/20' : 'border-gray-200'} overflow-hidden transition-colors duration-500`}
                    >
                      <div className="h-64 md:h-80 overflow-hidden relative group bg-gray-200 flex items-center justify-center">
  {/* Background Blur Effect (Optional: poster ke piche halka sa blur dikhega) */}
  <img 
    src={project.image} 
    alt="" 
    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-30 scale-110" 
  />

  {/* Main Image - Using object-contain to show full poster */}
  <img 
    src={project.image} 
    alt={project.title} 
    className="relative z-10 max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
  />
  
  <div className="absolute inset-0 z-20 bg-black/5 group-hover:bg-black/0 transition-colors" />
</div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <span key={i} className={`px-4 py-1.5 rounded-full text-xs font-bold ${i === 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Nav Buttons */}
          <button 
            onClick={prevSlide} 
            className="hidden md:flex absolute left-0 md:left-10 z-50 w-14 h-14 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-xl"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={nextSlide} 
            className="hidden md:flex absolute right-0 md:right-10 z-50 w-14 h-14 bg-white border-2 border-orange-500 rounded-full items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-xl"
          >
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center gap-3 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-4 flex items-center"
            >
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