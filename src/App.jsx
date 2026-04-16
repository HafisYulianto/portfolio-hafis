import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Experience from './sections/Experience';     // <--- Wajib ada
import Achievements from './sections/Achievements'; // <--- Wajib ada
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import BackToTop from './components/BackToTop';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-hidden font-sans">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left z-[100] shadow-[0_0_15px_rgba(59,130,246,1)]"
        style={{ scaleX }}
      />
      {/* Background Orbs with HW acceleration */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none animate-blob will-change-transform"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none animate-blob will-change-transform" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none animate-blob will-change-transform" style={{ animationDelay: '4s' }}></div>

      {/* Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Achievements />
        <Projects />
        <Contact />
        <BackToTop />
      </main>
    </div>
  )
}

export default App;