import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import bgMusic from '../assets/bg-music.mp3';
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Efek navbar berubah warna saat discroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div 
        className={`flex justify-between items-center transition-all duration-500 mx-auto ${
          scrolled 
            ? "w-full max-w-4xl bg-[#030712]/80 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.8)]" 
            : "w-full container px-2 py-2 bg-transparent"
        }`}
      >
        {/* Logo / Nama */}
        <a href="#" className="text-3xl font-extrabold tracking-tighter bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform flex items-center">
          H <span className="text-white"> y</span><span className="text-blue-500"></span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-all font-medium tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Tombol Kanan (Music & Hamburger) */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMusic} 
            className="text-gray-300 hover:text-white transition-colors p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10"
            title="Play/Pause Music"
          >
            {isPlaying ? <Volume2 size={20} className="text-blue-400" /> : <VolumeX size={20} />}
          </button>

          {/* Tombol Hamburger (Mobile) */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="flex flex-col items-center py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white text-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elemen Musik */}
      <audio ref={audioRef} src={bgMusic} loop />
    </header>
  );
};

export default Navbar;