import React from 'react'
import { Helmet } from 'react-helmet-async'
import ServicesHeaderSection from './ServicesHeader'
import ServicesCardsGrid from './ServiceCards'
import WhyChooseUsSection from './WhyChooseUs'
import WorkWithUsBanner from './WorkWithUs'
const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Professional IT & Digital Marketing Services | Crew Techventure</title>
                <meta name="description" content="Explore our wide range of services including Web Development, SEO, and Digital Marketing designed to help your business thrive online." />
                <meta property="og:title" content="Expert Digital Marketing & IT Solutions" />
                <meta property="og:url" content="https://www.crewtechventure.com/services" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Services",
                            "item": "https://www.crewtechventure.com/services"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Contact Us",
                            "item": "https://www.crewtechventure.com/contact"
                        }]
                    })}
                </script>
            </Helmet>
            <ServicesHeaderSection />
            <ServicesCardsGrid />
            <WhyChooseUsSection />
            <WorkWithUsBanner />
        </div>
    )
}

export default Services
