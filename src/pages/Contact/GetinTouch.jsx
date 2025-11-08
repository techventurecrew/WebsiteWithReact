import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const GetInTouchSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Add your form submission logic here
        alert('Message sent successfully!');
    };

    return (
        <section className="bg-white py-16 px-7 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        {/* Heading */}
                        <div>
                            <h2 className="text-5xl sm:text-6xl font-bold mb-4">
                                Get in <span className="text-orange-500">Touch</span>
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Address</h3>
                                    <p className="text-lg text-gray-700">Noida, Uttar Pradesh, India</p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Phone Number</h3>
                                    <p className="text-lg text-gray-700">+91-8273943836</p>
                                </div>
                            </div>

                            {/* E-Mail */}
                            <div className="flex items-start gap-4">
                                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">E-Mail</h3>
                                    <p className="text-lg text-gray-700">crewtechventure@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="pt-8 border-t border-gray-300">
                            <div className="flex gap-4">
                                <button className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors" onClick={() => window.open('https://www.facebook.com', '_blank')}>
                                    <Facebook className="w-7 h-7 text-white" fill="white" />
                                </button>
                                <button className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors" onClick={() => window.open('https://www.instagram.com/crewtechventure/', '_blank')}>
                                    <Instagram className="w-7 h-7 text-white" />
                                </button>
                                <button className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors" onClick={() => window.open('https://x.com/CrewTechventure', '_blank')}>
                                    <svg className="w-7 h-7 text-white" fill="white" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </button>
                                <button className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors" onClick={() => window.open('https://www.linkedin.com/in/crew-techventure-133b22358/', '_blank')}>
                                    <Linkedin className="w-7 h-7 text-white" fill="white" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-gray-50 rounded-3xl border-4 border-orange-500 p-8 sm:p-12">
                        <h3 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
                            Send a <span className="text-orange-500">Message</span>
                        </h3>

                        <div className="space-y-6">
                            {/* Name Field */}
                            <div>
                                <label className="block text-xl font-semibold mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-gray-400 py-1 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-xl font-semibold mb-1">E-Mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b-2 border-gray-400 py-1 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg"
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-xl font-semibold mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full bg-transparent border-b-2 border-gray-400 py-1 px-0 focus:outline-none focus:border-orange-500 transition-colors text-lg resize-none"
                                ></textarea>
                            </div>

                            {/* Helper Text */}
                            <p className="text-gray-600 text-center text-sm sm:text-base">
                                Write us a few words about your project and we will prepare a proposal for you within <span className="font-bold">24</span> hours.
                            </p>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-orange-500 text-white py-4 px-8 rounded-xl text-2xl font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;