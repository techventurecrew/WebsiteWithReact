import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: 'about' },
        { name: 'Services', href: 'services' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    const handleLinkClick = (name) => {
        setActiveLink(name);
    };

    return (
        <nav className="bg-orange-600 shadow-sm fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="relative w-16 h-16">
                            <img
                                src="/Images/crew.png"
                                alt="Logo"
                                className="w-full h-full rounded-full object-contain bg-white"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <img
                                src="/Images/Crew_text.png"
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => handleLinkClick(link.name)}
                                className={`text-base font-medium transition-colors duration-200 ${activeLink === link.name
                                    ? 'text-orange-800'
                                    : 'text-white hover:text-orange-500'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Get Started Button */}
                    <div className="hidden md:block">
                        <button
                            className="px-8 py-3 border-2 border-white text-white  rounded-full  font-medium hover:bg-orange-500 hover:text-white transition-all duration-300"
                            onClick={() => console.log('Get Started button clicked')}
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 pt-4 pb-6 space-y-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => handleLinkClick(link.name)}
                                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${activeLink === link.name
                                    ? 'text-orange-500 bg-orange-50'
                                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full mt-4 px-8 py-3 border-2 border-white text-white rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;