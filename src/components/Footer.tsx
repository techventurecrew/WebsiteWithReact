import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { href } from 'react-router-dom';

const FooterSection = () => {
  const navigationLinks = [
    {name:'Home' , href:'/'},
    { name: 'About us', href: 'about' },
    { name: 'Our Services', href: 'services' },
    { name: 'Recent Projects', href: 'projects' },
    { name: 'Contact us', href: 'contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-6 h-6" />, href: 'https://www.instagram.com/crewtechventure/', label: 'Instagram' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://x.com/CrewTechventure', label: 'Twitter' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/crew-techventure-133b22358/', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gradient-to-br from-indigo-950 via-blue-930 to-indigo-950 text-white relative overflow-hidden">    
    

      <div className="relative z-10 max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-start">
        {/* Footer Heading */}
        <h1 className="absolute top-8 left-8 text-4xl font-bold text-orange-500 block">
          CREW TECHVENTURE
        </h1>

        {/* Footer Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          
          <img
            src="/Images/Group19.png"
            alt="Footer Logo"
            className="h-full object-contain opacity-1"
          />
        </div>

        {/* Main Footer Content */}
          

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 items-start relative z-10">
          {/* Company Info */}
          
          <div className="space-y-8 self-start">
          {/* <h2 className="text-3xl font-bold text-orange-500">
              CREWTECHVENTURE
            </h2> */}
            <p className="text-gray-300 text-2xl">
              Building scalable, secure, and innovative software solutions that drive digital transformation.
            </p>
          </div>

          {/* Navigation */}

          <div className="space-y-6 self-start">
            <h3 className="text-2xl font-bold mb-6">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 self-start">
            <div className="space-y-4">
              <a
                href="tel:+918273943836"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg block"
              >
                +91-8273943836
              </a>
              <a
                href="mailto:crewtechventure@gmail.com"
                className="text-gray-300 hover:text-orange-500 transition-colors duration-300 text-lg block break-all"
              >
                crewtechventure@gmail.com
              </a>
              <p className="text-gray-300 text-lg">
                Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-lg">Follow us on</span>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition-all duration-300 transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-sm md:text-base text-center md:text-right">
            Crewtechventure © Copyright 2024-2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;