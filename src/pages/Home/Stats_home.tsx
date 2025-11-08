import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 100,
      suffix: "k+",
      label: "Lines of codes delivered"
    },
    {
      number: 500,
      suffix: "+",
      label: "Dev Hours & Counting"
    },
    {
      number: 10,
      suffix: "+",
      label: "Members in our Team"
    }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(
            Math.round(increment * currentStep),
            stat.number
          );
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-20 overflow-hidden"
    >
      {/* Decorative Geometric Shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute right-0 top-0 w-96 h-96 bg-orange-400 rounded-full transform translate-x-1/2 -translate-y-1/4"></div>
          <div className="absolute right-20 bottom-0 w-80 h-80 bg-orange-700 rounded-full transform translate-y-1/4"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center text-white space-y-4 transform transition-all duration-700 hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Number */}
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold">
                {counts[index]}{stat.suffix}
              </div>
              
              {/* Label */}
              <p className="text-xl sm:text-2xl font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsSection;