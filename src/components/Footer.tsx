import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    const navigationLinks = [
        { name: 'Home', href: '/' },
        { name: 'About us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'Recent Projects', href: '/projects' },
        { name: 'Contact us', href: '/contact' }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/crewtechventure/', label: 'Instagram' },
        { icon: <Twitter className="w-5 h-5" />, href: 'https://x.com/CrewTechventure', label: 'Twitter' },
        { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/crew-techventure-133b22358/', label: 'LinkedIn' }
    ];

    // Animation Variants
    const footerContainer = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.8, ease: "easeOut" }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <footer className="relative bg-[#02021a] text-white pt-24 pb-8 overflow-hidden border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    variants={footerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
                >
                    {/* Brand Info */}
                    <motion.div variants={itemFade} className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black tracking-tighter text-orange-500">
                                CREW<span className="text-white">TECH</span>
                            </h2>
                            <div className="h-1 w-12 bg-orange-500 rounded-full" />
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed font-medium">
                            Building scalable, secure, and innovative software solutions that drive digital transformation across the globe.
                        </p>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div variants={itemFade} className="space-y-6">
                        <h3 className="text-xl font-bold border-l-4 border-orange-500 pl-4">Navigation</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-400 hover:text-orange-500 flex items-center group transition-colors duration-300"
                                    >
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact details */}
                    <motion.div variants={itemFade} className="space-y-6">
                        <h3 className="text-xl font-bold border-l-4 border-orange-500 pl-4">Connect</h3>
                        <div className="space-y-4">
                            <a href="tel:+918273943836" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500"><Phone size={18}/></div>
                                <span className="font-semibold">+91 8273943836</span>
                            </a>
                            <a href="mailto:crewtechventure@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors break-all">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500"><Mail size={18}/></div>
                                <span className="font-semibold">crewtechventure@gmail.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-500"><MapPin size={18}/></div>
                                <span className="font-semibold">Noida, UP, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Box */}
                    <motion.div variants={itemFade} className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-[2rem] shadow-2xl shadow-orange-500/20 relative overflow-hidden group">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                        />
                        <h4 className="text-xl font-black mb-4 relative z-10 italic">Ready to scale?</h4>
                        <p className="text-white/80 text-sm mb-6 relative z-10 font-medium">Let's discuss your next big digital move.</p>
                        <button 
                            onClick={() => window.location.href = '/contact'}
                            className="w-full py-3 bg-white text-orange-600 rounded-xl font-bold hover:scale-105 transition-transform relative z-10"
                        >
                            Get Started
                        </button>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
                >
                    <div className="flex items-center gap-6">
                        <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Follow us</span>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: "#f97316" }}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 transition-colors border border-white/5"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm font-medium tracking-tight">
                        © 2024-{currentYear} <span className="text-white font-bold">CrewTechVenture</span>. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterSection;