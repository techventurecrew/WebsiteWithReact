import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

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
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9
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

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Animated Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-orange-500 font-extrabold text-sm tracking-[0.2em] uppercase mb-4">
            Trusted by Businesses
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Our Happy <span className="text-orange-500">Clients</span>
          </h2>
        </motion.div>
 
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all border border-orange-100 hidden sm:flex"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white shadow-xl text-orange-500 hover:bg-orange-500 hover:text-white transition-all border border-orange-100 hidden sm:flex"
          >
            <ChevronRight size={32} />
          </button>

          {/* Testimonial Card Container */}
          <div className="relative min-h-[450px] md:min-h-[400px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 }
                }}
                className="absolute inset-0"
              >
                <div className="h-full border-[3px] border-orange-500 rounded-[2.5rem] p-8 md:p-16 bg-white shadow-2xl shadow-orange-500/5 relative flex flex-col items-center text-center">
                  
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-8 left-8 text-orange-100 w-16 h-16 -z-0" />

                  {/* Profile Photo with Animated Ring */}
                  <div className="relative mb-8">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-orange-500"
                    />
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>

                  {/* Quote Text */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed mb-4 relative z-10"
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.p>

                  {/* Author Details */}
                  <div className="mt-auto">
                    <h4 className="text-2xl font-bold text-gray-900">{testimonials[currentIndex].author}</h4>
                    <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm mt-1">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Custom Pagination Bars */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className="group py-4"
            >
              <motion.div
                animate={{ 
                  width: currentIndex === index ? 40 : 12,
                  backgroundColor: currentIndex === index ? "#f97316" : "#e5e7eb"
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

export default TestimonialsSection;