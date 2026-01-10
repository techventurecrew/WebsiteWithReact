import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- Sub-component for the Counting Number ---
const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    { number: 100, suffix: "k+", label: "Lines of codes delivered" },
    { number: 500, suffix: "+", label: "Dev Hours & Counting" },
    { number: 10, suffix: "+", label: "Members in our Team" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 py-24 overflow-hidden">
      {/* Decorative Geometric Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 -top-20 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 -bottom-20 w-80 h-80 bg-orange-700/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="text-center text-white"
            >
              {/* Animated Number */}
              <div className="text-6xl sm:text-7xl font-extrabold tracking-tighter mb-4">
                <Counter value={stat.number} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: (index * 0.2) + 0.5 }}
                className="text-lg sm:text-xl font-semibold opacity-90 uppercase tracking-widest"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto opacity-10" preserveAspectRatio="none">
          <path 
            fill="white" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsSection;