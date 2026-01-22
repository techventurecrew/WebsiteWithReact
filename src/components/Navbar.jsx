import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isPastHero, setIsPastHero] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // 1. Detect if we are past the first 100vh
            if (currentScrollY > window.innerHeight - 80) {
                setIsPastHero(true);
            } else {
                setIsPastHero(false);
            }

            // 2. Smooth Hide/Show Logic
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    // Dynamic Style logic based on scroll position
    const navBackground = isPastHero
        ? "bg-white/80 backdrop-blur-lg border-b border-orange-100"
        : "bg-orange-500 border-b border-transparent";

    const linkColor = isPastHero ? "text-gray-700" : "text-white";
    const activeLinkColor = isPastHero ? "text-orange-600" : "text-orange-900";

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className={`fixed top-0 left-0 w-full z-[1000] transition-colors duration-500 ${navBackground}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-white transition-transform group-hover:scale-110">
                            <img
                                src="/Images/crew.png"
                                alt="Logo"
                                className="w-full h-full object-contain bg-white p-1"
                            />
                        </div>
                        <div className="h-8 md:h-10">
                            <img
                                src="/Images/Crew_text.png"
                                alt="CrewTechventure"
                                className={`h-full w-auto object-contain transition-all duration-500 ${!isPastHero ? 'brightness-0 invert' : ''}`}
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative px-2 py-1 text-sm lg:text-base font-bold tracking-tight transition-colors ${isActive ? activeLinkColor : `${linkColor} hover:text-orange-200`
                                        }`}
                                >
                                    <span>{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navUnderline"
                                            className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isPastHero ? 'bg-orange-500' : 'bg-white'}`}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Get Started Button */}
                    <div className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.location.href = '/contact'}
                            className={`px-8 py-3 rounded-full font-bold text-sm lg:text-base shadow-lg transition-all duration-500 ${isPastHero
                                ? 'bg-orange-500 text-white shadow-orange-500/20'
                                : 'bg-white text-orange-500 shadow-black/10'
                                }`}
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 transition-colors duration-500 ${isPastHero ? 'text-orange-600' : 'text-white'}`}
                        >
                            {isOpen ? <X size={30} /> : <Menu size={30} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-orange-100"
                    >
                        <div className="px-6 pt-4 pb-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-xl font-bold ${location.pathname === link.href ? 'text-orange-600' : 'text-gray-800'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => window.location.href = '/contact'}
                                className="w-full mt-4 px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold shadow-lg"
                            >
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

