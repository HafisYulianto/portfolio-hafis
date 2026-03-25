import React, { useState, useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.05] hover:border-blue-500/50 hover:-translate-y-2 transition-transform duration-500 group shadow-[0_0_30px_rgba(0,0,0,0.5)]"
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
      <div className="relative h-48 overflow-hidden">
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
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-400 transition-colors"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white rounded-full text-gray-900 hover:bg-blue-400 transition-colors"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* 2. Bagian Konten Teks */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.desc}
        </p>
        
        {/* Tags / Tech Stack */}
        <div className="flex flex-wrap gap-2">
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
  );
};

export default ProjectCard;