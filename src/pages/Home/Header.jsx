import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child element
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="min-h-screen flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 pt-16 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-4 lg:gap-2 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl pt-6 sm:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className="text-black">Transform Your Business with Fast,</span>
                            <br />
                            <span className="text-black decoration-4 underline-offset-8">
                                Affordable IT Solutions
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-orange-500 leading-relaxed max-w-2xl"
                        >
                            Your Trusted Online Partner for complete digital success. Crew Techventure is a leading IT services
                            company in India, delivering end-to-end IT solutions that help small businesses and enterprises thrive
                            online.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button
                                className="group px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold text-lg shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:bg-orange-600 transition-all duration-300 flex items-center gap-2"
                                onClick={() => window.open('https://wa.me/8273943836', '_blank')}
                            >
                                <span>Get Started Today</span>
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    📞
                                </motion.span>
                            </button>

                            <button
                                className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all duration-300"
                                onClick={() => window.location.href = 'about'}
                            >
                                View Our Work
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Lottie Animation */}
                    <motion.div
                        className="flex justify-center lg:justify-end relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative w-[400px] h-[400px] sm:w-[650px] sm:h-[650px] lg:w-[700px] lg:h-[600px] lg:-mr-16">
                            {/* Decorative Background Blur */}
                            <div className="absolute inset-0 bg-orange-200 blur-[100px] rounded-full opacity-40 animate-pulse" />

                            <DotLottieReact
                                src="https://lottie.host/c940d244-17e6-4aac-a312-1e868d4574d5/slnQqb69pS.lottie"
                                loop
                                autoplay
                                className="relative z-10 w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;