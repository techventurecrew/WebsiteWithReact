import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Globe } from 'lucide-react';

const MapSection = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    return (
        <section className="bg-transparent py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter">
                        Find <span className="text-orange-500">Us</span>
                    </h2>
                    <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                        Visit our tech hub in Meerut. We love meeting our partners and crew members in person.
                    </p>
                </motion.div>

                {/* Map Container - 3D Lift Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full h-96 sm:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-orange-500 group"
                >
                    {/* Decorative Map Overlay for Tech Look */}
                    <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none z-10 rounded-[2.8rem]" />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111516.34526323143!2d77.62531631557077!3d28.989718420686975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c64f61f70557b%3A0xc34346549219b167!2sMeerut%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                        className="grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
                    ></iframe>
                </motion.div>

                {/* Info Cards - Glassmorphism Staggered Reveal */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
                >
                    {[
                        { icon: <MapPin />, title: 'Location', desc: 'Meerut, Uttar Pradesh, India', color: 'bg-blue-500' },
                        { icon: <Clock />, title: 'Working Hours', desc: 'Mon - Fri: 9:00 AM - 6:00 PM', color: 'bg-orange-500' },
                        { icon: <Car />, title: 'Parking', desc: 'Free secure parking available', color: 'bg-green-500' }
                    ].map((info, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border-2 border-orange-50 flex flex-col items-center text-center group"
                        >
                            <div className={`w-14 h-14 ${info.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform`}>
                                {info.icon}
                            </div>
                            <h3 className="font-black text-2xl mb-2 text-gray-900">{info.title}</h3>
                            <p className="text-gray-600 font-bold">{info.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default MapSection;