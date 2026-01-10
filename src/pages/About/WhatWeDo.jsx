import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDoSection = () => {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            items: ['UI/UX design', 'Custom website development', 'Website management & hosting', 'Full project lifecycle: Requirement → Research → Design → Frontend → Backend → Testing → Handover']
        },
        {
            id: 2,
            title: 'Software Development',
            items: ['Custom software solutions', 'Dashboard, CRM & automation tools', 'End-to-end development process: Requirement → Research → Design → Development → Testing → Handover']
        },
        {
            id: 3,
            title: 'Graphics & Branding',
            items: ['Logo creation', 'Posters, banners & marketing creatives', 'UI design (Figma)', 'Photoshop, Illustrator, CAD & AutoCAD']
        },
        {
            id: 4,
            title: 'Data Analytics',
            items: ['Microsoft Excel', 'SQL', 'Power BI dashboards', 'Python-based analysis & automation']
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-transparent py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading & Intro */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl sm:text-7xl font-extrabold mb-8 tracking-tight"
                    >
                        What we <span className="text-orange-500">do</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-700 leading-relaxed max-w-3xl font-medium"
                    >
                        At Crew Techventure, we offer a wide range of services designed to help businesses establish a strong and memorable digital presence.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side - Animated Services List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-10"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="relative flex gap-6 group"
                            >
                                {/* Vertical Accent Bar */}
                                <div className="w-1.5 bg-orange-500 flex-shrink-0 rounded-full h-auto transition-transform group-hover:scale-y-110 origin-top" />

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <span className="text-orange-500">✔</span>
                                        {service.title}
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.items.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                whileHover={{ x: 5 }}
                                                className="text-gray-600 flex gap-3 text-lg font-medium leading-relaxed"
                                            >
                                                <span className="text-orange-500 mt-1.5 flex-shrink-0">•</span>
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}

                        {/* Closing Statement */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-6 mt-12 pt-8 border-t border-gray-200"
                        >
                            <div className="w-1.5 bg-orange-500 flex-shrink-0 rounded-full h-auto" />
                            <p className="text-gray-700 italic text-xl font-semibold">
                                We ensure every deliverable reflects your brand personality — clean, modern, and customer-focused.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Sticky Image with Reveal Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:sticky lg:top-32"
                    >
                        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
                            {/* Animated Overlay */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 pointer-events-none"
                            />

                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop"
                                alt="Professional working at desk"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Decorative floating badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-orange-100 hidden md:block"
                        >
                            <p className="text-orange-600 font-bold text-lg">Reliable Partner</p>
                            <p className="text-gray-500 text-sm">Quality Guaranteed</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;