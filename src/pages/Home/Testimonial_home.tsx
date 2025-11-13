import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "They're professional, trustworthy, and creative. With their help, our digital presence has grown stronger, and we've built better connections with our customers.",
      author: "Sachin Goel",
      position: "CEO of Oneness",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sachin"
    },
    {
      quote: "Working with Crew Tech Venture transformed our business. Their innovative approach and dedication to excellence exceeded all our expectations.",
      author: "Priya Sharma",
      position: "Founder of TechStart",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya"
    },
    {
      quote: "The team delivered exceptional results on time and within budget. Their expertise in modern web development is truly impressive.",
      author: "Rahul Mehta",
      position: "Director of Digital Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold text-lg mb-4 tracking-wide">
            TRUSTED BY BUSINESSES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Our Happy <span className="text-orange-500">Clients</span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 max-w-full md:max-w-5xl">
            <div className="border-4 border-orange-500 rounded-3xl p-6 sm:p-8 md:p-12 bg-white shadow-xl transition-all duration-500">
              <div className="text-center space-y-6 sm:space-y-8">
                {/* Profile Photo */}
                <div className="flex justify-center">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-orange-500 shadow-lg transition-all duration-500"
                  />
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="pt-4 sm:pt-6">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 font-normal italic text-base sm:text-lg md:text-xl mt-1">
                    {testimonials[currentIndex].position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-3 h-3 sm:w-4 sm:h-4 bg-orange-500'
                  : 'w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;