import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroSection from './Header'
import ServicesSection from './Services_home'
import ProjectsSection from './Projects_home'
import TestimonialsSection from './Testimonial_home'
import StatsSection from './Stats_home'
import FAQSection from './Faq_home'
import CTASection from './CTA_sectionHome'

const Home = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Crew Techventure",
        "url": "https://www.crewtechventure.com/",
        "logo": "https://ibb.co/tw6VLhRM",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "8273943836",
            "contactType": "sales",
            "areaServed": ["IN", "US", "GB", "CA", "AU"],
            "availableLanguage": ["en", "Hindi"]
        },
        "sameAs": [
            "https://www.instagram.com/crewtechventure",
            "http://www.linkedin.com/in/crew-techventure-133b22358",
            "https://www.facebook.com/profile.php?id=61574957493164"
        ]
    };
    return (
        <div className='relative'>
            <Helmet>
                <title>Affordable Digital Marketing & IT Solutions in Meerut | Crew Techventure</title>
                <meta name="description" content="Crew Techventure is a leading IT services company in Meerut, delivering end-to-end IT solutions like Web Development and Digital Marketing." />

                {/* Open Graph */}
                <meta property="og:title" content="Affordable Digital Marketing & IT Solutions in Meerut" />
                <meta property="og:url" content="https://www.crewtechventure.com/" />
                <meta property="og:image" content="https://ibb.co/tw6VLhRM" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@CrewTechventure" />

                {/* Schema */}
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
                <script type="application/ld+json">
                    {JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": [
                                { "position": 1, "name": "Home", "url": "https://www.crewtechventure.com/" },
                                { "position": 2, "name": "Services", "url": "https://www.crewtechventure.com/services" },
                                { "position": 3, "name": "Projects", "url": "https://www.crewtechventure.com/projects" },
                                { "position": 4, "name": "About Us", "url": "https://www.crewtechventure.com/about" },
                                { "position": 5, "name": "Contact", "url": "https://www.crewtechventure.com/contact" }
                            ]
                        })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify(
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Crew Techventure",
                            "image": "https://www.crewtechventure.com/crew.png",
                            "telephone": "8273943836",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Apna Office Address Yahan Likho",
                                "addressLocality": "Meerut",
                                "addressRegion": "UP",
                                "addressCountry": "IN"
                            },
                            "url": "https://www.crewtechventure.com/"
                        })}
                </script>
            </Helmet>
            <HeroSection />
            <ServicesSection />
            <ProjectsSection />
            <TestimonialsSection />
            <StatsSection />
            <FAQSection />
            <CTASection />
        </div>
    )
}

export default Home
