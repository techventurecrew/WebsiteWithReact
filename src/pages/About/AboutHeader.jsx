import React from 'react';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const AboutSection = () => {
    // Animation Variants
    const fadeInSide = (direction) => ({
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -60 : 60
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-transparent overflow-hidden">
            {/* New Tech-Theme Header (Replaces the Wave) */}
            <div className="relative bg-gradient-to-br from-orange-600 to-orange-400 py-20 px-4">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInSide('left')}
                        className="text-white z-10"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Building the <br />
                            <span className="text-orange-900">Digital Future</span>
                        </h1>
                        <p className="text-xl opacity-90 font-medium max-w-lg">
                            We are a collective of creators, thinkers, and builders dedicated to
                            transforming traditional businesses into digital powerhouses.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="flex justify-center lg:justify-end"
                    >
                        {/* High-tech Lottie instead of a wave image */}
                        <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-[3rem] p-8 border border-white/20 shadow-2xl">
                            <DotLottieReact
                                src="https://lottie.host/4612e36b-67a4-4458-9411-9a7995167b6a/9P3S3G8Xm4.lottie"
                                loop
                                autoplay
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Bottom Curve to transition to content */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="relative block w-full h-20">
                        <path d="M0,120 C480,120 960,0 1440,0 L1440,120 L0,120 Z" fill="#F9FAFB"></path>
                    </svg>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left Side - Catchy Heading */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInSide('left')}
                        >
                            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight border-l-8 border-orange-500 pl-8">
                                We bridge the gap between <span className="text-orange-500">Traditional Business</span> and Modern Technology.
                            </h2>
                        </motion.div>

                        {/* Right Side - About Content */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={containerVariants}
                            className="space-y-8"
                        >
                            <motion.h3 variants={fadeInUp} className="text-4xl font-extrabold text-gray-900">
                                About <span className="text-orange-500 underline decoration-4 underline-offset-8">Crewtechventure</span>
                            </motion.h3>

                            <motion.div variants={fadeInUp} className="space-y-6 text-lg text-gray-700 font-medium leading-relaxed">
                                <p>
                                    Crew Techventure is dedicated to empowering businesses of all sizes by helping them build, grow, and
                                    strengthen their online presence. As a leading technology solutions company in India, we understand
                                    that in today's digital world, visibility and professionalism are essential for success.
                                </p>

                                <div className="p-6 bg-orange-500 text-white rounded-3xl shadow-lg transform -rotate-1">
                                    <p className="font-bold">
                                        "We're more than just a service provider—we're your trusted IT partner."
                                    </p>
                                </div>

                                <p>
                                    Our mission is simple: deliver reliable and affordable digital solutions that help small businesses and enterprises
                                    upgrade from traditional operations to fully digital, high-impact systems. Whether it's a website,
                                    software, mobile app, or branding, our goal is to ensure you grow confidently in the online marketplace.
                                </p>

                                <p className="text-orange-600 font-bold border-t-2 border-orange-100 pt-6">
                                    At Crew Techventure, we believe great technology shouldn't break the bank.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Internal variants for staggering the right-side text
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

export default AboutSection;