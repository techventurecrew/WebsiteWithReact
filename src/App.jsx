
import React from 'react';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import FooterSection from './components/Footer'



import Home from './pages/Home/Home';
import Services from './pages/Servicess/Services';
import ContactSection from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Hiring from './pages/Hiring/Hiring';
import './styles/animations.css'; // Add this at the top
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/hiring" element={<Hiring />} />
          </Routes>
        </main>
        <FooterSection />
      </div>
    </Router>
  )
}

export default App
