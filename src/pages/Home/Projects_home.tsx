import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    { id: 1, title: 'E-Commerce Platform', description: 'Innovative shopping experience with seamless payments.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] },
    { id: 2, title: 'Corporate Website', description: 'Professional digital presence for global enterprises.', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] },
    { id: 3, title: 'Portfolio Site', description: 'Creative showcase for artists and developers.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop', tags: ['Web Application', 'UI/UX'] },
    { id: 4, title: 'Fitness Tracking App', description: 'Real-time health monitoring and workout plans.', image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop', tags: ['Mobile App', 'UI/UX'] },
    { id: 5, title: 'Food Delivery App', description: 'Fast and reliable local food delivery solution.', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', tags: ['Mobile App', 'UI/UX'] },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % projects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentSlide + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - Animated Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            Our <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-2xl font-semibold text-gray-800 mb-4">Our Work Speaks for Itself</p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From innovative web platforms to results-driven marketing campaigns, 
            we turn your vision into digital reality.
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
                      x: project.position * 350, // Distance from center
                      rotateY: project.position * -25, // 3D rotation
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
                      <div className="h-64 overflow-hidden relative group">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
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
          <button onClick={prevSlide} className="absolute left-0 md:left-10 z-50 w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-xl">
            <ChevronLeft size={30} />
          </button>
          <button onClick={nextSlide} className="absolute right-0 md:right-10 z-50 w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-xl">
            <ChevronRight size={30} />
          </button>
        </div>

        {/* Interactive Progress Bar */}
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