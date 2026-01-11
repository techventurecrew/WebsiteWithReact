import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { ArrowRight, Monitor, Rocket, Palette, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <Monitor className="w-16 h-16" />,
      title: "Web Development",
      description: "We build professional, high-performance websites to grow your business online.",
      gradient: 'from-orange-500 to-red-500',
      detailedDescription: 'Our web development services encompass creating modern, responsive, and scalable websites tailored to your business needs.',
      steps: [
        'Discovery & Planning: Understanding your requirements',
        'Design & Prototyping: Creating wireframes',
        'Development: Building with clean code',
        'Testing & QA: Ensuring flawless performance',
        'Launch & Deployment: Making your site live',
        'Maintenance: Ongoing updates'
      ]
    },
    // ... rest of your digital marketing and graphic design objects
    {
        icon: <Rocket className="w-16 h-16" />,
        title: "Digital Marketing",
        description: 'Reach your target audience with strategic digital marketing campaigns.',
        gradient: 'from-orange-500 to-red-500',
        detailedDescription: 'Amplify your brand reach with data-driven digital marketing strategies.',
        steps: ['Market Research', 'Strategy Development', 'Campaign Creation', 'Execution', 'A/B Testing', 'Analytics', 'Optimization']
    },
    {
        icon: <Palette className="w-16 h-16" />,
        title: "Graphic Designing",
        description: "We provide professional graphic design services to bring your brand's visual identity to life.",
        gradient: 'from-orange-500 to-red-500',
        detailedDescription: 'Create a lasting impression with stunning visual designs.',
        steps: ['Brand Discovery', 'Research', 'Concept Development', 'Iteration', 'Final Artwork', 'Brand Guidelines']
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  return (
    <section className="bg-gray-50 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Animated */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
            Everything You Need to Succeed Online
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            We're more than just a service provider—we're your growth partner.
          </p>
        </motion.div>

        {/* Desktop View - Staggered Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden md:flex flex-wrap justify-center gap-8 mb-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-white shadow-xl rounded-3xl overflow-hidden w-[350px] relative border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-10 flex items-center justify-center`}>
                <motion.div 
                   whileHover={{ scale: 1.2, rotate: 5 }}
                   className="text-white"
                >
                  {service.icon}
                </motion.div>
              </div>

              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 min-h-[60px]">{service.description}</p>
                <button
                  onClick={() => setSelectedService(service)}
                  className="px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View - Slide Animation */}
        <div className="md:hidden relative px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${services[currentIndex].gradient} p-8 flex items-center justify-center`}>
                <div className="text-white">{services[currentIndex].icon}</div>
              </div>
              <div className="p-8 text-center pb-20">
                <h3 className="text-2xl font-bold mb-4">{services[currentIndex].title}</h3>
                <p className="text-gray-600 mb-6">{services[currentIndex].description}</p>
                <button
                  onClick={() => setSelectedService(services[currentIndex])}
                  className="px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-bold"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Mobile Nav */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-6">
            <button onClick={prevSlide} className="bg-orange-500 text-white p-3 rounded-full shadow-lg"><ChevronLeft /></button>
            <button onClick={nextSlide} className="bg-orange-500 text-white p-3 rounded-full shadow-lg"><ChevronRight /></button>
          </div>
        </div>

        {/* Footer Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate('/services')}
            className="group inline-flex items-center gap-3 px-10 py-3 border-2 border-orange-500 text-orange-500 rounded-full font-bold text-lg hover:bg-orange-500 hover:text-white transition-all"
          >
            More services <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Modal Popup - Animated with AnimatePresence */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-[1000] flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal UI same as your original, but now wrapped in motion */}
              <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative`}>
                <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 text-white hover:rotate-90 transition-transform"><X size={32}/></button>
                <div className="flex items-center gap-5 text-white">
                  {selectedService.icon}
                  <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                </div>
              </div>
              <div className="p-8 overflow-y-auto max-h-[60vh]">
                <h3 className="text-xl font-bold mb-3">About This Service</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{selectedService.detailedDescription}</p>
                <h3 className="text-xl font-bold mb-4">Our Process</h3>
                <div className="grid gap-4">
                  {selectedService.steps.map((step, i) => (
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      key={i} 
                      className="flex gap-4 items-center group"
                    >
                      <span className={`w-8 h-8 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{i+1}</span>
                      <p className="text-gray-700 group-hover:text-orange-500 transition-colors">{step}</p>
                    </motion.div>
                  ))}
                </div>
                <button 
                  onClick={() => navigate('/contact')}
                  className={`w-full mt-8 bg-gradient-to-br ${selectedService.gradient} text-white font-bold py-4 rounded-2xl hover:scale-[1.02] transition-transform`}
                >
                  Get Started with {selectedService.title}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;