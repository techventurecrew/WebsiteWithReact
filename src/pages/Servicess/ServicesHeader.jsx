import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const ServicesHeaderSection = () => {
    // Animation Variants for the content block
    const textContainerVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-transparent mt-24 py-18 px-2 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-8xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-4 items-center">

                    {/* Left Side - Content */}
                    <motion.div
                        className="space-y-6 mx-10"
                        variants={textContainerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Heading with Hover Effect */}
                        <motion.h1
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight cursor-default"
                        >
                            Our <span className="text-orange-500 drop-shadow-sm">Services</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="sm:text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed"
                        >
                            At <span className="text-orange-600">Crew Techventure</span>, we provide modern, reliable, and scalable digital solutions designed to help businesses grow online.
                            From websites to custom software, graphics, branding, and data analytics — we build everything with precision, creativity, and purpose.
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="sm:text-lg md:text-xl text-gray-600 italic border-l-4 border-orange-500 pl-4"
                        >
                            Our goal is simple: to help your business stand out, attract customers, and operate smarter in today’s digital world.
                        </motion.p>
                    </motion.div>

                    {/* Right Side - Lottie Animation */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="relative w-[400px] h-[500px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">
                            {/* Ambient background glow for the animation */}
                            <div className="absolute inset-0 bg-orange-100/30 blur-[100px] rounded-full" />

                            <DotLottieReact
                                src="https://lottie.host/2a738bfb-b4ca-40b8-aa82-c24ff5ad8ea3/nzfooyJKLz.lottie"
                                loop
                                autoplay
                                className="h-[400px] relative z-10"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServicesHeaderSection;