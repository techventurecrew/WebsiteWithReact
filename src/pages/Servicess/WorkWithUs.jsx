import React from 'react';
import { motion } from 'framer-motion';

const WorkWithUsBanner = () => {
    return (
        <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-20 mb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-[3rem] mx-4 sm:mx-8">

            {/* Animated Decorative Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700 rounded-full blur-3xl"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Wanna work for us?
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg sm:text-xl text-white mb-10 opacity-95 leading-relaxed font-medium"
                >
                    We partner with businesses that want to grow, innovate, and make an impact.
                    Whether you need a stunning website, a powerful software solution, or a complete digital setup — our team is ready to turn your ideas into reality.
                </motion.p>

                {/* Animated CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = 'hiring'}
                        className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all border-2 border-transparent hover:border-orange-100"
                    >
                        Take a look at our open positions
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WorkWithUsBanner;