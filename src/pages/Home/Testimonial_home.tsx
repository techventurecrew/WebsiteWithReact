import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "They're professional, trustworthy, and creative. With their help, our digital presence has grown stronger, and we've built better connections with our customers.",
      author: "Sachin Goel",
      position: "CEO of Oneness"
    },
    {
      quote: "Working with Crew Tech Venture transformed our business. Their innovative approach and dedication to excellence exceeded all our expectations.",
      author: "Priya Sharma",
      position: "Founder of TechStart"
    },
    {
      quote: "The team delivered exceptional results on time and within budget. Their expertise in modern web development is truly impressive.",
      author: "Rahul Mehta",
      position: "Director of Digital Solutions"
    }
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
        <div className="relative flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8 text-orange-500" />
          </button>

          {/* Testimonial Card */}
          <div className="flex-1 max-w-5xl">
            <div className="border-4 border-orange-500 rounded-3xl p-8 sm:p-12 md:p-16 bg-white shadow-xl transition-all duration-500">
              <div className="text-center space-y-8">
                {/* Quote */}
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 italic leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>

                {/* Author */}
                <div className="pt-6">
                  <p className="text-xl sm:text-2xl font-bold text-gray-900">
                    {testimonials[currentIndex].author}
                    <span className="text-gray-600 font-normal italic">
                      , {testimonials[currentIndex].position}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 hover:bg-gray-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 text-orange-500" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-3 h-3 bg-orange-500'
                  : 'w-3 h-3 bg-gray-300 hover:bg-orange-300'
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