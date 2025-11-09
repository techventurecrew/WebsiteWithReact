import React, { useState } from 'react';
import { ArrowRight, Monitor, Rocket, Palette, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="w-16 h-16" />,
      title: "Web Development",
      description: "We build professional, high-performance websites to grow your business online.",
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "App Development",
      description: "We design and build intuitive mobile apps for iOS, Android, and cross-platform needs.",
    },
    {
      icon: <Palette className="w-16 h-16" />,
      title: "Graphic Designing",
      description: "We provide professional graphic design services to bring your brand's visual identity to life.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-6xl sm:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg font-bold text-gray-700 max-w-5xl mx-auto">
            At Crew Tech Venture, we deliver technology-driven solutions that help businesses grow smarter, faster, and more efficiently
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-angled group bg-[#E4E4E4] transition-all duration-300 overflow-hidden rounded-t-[2rem] inset-shadow-3xl transform hover:-translate-y-2 relative h-[450px] w-[350px] backdrop-blur-xl"
            >
              {/* Icon Header with Gradient */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 flex items-center justify-center rounded-t-[2rem] shadow-xl backdrop-blur-xl">
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed text-center">
                  {service.description}
                </p>
                <button className="inline-flex items-center px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="w-full max-w-sm">
              <div className="card-angled group bg-[#E4E4E4] transition-all duration-300 overflow-hidden rounded-t-[2rem] inset-shadow-3xl relative h-[450px] w-full backdrop-blur-xl">
                {/* Icon Header with Gradient */}
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 flex items-center justify-center rounded-t-[2rem] shadow-xl backdrop-blur-xl">
                  <div className="text-white">
                    {services[currentIndex].icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex flex-col items-center">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {services[currentIndex].title}
                  </h3>
                  <p className="text-black leading-relaxed text-center">
                    {services[currentIndex].description}
                  </p>
                  <button className="inline-flex items-center px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* More Services Button */}
        <div className="text-center mt-6">
          <button className="inline-flex items-center gap-2 px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group">
            More services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;