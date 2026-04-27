import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data"; 
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { language } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-slate-950 border-t border-white/5 shadow-inner text-white relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Animasi cuma jalan sekali pas discroll
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent inline-block">
            {language === 'id' ? "Keahlian" : "Skills"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            {language === 'id' ? "Tools dan teknologi yang saya gunakan." : "Tools and technologies I use."}
          </p>
        </motion.div>

        {/* Grid Card Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:bg-white/[0.08] hover:-translate-y-2 transition-all duration-300 group gap-4"
            >
              <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-110">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;