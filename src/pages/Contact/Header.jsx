import React from 'react'

const Header = () => {
    return (
        <div>
            <section className="bg-white py-16 mt-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Contact <span className="text-orange-500">Us</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-black font-semibold lg:text-2xl leading-relaxed">
                        Crew Techventure partners with local businesses, startups, and growing enterprises to turn ideas into powerful digital solutions. Share your requirements, and the team will help you choose the right mix of websites, apps, branding, and analytics to strengthen your online presence.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header
