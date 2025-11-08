import React from 'react';

const MapSection = () => {
    return (
        <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Optional Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        Find <span className="text-orange-500">Us</span>
                    </h2>
                    <p className="text-lg text-gray-700">
                        Visit our office in Noida, Uttar Pradesh
                    </p>
                </div>

                {/* Map Container */}
                <div className="w-full h-96 sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129932008!2d77.22496604999999!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Office Location Map"
                    ></iframe>
                </div>

                {/* Optional Info Cards Below Map */}
                <div className="grid sm:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-orange-500 text-3xl mb-2">📍</div>
                        <h3 className="font-bold text-xl mb-2">Location</h3>
                        <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-orange-500 text-3xl mb-2">⏰</div>
                        <h3 className="font-bold text-xl mb-2">Working Hours</h3>
                        <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-md text-center">
                        <div className="text-orange-500 text-3xl mb-2">🚗</div>
                        <h3 className="font-bold text-xl mb-2">Parking</h3>
                        <p className="text-gray-600">Free parking available</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;