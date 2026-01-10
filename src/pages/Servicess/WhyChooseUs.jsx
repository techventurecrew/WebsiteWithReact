import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Lightbulb, MessageSquare, Layers, Shield, Handshake } from 'lucide-react';

const WhyChooseUsSection = () => {
    const features = [
        { id: 1, icon: Code2, title: 'Expert Software Developers', description: 'Our team of seasoned developers brings years of experience and cutting-edge expertise to every project, ensuring top-quality solutions.' },
        { id: 2, icon: Lightbulb, title: 'Customized Solutions', description: "We don't believe in one-size-fits-all. Every solution is tailored specifically to meet your unique business needs and goals." },
        { id: 3, icon: MessageSquare, title: 'Transparent Communication', description: 'Stay informed every step of the way with clear, honest communication and regular project updates.' },
        { id: 4, icon: Layers, title: 'End-to-End Service', description: 'From initial concept to deployment and maintenance, we provide comprehensive solutions throughout the entire project lifecycle.' },
        { id: 5, icon: Shield, title: 'Security & Performance Focus', description: 'Built with security-first mindset and optimized for peak performance, ensuring your applications are fast, secure, and reliable.' },
        { id: 6, icon: Handshake, title: 'Long-Term Partnership', description: "We're not just vendors; we're partners invested in your success. Building lasting relationships that grow with your business." }
    ];

    // Parent container for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
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

    return (
        <section className="bg-transparent overflow-hidden">
            {/* Call to Action Banner - Animated Dropdown */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 py-16 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden"
            >
                {/* Animated Background Pulse */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-white rounded-full blur-3xl -top-1/2 left-1/2 -translate-x-1/2"
                />

                {/* Decorative curved wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#F9FAFB" // Matches bg-gray-50
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        ></path>
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-6xl font-bold text-white mb-6"
                    >
                        Wanna work with us?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg sm:text-xl text-white mb-8 opacity-90 font-medium"
                    >
                        Whether you’re a local business, startup, or growing enterprise — we’re here to turn your ideas into powerful digital realities.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = 'contact'}
                        className="bg-white text-orange-500 px-10 py-4 mb-7 rounded-2xl font-bold text-lg transition-all shadow-xl"
                    >
                        Lets do it
                    </motion.button>
                </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto">
                    {/* Section Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-6xl font-bold text-center mb-16"
                    >
                        Why choose <span className="text-orange-500">Us?</span>
                    </motion.h2>

                    {/* Features Grid - Staggered */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={cardVariants}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-xl transition-all duration-300 hover:border-orange-500 hover:shadow-orange-500/10 group"
                            >
                                {/* Icon Container with Pulse */}
                                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30 group-hover:rotate-6 transition-transform">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;