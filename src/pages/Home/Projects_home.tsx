import React, { useState } from 'react';

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["Web Technology", "UI/UX"]
    },
    {
      id: 2,
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 3,
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 4,
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 5,
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 6,
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 7,
      title: "Project 7",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 8,
      title: "Project 8",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 9,
      title: "Project 9",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    },
    {
      id: 10,
      title: "Project 10",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      tags: ["Web Application", "UI/UX"]
    }

  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Smart Code. <span className="text-orange-500">Real Results.</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our innovative solutions and cutting-edge projects that showcase our expertise in modern development.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            {/* Left Card (Previous) */}
            <div 
              className="hidden lg:block w-80 opacity-60 transform scale-90 transition-all duration-500 cursor-pointer hover:opacity-80"
              onClick={() => setCurrentSlide(currentSlide === 0 ? projects.length - 1 : currentSlide - 1)}
            >
              <div className="bg-white border-4 border-orange-500 rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {projects[currentSlide === 0 ? projects.length - 1 : currentSlide - 1].title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {projects[currentSlide === 0 ? projects.length - 1 : currentSlide - 1].description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {projects[currentSlide === 0 ? projects.length - 1 : currentSlide - 1].tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          idx === 0 
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

            {/* Center Card (Current) */}
            <div className="w-full max-w-2xl transform scale-100 transition-all duration-500 z-10">
              <div className="bg-white border-4 border-orange-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-gray-300 h-64 sm:h-80"></div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-3">
                    {projects[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {projects[currentSlide].description}
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {projects[currentSlide].tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          idx === 0 
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

            {/* Right Card (Next) */}
            <div 
              className="hidden lg:block w-80 opacity-60 transform scale-90 transition-all duration-500 cursor-pointer hover:opacity-80"
              onClick={() => setCurrentSlide((currentSlide + 1) % projects.length)}
            >
              <div className="bg-white border-4 border-orange-500 rounded-3xl overflow-hidden shadow-xl">
                <div className="bg-gray-300 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {projects[(currentSlide + 1) % projects.length].title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {projects[(currentSlide + 1) % projects.length].description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {projects[(currentSlide + 1) % projects.length].tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          idx === 0 
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

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-12 h-3 bg-orange-500'
                    : 'w-3 h-3 bg-orange-300 hover:bg-orange-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;