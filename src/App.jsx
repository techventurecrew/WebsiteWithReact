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
// 1. IMPROVED CUSTOM CURSOR (Tech Style)
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
// 2. LOADING ANIMATION COMPONENT
// ============================================
const LoadingAnimation = ({ onLoadingComplete }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState("Ready to enter CrewTechventure");
  const [isHovered, setIsHovered] = useState(false);

  const handleLogoClick = () => {
    setIsClicked(true);
    setMessage("Let's go");
    setTimeout(() => onLoadingComplete(), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Interaction Area */}
        <motion.div
          className="relative cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={handleLogoClick}
          animate={isClicked ? {
            scale: [1, 1.2, 0],
            rotate: [0, 1080],
            opacity: [1, 1, 0]
          } : {
            scale: isHovered ? 1.05 : 1
          }}
          transition={{ duration: isClicked ? 2 : 0.4, ease: "easeInOut" }}
        >
          {/* Animated Ambient Glow behind Logo */}
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-600/20 blur-3xl"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* The Main Logo Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <img
              src="/Images/crew.png"
              alt="CrewTechVenture Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            // No more fallback CT text here; it strictly shows your image
            />

            {/* Spinning Outer Border - Only visible when NOT clicked */}
            {!isClicked && (
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="50%"
                  cy="50%"
                  r="48%"
                  stroke="#f97316"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="10 20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            )}
          </div>
        </motion.div>

        {/* Text Area */}
        <motion.div
          className="mt-12 text-center"
          animate={isClicked ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-orange-500 tracking-wider">
            {message}
          </h2>
          {!isClicked && (
            <motion.p
              className="text-orange-300/60 mt-4 flex items-center justify-center gap-2 text-lg"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click Logo to Start <span>→</span>
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
// ============================================
// 3. PARTICLE NETWORK BACKGROUND
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
// 4. MAIN APP LOGIC WRAPPER
// ============================================
const AppContent = () => {
  const [isHomeLoading, setIsHomeLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Control scrolling and body styles
  useEffect(() => {
    if (isHomePage && isHomeLoading) {
      document.body.style.overflow = 'hidden';
      document.body.style.cursor = 'default'; // Regular cursor on loader
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.cursor = 'none'; // Custom cursor for site
    }
  }, [isHomePage, isHomeLoading]);

  // Reset loading if user navigates back to Home
  useEffect(() => {
    if (isHomePage) setIsHomeLoading(true);
  }, [location.pathname]);

  const showNavAndFooter = !(isHomePage && isHomeLoading);

  return (
    <>
      {/* Show custom cursor only when not in loading state */}
      {!isHomeLoading && <CustomCursor />}

      <ParticleNetworkBackground />

      <AnimatePresence>
        {isHomePage && isHomeLoading && (
          <LoadingAnimation onLoadingComplete={() => setIsHomeLoading(false)} />
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen relative">
        {showNavAndFooter && <Navbar />}

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

        {showNavAndFooter && <FooterSection />}
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