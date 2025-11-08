import React from 'react'

const Header = () => {
    return (
        <div>
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Contact <span className="text-orange-500">Us</span>
                    </h2>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-black font-semibold lg:text-2xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                        hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                        ultrices mauris. Maecenas vitae mattis tellus..
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Header
