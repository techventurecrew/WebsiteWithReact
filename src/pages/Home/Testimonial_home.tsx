import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      quote: "They're professional, trustworthy, and creative. With their help, our digital presence has grown stronger, and we've built better connections with our customers.",
      author: "Sachin Goel",
      position: "CEO of Oneness",
      image: "/Images/male-profile.jpg",
    },
    {
      quote: "Working with Crew Tech Venture transformed our business. Their innovative approach and dedication to excellence exceeded all our expectations.",
      author: "Priya Sharma",
      position: "Founder of TechStart",
      image: "/Images/female-profile.jpg",
    },
    {
      quote: "The team delivered exceptional results on time and within budget. Their expertise in modern web development is truly impressive.",
      author: "Rahul Mehta",
      position: "Director of Digital Solutions",
      image: "/Images/male-profile.jpg",
    },
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    })
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Automatic Slide Logic
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="bg-white py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-orange-500 font-extrabold text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
            Trusted by Businesses
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Our Happy <span className="text-orange-500">Clients</span>
          </h2>
        </motion.div>
 
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons - Hidden on Mobile */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 lg:-left-24 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white shadow-xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all border border-orange-100 hidden lg:flex"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 lg:-right-24 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full bg-white shadow-xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all border border-orange-100 hidden lg:flex"
          >
            <ChevronRight size={28} />
          </button>

          {/* Testimonial Card Container */}
          {/* Use grid to keep a consistent height based on the largest content */}
          <div className="relative overflow-visible min-h-[400px] sm:min-h-[380px] md:min-h-[420px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="w-full"
              >
                <div className="border-[2px] md:border-[3px] border-orange-500 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 bg-white shadow-2xl shadow-orange-500/5 relative flex flex-col items-center text-center mx-auto">
                  
                  {/* Decorative Quote Icon - Resized for Mobile */}
                  <Quote className="absolute top-4 left-4 md:top-8 md:left-8 text-orange-100 w-10 h-10 md:w-16 md:h-16" />

                  {/* Profile Photo */}
                  <div className="relative mb-6 md:mb-8">
                    <motion.div 
                      animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.2, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-orange-500"
                    />
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="relative w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>

                  {/* Quote Text - Responsive Font Sizes */}
                  <div className="flex-grow flex items-center">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-700 italic font-medium leading-relaxed mb-6">
                      "{testimonials[currentIndex].quote}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="mt-auto">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-orange-500 font-semibold uppercase tracking-wider text-[10px] md:text-xs mt-1">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Responsive Pagination Bars */}
        <div className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="py-2"
            >
              <motion.div
                animate={{ 
                  width: currentIndex === index ? (window.innerWidth < 768 ? 30 : 40) : 10,
                  backgroundColor: currentIndex === index ? "#f97316" : "#e5e7eb"
                }}
                className="h-1.5 md:h-2 rounded-full transition-all duration-300"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;