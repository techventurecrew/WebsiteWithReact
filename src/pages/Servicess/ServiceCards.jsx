import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Palette, BarChart3, Rocket, Megaphone, X } from 'lucide-react';

const ServicesCardsGrid = () => {
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();

    const services = [
        { id: 1, icon: Code, title: 'Web Development', description: 'We build professional, high-performance websites to grow your business online.', gradient: 'from-orange-500 to-orange-600', detailedDescription: 'Our web development services encompass creating modern, responsive, and scalable websites tailored to your business needs.', steps: ['Discovery & Planning', 'Design & Prototyping', 'Development', 'Testing & QA', 'Launch & Deployment', 'Maintenance & Support'] },
        { id: 2, icon: Megaphone, title: 'Digital Marketing', description: 'Reach your target audience with strategic digital marketing campaigns.', gradient: 'from-orange-500 to-orange-600', detailedDescription: 'Amplify your brand reach with data-driven digital marketing strategies.', steps: ['Market Research', 'Strategy Development', 'Campaign Creation', 'Execution', 'A/B Testing', 'Analytics', 'Optimization'] },
        { id: 3, icon: Palette, title: 'Graphic Designing', description: "We provide professional graphic design services to bring your brand's visual identity to life.", gradient: 'from-orange-500 to-orange-600', detailedDescription: 'Create a lasting impression with stunning visual designs.', steps: ['Brand Discovery', 'Research', 'Concept Development', 'Design Iteration', 'Final Artwork', 'Brand Guidelines'] },
        { id: 4, icon: BarChart3, title: 'Data Analysis', description: 'Transform raw data into actionable insights to drive informed business decisions.', gradient: 'from-orange-500 to-orange-600', detailedDescription: 'Unlock the power of your data with our comprehensive analytics services.', steps: ['Data Collection', 'Data Cleaning', 'Exploratory Analysis', 'Statistical Modeling', 'Visualization', 'Insights', 'Implementation'] },
        { id: 5, icon: Rocket, title: 'SEO Setup', description: 'Boost your online visibility and rank higher in search engine results.', gradient: 'from-orange-500 to-red-600', detailedDescription: 'Dominate search engine rankings with our comprehensive SEO services.', steps: ['SEO Audit', 'Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy', 'Link Building', 'Monitoring'] },
        { id: 6, icon: Smartphone, title: 'App Development', description: 'We design and build intuitive mobile apps for iOS, Android, and cross-platform needs.', gradient: 'from-orange-500 to-red-600', detailedDescription: 'Transform your ideas into powerful mobile applications.', steps: ['Concept & Strategy', 'UI/UX Design', 'Development', 'Integration', 'Testing', 'App Store Submission', 'Post-Launch Support'] }
    ];

    // Animation Variants
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", damping: 20, stiffness: 100 }
        }
    };

    return (
        <section className="bg-transparent py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Grid of Service Cards */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
                >
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative bg-white/80 backdrop-blur-sm h-96 sm:h-[400px] w-full sm:w-[350px] shadow-2xl rounded-[2.5rem] transition-all duration-300 overflow-hidden border border-orange-100"
                            >
                                <div className="relative z-10">
                                    {/* Icon Section */}
                                    <div className={`bg-gradient-to-br ${service.gradient} p-12 flex items-center justify-center shadow-lg`}>
                                        <motion.div whileHover={{ rotate: 15, scale: 1.1 }}>
                                            <IconComponent className="w-16 h-12 sm:w-20 sm:h-20 text-white" strokeWidth={1.5} />
                                        </motion.div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="p-8 flex flex-col items-center text-center">
                                        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <motion.button
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedService(service)}
                                            className="text-orange-500 font-bold text-sm border-2 border-orange-500 px-8 py-2 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Modal Popup with AnimatePresence */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[99999] flex items-center justify-center p-4"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            className="bg-white rounded-[2rem] max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className={`bg-gradient-to-br ${selectedService.gradient} p-8 relative`}>
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="flex items-center gap-5">
                                    <selectedService.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                                    <h2 className="text-3xl font-bold text-white tracking-tight">
                                        {selectedService.title}
                                    </h2>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-orange-500 rounded-full" />
                                    About This Service
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                                    {selectedService.detailedDescription}
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-orange-500 rounded-full" />
                                    Our Professional Process
                                </h3>
                                <div className="grid gap-4">
                                    {selectedService.steps.map((step, index) => (
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                            key={index}
                                            className="flex gap-4 items-center p-4 rounded-2xl bg-orange-50 border border-orange-100 group"
                                        >
                                            <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white font-bold`}>
                                                {index + 1}
                                            </div>
                                            <p className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors">
                                                {step}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => navigate('/contact')}
                                    className={`w-full mt-10 bg-gradient-to-br ${selectedService.gradient} text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-orange-500/30 transition-all`}
                                >
                                    Start Your {selectedService.title} Project
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesCardsGrid;