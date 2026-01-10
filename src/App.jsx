import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import FooterSection from './components/Footer';

import Home from './pages/Home/Home';
import Services from './pages/Servicess/Services';
import ContactSection from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Hiring from './pages/Hiring/Hiring';
import './styles/animations.css';
import CustomCursor from './components/CustomCursor';

// Circuit Board Loading Animation Component
const LoadingAnimation = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
        </div>

        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
          const delay = index * 0.1;
          return (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 origin-left"
              style={{
                transform: `rotate(${angle}deg)`,
                animation: `extendLine 0.8s ease-out ${delay}s forwards`
              }}
            >
              <div className="w-20 h-0.5 bg-gradient-to-r from-orange-600 to-transparent"></div>
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  animation: `nodeGlow 1.5s ease-in-out ${delay + 0.8}s infinite`
                }}
              ></div>
            </div>
          );
        })}

        <div className="absolute inset-0 border-2 border-orange-600/30 rounded-full" style={{ animation: 'spin-slow 4s linear infinite' }}></div>

        <div className="absolute top-full mt-12 left-1/2 -translate-x-1/2 text-center">
          <div className="text-orange-500 text-2xl font-bold mb-2">{progress}%</div>
          <div className="text-gray-400 text-sm tracking-wider">INITIALIZING SYSTEMS</div>
        </div>
      </div>

      <style>{`
        @keyframes extendLine {
          from { width: 0; }
          to { width: 5rem; }
        }
        @keyframes nodeGlow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 146, 60, 0.5); }
          50% { box-shadow: 0 0 20px rgba(251, 146, 60, 1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Particle Network Background Animation
const ParticleNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(249, 115, 22, 0.6)'; // Orange color
        ctx.fill();
      }
    }

    // Initialize particles
    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gray-50">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: 'block' }}
      />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && (
        <LoadingAnimation onLoadingComplete={() => setIsLoading(false)} />
      )}

      {!isLoading && (
        <>
          <ParticleNetworkBackground />

          <div className="flex flex-col min-h-screen relative">
            {/* <CustomCursor /> */}

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
      )}
    </Router>
  );
};

export default App;