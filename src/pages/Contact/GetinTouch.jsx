import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Send, CheckCircle } from 'lucide-react';

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset after 5 seconds to show the form again
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-transparent py-20 px-7 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div>
                            <motion.h2 variants={itemVariants} className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter">
                                Get in <span className="text-orange-500">Touch</span>
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed font-medium">
                                Reach out for new projects, redesigns, or collaborations. Every engagement begins with understanding your goals.
                                Crew Techventure supports clients across India with flexible project execution.
                            </motion.p>
                        </div>

                        {/* Contact Detail Cards */}
                        <div className="space-y-8">
                            {[
                                { icon: MapPin, title: 'Address', detail: 'Meerut, Uttar Pradesh, India' },
                                { icon: Phone, title: 'Phone Number', detail: '+91-8273943836' },
                                { icon: Mail, title: 'E-Mail', detail: 'crewtechventure@gmail.com' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black text-orange-600 uppercase tracking-widest">{item.title}</h3>
                                        <p className="text-xl font-bold text-gray-900">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Media Row */}
                        <motion.div variants={itemVariants} className="pt-8 border-t border-gray-200">
                            <div className="flex gap-4">
                                {[
                                    { icon: Facebook, link: 'https://facebook.com' },
                                    { icon: Instagram, link: 'https://www.instagram.com/crewtechventure/' },
                                    { icon: Linkedin, link: 'https://www.linkedin.com/in/crew-techventure-133b22358/' }
                                ].map((social, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => window.open(social.link, '_blank')}
                                        className="w-14 h-14 rounded-xl bg-white border-2 border-orange-100 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-md"
                                    >
                                        <social.icon className="w-6 h-6" />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Form Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="bg-white/80 backdrop-blur-md rounded-[3rem] border-4 border-orange-500 p-8 sm:p-12 shadow-2xl relative z-10 min-h-[500px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-4xl font-black text-center mb-4 tracking-tight">
                                            Send a <span className="text-orange-500">Message</span>
                                        </h3>

                                        <div className="space-y-6">
                                            <div className="relative">
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg font-bold"
                                                />
                                                <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Name</label>
                                            </div>

                                            <div className="relative">
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg font-bold"
                                                />
                                                <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">E-Mail</label>
                                            </div>

                                            <div className="relative">
                                                <textarea
                                                    required
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder=" "
                                                    rows="2"
                                                    className="peer w-full bg-transparent border-b-2 border-gray-300 py-3 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg font-bold resize-none"
                                                />
                                                <label className="absolute left-0 top-3 text-gray-500 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-orange-500 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">Message</label>
                                            </div>

                                            <p className="text-gray-500 text-center text-sm font-medium italic">
                                                We usually prepare a proposal for you within <span className="text-orange-600 font-black">24 hours</span>.
                                            </p>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="w-full bg-orange-500 text-white py-5 rounded-2xl text-xl font-black shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3 group"
                                            >
                                                Submit <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </motion.button>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-10"
                                    >
                                        <CheckCircle size={80} className="text-orange-500 mx-auto mb-6" />
                                        <h3 className="text-3xl font-black mb-4">Message Sent!</h3>
                                        <p className="text-gray-600 font-bold">Thank you, {formData.name}. <br /> Our crew will get back to you shortly.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;