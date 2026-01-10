import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="bg-gray-50 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20,
            duration: 0.8 
          }}
          className="relative border-4 border-orange-500 rounded-[3rem] bg-white px-8 py-12 md:py-20 shadow-2xl shadow-orange-500/10 overflow-hidden"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50" />

          <div className="relative z-10 text-center space-y-10">
            {/* Heading with Pulsing Text */}
            <motion.h2 
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900"
            >
              Let's Build{" "}
              <motion.span 
                animate={{ color: ["#f97316", "#ea580c", "#f97316"] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-orange-500 inline-block"
              >
                Together
              </motion.span>
            </motion.h2>

            {/* Testimonial Quote with Fade In */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-lg sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto italic font-medium"
            >
              "They're professional, trustworthy, and creative. With their help, our digital presence has grown stronger, and we've built better connections with our customers."
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.4)" 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = 'contact'}
                className="group relative px-12 py-5 bg-orange-500 text-white rounded-2xl font-bold text-xl shadow-xl transition-colors duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div 
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;