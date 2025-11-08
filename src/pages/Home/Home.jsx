import React from 'react'
import HeroSection from './Header'
import ServicesSection from './Services_home'
import ProjectsSection from './Projects_home'
import TestimonialsSection from './Testimonial_home'
import StatsSection from './Stats_home'
import FAQSection from './Faq_home'
import CTASection from './CTA_sectionHome'


const Home = () => {
    return (
        <div>
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
