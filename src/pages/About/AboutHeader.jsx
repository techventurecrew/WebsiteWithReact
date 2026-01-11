import React from 'react';
import { motion } from 'framer-motion';

const AboutHeader = () => {
    return (
        <section className="bg-transparent pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Brand Story Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-block px-4 py-2 bg-orange-100 rounded-xl">
                            <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Our Identity</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                            A Crew Driven by <span className="text-orange-500">Innovation.</span>
                        </h1>
                        <p className="text-xl text-gray-700 font-medium leading-relaxed max-w-xl">
                            We aren't just developers; we are digital architects. CrewTechventure was born to bridge the gap between complex technology and growing businesses.
                        </p>
                    </motion.div>

                    {/* Right Side - The Custom Animated Core (No External URL Needed) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[500px] aspect-square bg-white/60 backdrop-blur-2xl rounded-[3.5rem] border-2 border-orange-100 shadow-2xl flex items-center justify-center p-6 overflow-hidden"
                        >
                            {/* 1. Animated Geometric Background */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="w-80 h-80 border-2 border-dashed border-orange-500/20 rounded-full"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-64 h-64 border-2 border-dashed border-orange-500/40 rounded-full"
                                />
                            </div>

                            {/* 2. The Digital Core - Your Logo Centralized */}
                            <div className="relative z-10 w-48 h-48 flex items-center justify-center">
                                {/* Outer Pulsing Ring */}
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute inset-0 bg-orange-500 rounded-full blur-3xl"
                                />

                                {/* Logo Image */}
                                <motion.img
                                    src="/Images/crew.png"
                                    alt="Crew Logo"
                                    className="w-32 h-32 object-contain relative z-20 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                            </div>

                            {/* 3. Floating Tech Particles (SVG based) */}
                            <div className="absolute inset-0 z-0 opacity-20">
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-orange-500 rounded-full"
                                        animate={{
                                            x: [Math.random() * 400, Math.random() * 400],
                                            y: [Math.random() * 400, Math.random() * 400],
                                            opacity: [0, 1, 0]
                                        }}
                                        transition={{ duration: 5 + i, repeat: Infinity }}
                                    />
                                ))}
                            </div>

                            {/* Status Tag */}
                            <div className="absolute top-10 right-10 bg-white/90 px-4 py-2 rounded-2xl shadow-lg border border-orange-100 z-20">
                                <p className="text-orange-600 font-black text-xs uppercase tracking-tighter">STATUS: INNOVATING</p>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutHeader;