import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Web Application', 'UI/UX'],
    },
    {
      id: 2,
      title: 'Corporate Website',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop',
      tags: ['Web Application', 'UI/UX'],
    },
    {
      id: 3,
      title: 'Portfolio Site',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['Web Application', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['Mobile App', 'UI/UX'],
    },
    {
      id: 5,
      title: 'Food Delivery App',
      description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['Mobile App', 'UI/UX'],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentSlide + i + projects.length) % projects.length;
      visible.push({ ...projects[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Explore our diverse range of projects showcasing our expertise in various domains.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          {/* Desktop/Tablet View */}
          <div className="hidden md:flex items-center justify-center min-h-[500px] perspective-1000">
            {getVisibleProjects().map((project) => {
              const position = project.position;
              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              return (
                <div
                  key={project.id}
                  className={`absolute transition-all duration-500 ease-in-out ${
                    isCenter
                      ? 'z-30 scale-100 opacity-100'
                      : isLeft
                      ? 'z-10 scale-75 opacity-60 -translate-x-[400px]'
                      : 'z-10 scale-75 opacity-60 translate-x-[400px]'
                  }`}
                >
                  <div className="bg-gray-100 rounded-3xl border-4 border-orange-500 overflow-hidden shadow-2xl w-[400px] lg:w-[500px]">
                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 lg:p-8">
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-base mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-xl text-sm font-medium ${
                              index === 0
                                ? 'bg-orange-100 text-orange-500'
                                : 'bg-gray-200 text-gray-700'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View */}
          <div className="md:hidden overflow-hidden">
            <div className="px-4">
              <div className="bg-gray-100 rounded-3xl border-4 border-orange-500 overflow-hidden shadow-2xl">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={projects[currentSlide]?.image}
                    alt={projects[currentSlide]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">
                    {projects[currentSlide]?.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {projects[currentSlide]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[currentSlide]?.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium ${
                          index === 0
                            ? 'bg-orange-100 text-orange-500'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:bg-orange-500 hover:text-white transition-colors z-40 border-2 border-orange-500"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-8 bg-orange-500'
                  : 'w-2 bg-orange-200 hover:bg-orange-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;