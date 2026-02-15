import React from 'react';
import { Helmet } from 'react-helmet-async'
import Header from './Header';
import GetInTouchSection from './GetinTouch';
import MapSection from './Map';
const ContactSection = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us | Get a Free Quote from Crew Techventure</title>
                <meta name="description" content="Contact Crew Techventure for affordable IT solutions. Call us at 8273943836 or visit our office in Meerut for a free consultation." />
                <meta property="og:url" content="https://www.crewtechventure.com/contact" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://www.crewtechventure.com/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Contact Us",
                            "item": "https://www.crewtechventure.com/contact"
                        }]
                    })}
                </script>
            </Helmet>
            <Header />
            <GetInTouchSection />
            <MapSection />
        </div>
    );
};

export default ContactSection;