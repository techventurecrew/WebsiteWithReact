import React from 'react'
import { Helmet } from 'react-helmet-async'
import CareerTeamSection from './CareerTeamSection'
import OpenPositionsSection from './OpenPositionSection'
const Hiring = () => {
    return (
        <div>
            <Helmet>
                <title>Careers | Join Our Team at Crew Techventure Meerut</title>
                <meta name="description" content="Looking for a career in IT? Join Crew Techventure. Explore open positions in Web Development and Digital Marketing." />
                <meta property="og:title" content="Join the Crew - Career Opportunities" />
                <meta property="og:url" content="https://www.crewtechventure.com/hiring" />
            </Helmet>
            <CareerTeamSection />
            <OpenPositionsSection />
        </div>
    )
}

export default Hiring
