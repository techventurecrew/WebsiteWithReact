import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Wallet, ArrowUpRight } from 'lucide-react';

const OpenPositionsSection = () => {
    const positions = [
        {
            id: 1,
            title: 'Frontend Developer',
            type: 'Full-time',
            description: 'Building modern, responsive user interfaces using React and Framer Motion. Focus on performance and smooth UX.',
            location: 'Remote / Noida',
            salary: 'Competitive'
        },
        {
            id: 2,
            title: 'Backend Engineer',
            type: 'Full-time',
            description: 'Designing scalable server-side architectures and managing databases to power high-traffic digital solutions.',
            location: 'Remote',
            salary: 'Competitive'
        },
        {
            id: 3,
            title: 'UI/UX Designer',
            type: 'Contract',
            description: 'Crafting intuitive user journeys and high-fidelity prototypes that define the visual language of our projects.',
            location: 'Remote',
            salary: 'Hourly'
        },
        {
            id: 4,
            title: 'Digital Marketing Specialist',
            type: 'Full-time',
            description: 'Driving growth through strategic SEO, social media campaigns, and data-driven marketing insights.',
            location: 'Remote',
            salary: 'Competitive'
        },
        {
            id: 5,
            title: 'App Developer',
            type: 'Full-time',
            description: 'Developing cross-platform mobile applications that provide seamless experiences on both iOS and Android.',
            location: 'Remote / Noida',
            salary: 'Competitive'
        },
        {
            id: 6,
            title: 'Data Analyst',
            type: 'Internship',
            description: 'Transforming complex data sets into actionable insights to help businesses make informed strategic decisions.',
            location: 'Remote',
            salary: 'Stipend'
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="bg-transparent py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading - Animated Reveal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl sm:text-7xl font-black text-gray-900 leading-tight">
                        Currently Open <span className="text-orange-500">Positions</span>
                    </h2>
                    <div className="w-24 h-2 bg-orange-500 mx-auto mt-6 rounded-full" />
                </motion.div>

                {/* Job Cards Grid - Staggered Entrance */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {positions.map((position) => (
                        <motion.div
                            key={position.id}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.15)"
                            }}
                            className="group bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 border-2 border-orange-50 relative transition-all hover:border-orange-500"
                        >
                            {/* Animated Arrow Button */}
                            <motion.button
                                whileHover={{ rotate: 45, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="absolute top-8 right-8 w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 text-white"
                            >
                                <ArrowUpRight className="w-7 h-7" strokeWidth={2.5} />
                            </motion.button>

                            {/* Job Title & Info */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                                    {position.title}
                                </h3>
                                <div className="inline-block px-4 py-1.5 bg-orange-50 rounded-full">
                                    <p className="text-xs font-black text-orange-600 uppercase tracking-widest">
                                        {position.type}
                                    </p>
                                </div>
                            </div>

                            {/* Job Description */}
                            <p className="text-gray-600 text-lg font-medium leading-relaxed mb-8 pr-12 line-clamp-2">
                                {position.description}
                            </p>

                            {/* Job Details Footer */}
                            <div className="flex flex-wrap items-center gap-8 pt-6 border-t border-gray-100 text-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold">{position.location}</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                                        <Wallet className="w-5 h-5" />
                                    </div>
                                    <span className="font-bold">{position.salary}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Recruitment Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16 text-gray-500 font-bold italic"
                >
                    Don't see a fit? We're always open to meeting great talent.
                    <a href="mailto:crewtechventure@gmail.com" className="text-orange-500 ml-2 hover:underline">
                        Send us your CV anyway →
                    </a>
                </motion.p>
            </div>
        </section>
    );
};

export default OpenPositionsSection;