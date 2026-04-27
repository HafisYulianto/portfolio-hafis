import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard"; // Import Kartu tadi
import { projects } from "../data"; // Import Datanya

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0f] border-t border-white/5 relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-purple-600 bg-clip-text text-transparent inline-block">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4">
            Berikut adalah Beberapa Project yang pernah saya kerjakan.
          </p>
        </motion.div>

        {/* Flex Project (untuk center item ganjil) */}
        {projects.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/[0.02] border border-white/[0.05] rounded-3xl backdrop-blur-md">
            <h3 className="text-2xl font-bold text-gray-300 mb-2">Belum Ada Project Web</h3>
            <p className="text-gray-500">Silakan tambahkan data project web asli Anda di file <code className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded">src/data/index.js</code></p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;