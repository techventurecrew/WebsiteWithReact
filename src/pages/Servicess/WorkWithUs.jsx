import React from 'react';

const WorkWithUsBanner = () => {
    return (
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16 mb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700 rounded-full opacity-20 blur-3xl"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                    Wanna work for us?..
                </h2>

                {/* Description */}
                <p className="text-base sm:text-lg text-white mb-8 opacity-95 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi., mattis
                    ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus..
                </p>

                {/* Call to Action Button */}
                <button
                    onClick={() => window.location.href = 'hiring'}
                    className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    Take a look at our open positions
                </button>
            </div>
        </section>
    );
};

export default WorkWithUsBanner;