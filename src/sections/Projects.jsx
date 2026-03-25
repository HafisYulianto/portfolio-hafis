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
            Beberapa hasil yang pernah saya dan Tim kerjakan.
          </p>
        </motion.div>

        {/* Grid Card Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;