import React, { useState, useRef, useEffect } from "react";
import { Github, ExternalLink, Folder, Info, X } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const ProjectCard = ({ project, index }) => {
  const { language } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  // 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Set for Spotlight
    setMousePos({ x: mouseX, y: mouseY });

    // Set for 3D Tilt
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Close modal on Escape key press and manage scroll locking
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <div style={{ perspective: "1000px" }} className="h-full">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative flex flex-col h-full bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 transition-transform duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        >
          {/* Spotlight overlay */}
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 z-50 transition duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.8), transparent 40%)`,
              mixBlendMode: "overlay"
            }}
          />

          {/* 1. Bagian Gambar */}
          <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center">
                <div className="p-4 bg-white/5 rounded-full border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                  <Folder size={40} className="text-purple-400 group-hover:text-purple-300" />
                </div>
              </div>
            )}
            
            {/* Overlay Gelap saat Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
                className="px-4 py-2 bg-blue-600/90 hover:bg-blue-500 text-white rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer"
              >
                <Info size={14} />
                {language === 'id' ? "Lihat Detail" : "View Details"}
              </button>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 bg-white/20 hover:bg-white text-white hover:text-gray-900 rounded-full transition-all backdrop-blur-md cursor-pointer"
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>

          {/* 2. Bagian Konten Teks */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 
              onClick={() => setIsModalOpen(true)}
              className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 line-clamp-2 text-justify">
              {project.desc}
            </p>
            
            {/* Tombol Lihat Detail Teks */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold mb-4 w-fit transition-colors group/btn cursor-pointer"
            >
              <Info size={14} className="group-hover/btn:rotate-12 transition-transform" />
              {language === 'id' ? "Lihat Detail Proyek →" : "View Project Details →"}
            </button>

            {/* Tags / Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* POP-UP MODAL DETAIL PROYEK (KONSISTEN & TANPA TERTINDIH SCROLL) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card (Ukuran Konsisten & Responsif) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-xl bg-[#12131c] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.3)] z-10 flex flex-col h-[520px] sm:h-[560px] max-h-[85vh]"
            >
              {/* Tombol Close X */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 text-gray-300 hover:text-white rounded-full backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header & Image (Tinggi Tetap) */}
              <div className="relative h-44 sm:h-48 w-full flex-shrink-0 overflow-hidden bg-black/40">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/30 to-purple-900/20 flex items-center justify-center">
                    <Folder size={60} className="text-purple-400/80" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12131c] via-[#12131c]/50 to-transparent" />
              </div>

              {/* Modal Content Container */}
              <div className="p-5 sm:p-6 -mt-8 relative z-10 flex flex-col flex-grow overflow-hidden">
                
                {/* Badges / Tags */}
                <div className="flex flex-wrap gap-2 mb-2 flex-shrink-0">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex-shrink-0 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Header Label Deskripsi (Di Luar Box Scroll agar Tidak Tertindih) */}
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1.5 flex-shrink-0">
                  {language === 'id' ? "Deskripsi Lengkap Proyek" : "Full Project Overview"}
                </h4>

                {/* Box Teks Deskripsi Scrollable Murni */}
                <div className="flex-grow overflow-y-auto modal-scrollbar bg-white/[0.03] p-3.5 sm:p-4 rounded-2xl border border-white/[0.05] my-1 max-h-[140px] sm:max-h-[170px]">
                  <p className="whitespace-pre-line text-gray-300 text-xs sm:text-sm leading-relaxed text-justify pr-1">
                    {project.fullDesc || project.desc}
                  </p>
                </div>

                {/* CTA Action Buttons Footer (Tetap di Bawah) */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10 mt-auto flex-shrink-0">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[130px] px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-xl text-center text-xs sm:text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={16} />
                      {language === 'id' ? "Buka Live Demo" : "Visit Live Demo"}
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-center text-xs sm:text-sm border border-white/10 flex items-center justify-center gap-2 transition-all"
                    >
                      <Github size={16} />
                      {language === 'id' ? "Source Code" : "View Code"}
                    </a>
                  )}

                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors ml-auto cursor-pointer"
                  >
                    {language === 'id' ? "Tutup" : "Close"}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;