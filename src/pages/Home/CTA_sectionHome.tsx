import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="border-4 border-orange-500 rounded-3xl bg-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl">
          <div className="text-center space-y-8">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Let's Build <span className="text-orange-500">Together</span>
            </h2>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              "They're professional, trustworthy, and creative. With their help, our digital presence has grown stronger, and we've built better connections with our customers."
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="px-10 py-4 bg-orange-500 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-orange-600 transform hover:scale-105 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;