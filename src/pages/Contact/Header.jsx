import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <section className="bg-transparent py-20 mt-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Heading with Spring Motion */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 tracking-tight text-gray-900"
                    >
                        Contact <span className="text-orange-500 relative inline-block">
                            Us
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="absolute -bottom-2 left-0 h-1.5 bg-orange-500/30 rounded-full"
                            />
                        </span>
                    </motion.h2>

                    {/* Description - Focused & Balanced */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed max-w-4xl mx-auto"
                    >
                        <span className="text-orange-600">Crew Techventure</span> partners with local businesses, startups, and growing enterprises to turn ideas into powerful digital solutions.
                        Share your requirements, and the team will help you choose the right mix of websites, apps, branding, and analytics to strengthen your online presence.
                    </motion.p>

                    {/* Decorative Element to lead into the form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="mt-12 flex justify-center"
                    >
                        <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Header;