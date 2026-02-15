import React from 'react'
import { Helmet } from 'react-helmet-async'
import ProjectsSection from './ProjectsSection'
const Projects = () => {
    return (
        <div>
            <Helmet>
                <title>Our Projects | Successfully Delivered IT & Marketing Solutions</title>
                <meta name="description" content="Take a look at our portfolio. Crew Techventure has successfully delivered high-quality web development and digital marketing projects for diverse clients." />
                <meta property="og:title" content="Crew Techventure Portfolio - Our Work" />
                <meta property="og:url" content="https://www.crewtechventure.com/projects" />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "WebSite",
                        "name": "Crew Techventure",
                        "url": "https://www.crewtechventure.com/",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://www.crewtechventure.com/projects{search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            </Helmet>
            <ProjectsSection />
        </div>
    )
}

export default Projects
