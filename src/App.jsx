import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from './components/Navbar';
import FooterSection from './components/Footer';

// Pages
import Home from './pages/Home/Home';
import Services from './pages/Servicess/Services';
import ContactSection from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Hiring from './pages/Hiring/Hiring';

import './styles/animations.css';

// ============================================
// 1. CUSTOM CURSOR (Always Active)
// ============================================
const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsHovering(target.closest('button') || target.closest('a') || target.closest('.cursor-pointer'));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="hidden md:block">
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-orange-500 rounded-full pointer-events-none z-[100000]"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "#ffffff" : "#f97316"
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-orange-600 rounded-full pointer-events-none z-[100000]"
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
      />
    </div>
  );
};

// ============================================
// 2. PARTICLE NETWORK BACKGROUND
// ============================================
const ParticleNetworkBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();
    class P {
      constructor() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; }
      update() { this.x += this.vx; this.y += this.vy; if (this.x < 0 || this.x > canvas.width) this.vx *= -1; if (this.y < 0 || this.y > canvas.height) this.vy *= -1; }
    }
    for (let i = 0; i < 80; i++) particles.push(new P());
    const anim = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(); ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fillStyle = 'rgba(249,115,22,0.4)'; ctx.fill();
        particles.forEach(p2 => {
          let d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 150) { ctx.beginPath(); ctx.strokeStyle = `rgba(249,115,22,${0.1 * (1 - d / 150)})`; ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); }
        });
      });
      requestAnimationFrame(anim);
    };
    anim();
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 bg-gray-50" />;
};

// ============================================
// 3. TECH GRID BACKGROUND
// ============================================
const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full bg-gray-50 pointer-events-none">
      <div className="absolute inset-0 bg-tech-grid" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-200/20 blur-[120px] rounded-full" />
    </div>
  );
};

// ============================================
// 4. MAIN APP LOGIC (CLEANED)
// ============================================
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Normal scroll behavior and custom cursor activation
    document.body.style.overflow = 'auto';
    document.body.style.cursor = 'none';
  }, []);

  return (
    <>
      <GridBackground />
      <ParticleNetworkBackground />

      {/* Custom Cursor always visible */}
      <CustomCursor />

      <div className="flex flex-col min-h-screen relative">
        <Navbar />

        <main className="flex-grow relative z-10">
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
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;