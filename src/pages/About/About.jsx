import React from 'react'
import { Helmet } from 'react-helmet-async'
import AboutSectionWithWaves from './AboutHeader'
import WhatWeDoSection from './WhatWeDo'
import OurStoryTeamSection from './OurStory'
const About = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Best Website Maker Company in Meerut - Crew Techventure</title>
                <meta name="description" content="Crew Techventure is a leading IT services company in Meerut. We specialize in delivering end-to-end IT solutions for small businesses." />
                <meta property="og:title" content="About Crew Techventure - Your Trusted IT Partner" />
                <meta property="og:url" content="https://www.crewtechventure.com/about" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Crew Techventure",
                        "url": "https://www.crewtechventure.com/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.crewtechventure.com/about{search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            </Helmet>
            <AboutSectionWithWaves />
            <WhatWeDoSection />
            <OurStoryTeamSection />
        </div>
    )
}

export default About
