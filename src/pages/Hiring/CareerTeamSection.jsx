import React from 'react';
import { motion } from 'framer-motion';

const CareerTeamSection = () => {
    // Animation Variants
    const bannerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.8 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-transparent overflow-hidden">
            {/* 1. Dynamic Career Banner */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={bannerVariants}
                className="bg-gradient-to-br from-orange-500 to-orange-600 py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden rounded-b-[4rem] mx-2 sm:mx-4 shadow-2xl shadow-orange-500/20"
            >
                {/* Animated Background Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                />
                <div className="absolute bottom-0 right-0 w-full h-32 bg-orange-400/20 transform skew-y-3 translate-y-10"></div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
                    >
                        Career
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Join a team that values creativity, innovation, and collaboration.
                        We're always looking for talented individuals who share our passion for digital excellence.
                    </motion.p>
                </div>
            </motion.div>

            {/* 2. Meet the Team Intro */}
            <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        {/* Left Side - Animated Heading */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900">
                                Meet the team
                                <br />
                                <span className="text-orange-500 relative">
                                    behind our success
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ delay: 0.5, duration: 0.8 }}
                                        className="absolute -bottom-2 left-0 h-2 bg-orange-500/20 rounded-full"
                                    />
                                </span>
                            </h2>
                        </motion.div>

                        {/* Right Side - Description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed italic border-l-4 border-orange-500 pl-6">
                                We believe that great work comes from a culture of shared growth and transparency.
                                Our mission is to transform ideas into digital reality through the collective strength of our experts.
                            </p>
                        </motion.div>
                    </div>

                    {/* 3. Team Hero Image with Floating Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-orange-500/5 rounded-[3rem] blur-2xl group-hover:bg-orange-500/10 transition-all duration-700" />
                        <div className="w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white relative">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=700&fit=crop"
                                alt="Team working together"
                                className="w-full h-[500px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            {/* Overlay Badge */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-orange-100 hidden md:block"
                            >
                                <p className="text-orange-500 font-black text-2xl tracking-tighter">10+ CREW MEMBERS</p>
                                <p className="text-gray-500 font-bold">Collaborating Daily</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CareerTeamSection;