import React from 'react';
import { motion } from 'framer-motion';

const OurStoryTeamSection = () => {
    const teamMembers = [
        { id: 1, name: 'Kanak Singhal', description: 'CEO & Co-Founder Visionary leader driving innovation and strategic growth.', initials: 'KS' },
        { id: 2, name: 'Amandeep', description: 'Co-Founder and Project Manager Ensures every project runs with precision and care.', initials: 'AM' },
        { id: 3, name: 'Pranav Singhal', description: 'Co-Founder and App Developer Builds powerful mobile applications for businesses.', initials: 'PS' },
        { id: 4, name: 'Kaushal Chauhan', description: 'Manager and Team Developer Leads our development team with technical excellence.', initials: 'KC' },
        { id: 5, name: 'Akshit Chauhan', description: 'Backend Team Manager Masters the architecture that powers digital experiences.', initials: 'AC' },
        { id: 6, name: 'Vanshaj Bansal', description: 'Head of Web Development Crafts beautiful, high-performing websites.', initials: 'VB' }
    ];

    // Parent container for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const getAvatarColor = (initials) => {
        const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-red-500'];
        const index = initials.charCodeAt(0) % colors.length;
        return colors[index];
    };

    return (
        <section className="bg-transparent py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* 1. Our Story Section */}
                <div className="mb-32">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Animated Image Frame */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-orange-500/10 rounded-[3rem] blur-2xl group-hover:bg-orange-500/20 transition-all duration-700" />
                            <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                    alt="Team meeting presentation"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Right Side - Story Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
                                Our <span className="text-orange-500">Story</span>
                            </h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                                <p className="text-justify">
                                    Crew Techventure was founded with a simple belief: every business deserves a strong digital identity.
                                    What started as a passion project has grown into a full-service technology solutions company in India.
                                    Our core values have remained the same: quality work, transparent pricing, and genuine partnerships.
                                </p>
                                <p className="text-justify">
                                    As a trusted partner for enterprise IT services, we've transformed traditional workflows into digital-first operations.
                                    Today, we're proud to be a reliable software development firm committed to making digital growth affordable for all.
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-colors"
                            >
                                Read about our story here
                            </motion.button>
                        </motion.div>
                    </div>
                </div>

                {/* 2. Meet the Team Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
                            Meet the <span className="text-orange-500">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                            A group of passionate professionals dedicated to building meaningful digital experiences through creativity and technical expertise.
                        </p>
                    </motion.div>

                    {/* Team Cards Grid - Staggered */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
                    >
                        {teamMembers.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white/80 backdrop-blur-md border-2 border-orange-100 rounded-[2.5rem] p-8 transition-all hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Avatar with Magnetic Glow */}
                                    <div className="relative mb-6">
                                        <div className={`absolute inset-0 rounded-full blur-xl opacity-30 ${getAvatarColor(member.initials)}`} />
                                        <div className={`relative w-24 h-24 ${getAvatarColor(member.initials)} rounded-full flex items-center justify-center shadow-lg border-4 border-white transition-transform group-hover:scale-110`}>
                                            <span className="text-white text-3xl font-bold">{member.initials}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-orange-600 font-bold uppercase tracking-wider text-xs mb-4">
                                        Team Lead
                                    </p>
                                    <p className="text-gray-600 font-medium leading-relaxed line-clamp-3">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Final Hiring CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = 'hiring'}
                            className="bg-orange-500 text-white px-12 py-5 rounded-[2rem] font-bold text-xl shadow-2xl shadow-orange-500/20 transition-all"
                        >
                            Take a look at our open positions
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStoryTeamSection;