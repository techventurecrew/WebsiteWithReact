import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import { ArrowRight, Monitor, Rocket, Palette, ChevronLeft, ChevronRight, X } from 'lucide-react';

const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const services = [
    {
      icon: <Monitor className="w-16 h-16" />,
      title: "Web Development",
      description: "We build professional, high-performance websites to grow your business online.",
      gradient: 'from-orange-500 to-red-500',
      detailedDescription: 'Our web development services encompass creating modern, responsive, and scalable websites tailored to your business needs. We use cutting-edge technologies and best practices to ensure your online presence stands out and delivers exceptional user experiences.',
      steps: [
        'Discovery & Planning: Understanding your requirements, goals, and target audience',
        'Design & Prototyping: Creating wireframes and visual designs that align with your brand',
        'Development: Building the website with clean, maintainable code using modern frameworks',
        'Testing & QA: Ensuring everything works flawlessly across all devices and browsers',
        'Launch & Deployment: Making your site live with proper hosting and domain setup',
        'Maintenance & Support: Ongoing updates, security patches, and improvements'
      ]
    },
    {
      icon: <Rocket className="w-16 h-16" />,
      title: "Digital Marketing",
      description: 'Reach your target audience with strategic digital marketing campaigns.',
      gradient: 'from-orange-500 to-red-500',
      detailedDescription: 'Amplify your brand reach with data-driven digital marketing strategies. From social media to email campaigns, we create integrated marketing solutions that drive engagement, build brand awareness, and maximize conversions.',
            steps: [
                'Market Research: Understanding your audience, competitors, and opportunities',
                'Strategy Development: Creating a comprehensive multi-channel marketing plan',
                'Campaign Creation: Designing engaging ad content and compelling copy',
                'Multi-Channel Execution: Running campaigns across social, email, and paid ads',
                'A/B Testing: Optimizing campaigns for better performance and ROI',
                'Analytics & Tracking: Measuring engagement, conversions, and revenue',
                'Continuous Optimization: Refining strategies based on data and insights'
            ]
    },
    {
      icon: <Palette className="w-16 h-16" />,
      title: "Graphic Designing",
      description: "We provide professional graphic design services to bring your brand's visual identity to life.",
      gradient: 'from-orange-500 to-red-500',
      detailedDescription: 'Create a lasting impression with stunning visual designs. From logos to marketing materials, we craft compelling graphics that communicate your brand message effectively and beautifully across all mediums.',
      steps: [
        'Brand Discovery: Understanding your vision, values, and target market',
        'Research & Inspiration: Analyzing industry trends and competitor designs',
        'Concept Development: Creating multiple initial design concepts for review',
        'Design Iteration: Refining designs based on your feedback and preferences',
        'Final Artwork: Delivering polished, print-ready, and web-optimized files',
        'Brand Guidelines: Providing comprehensive usage standards and documentation'
      ]
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const handleMoreServices = () => {
    // In your actual code, use: navigate('/services')
    navigate('/services'); // Redirect to the services page
  };

  return (
    <section className="bg-gray-50 ">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-6xl sm:text-5xl font-bold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-lg font-bold text-gray-700 max-w-5xl mx-auto">
            At Crew Tech Venture, we deliver technology-driven solutions that help businesses grow smarter, faster, and more efficiently
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex md:flex-cols-2 items-center justify-center lg:grid-cols-3 gap-8 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" group bg-gray-200 shadow-2xl transition-all duration-300 overflow-hidden rounded-3xl transform hover:-translate-y-2 relative h-[400px] w-[350px]"
            >
              {/* Icon Header with Gradient */}
              <div className={`bg-gradient-to-br ${service.gradient} p-8 flex items-center justify-center rounded-t-3xl shadow-xl`}>
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
                <button
                  onClick={() => setSelectedService(service)}
                  className=" px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm">
              <div
                className="group bg-gray-200 transition-all duration-300 overflow-hidden rounded-t-3xl relative h-[450px] w-full"
              >
                {/* Icon Header with Gradient */}
                <div className={`bg-gradient-to-br ${services[currentIndex].gradient} p-8 flex items-center justify-center rounded-t-3xl shadow-xl`}>
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
                  <button
                    onClick={() => setSelectedService(services[currentIndex])}
                    className="inline-flex items-center px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Services Button */}
        <div className="text-center mt-6">
          <button
            onClick={handleMoreServices}
            className="inline-flex items-center gap-2 px-8 py-2 border-2 border-orange-500 text-orange-500 rounded-xl font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group"
          >
            More services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            {/* Modal Header */}
            <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative rounded-t-2xl`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <div className="flex items-center gap-4">
                <div className="text-white">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Detailed Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  About This Service
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedService.detailedDescription}
                </p>
              </div>

              {/* Steps */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {selectedService.steps.map((step, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 items-start group"
                    >
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 leading-relaxed group-hover:text-orange-600 transition-colors duration-300">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button 
                                                    onClick={() => navigate('/contact')} // Navigate to contact form

                  className={`w-full bg-gradient-to-br ${selectedService.gradient} text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                >
                  Get Started with {selectedService.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;