import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { workExperiences, organizationExperiences } from "../data";

// ===========================
// COMPONENT EXPERIENCE
// ===========================
const Experience = () => {
  const { language } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-[#060606] border-t border-white/5 text-white relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
            {language === 'id' ? "Riwayat Pengalaman" : "Experience History"}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: PENGALAMAN KERJA */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-400">
              <Briefcase /> {language === 'id' ? "Kerja" : "Work"}
            </h3>
            
            <div className="relative border-l-2 border-white/10 ml-3 space-y-10">
              {workExperiences[language].map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Glowing Dot */}
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#030712] shadow-[0_0_15px_rgba(59,130,246,0.8)]"></div>
                  
                  {/* Glass Card */}
                  <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl shadow-xl hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300 group">
                    <h4 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <div className="text-gray-400 text-sm mb-3">{exp.company}</div>
                    <span className="text-xs font-semibold text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full mb-4 inline-block border border-blue-500/20">
                      {exp.period}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: PENGALAMAN ORGANISASI */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-400">
              <Users /> {language === 'id' ? "Organisasi" : "Organization"}
            </h3>

            <div className="relative border-l-2 border-white/10 ml-3 space-y-10">
              {organizationExperiences[language].map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Glowing Dot (Purple) */}
                  <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#030712] shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
                  
                  {/* Glass Card */}
                  <div className="bg-white/[0.02] backdrop-blur-md border border-white/[0.05] p-6 rounded-2xl shadow-xl hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 group">
                    <h4 className="text-xl font-bold group-hover:text-purple-400 transition-colors">{exp.role}</h4>
                    <div className="text-gray-400 text-sm mb-3">{exp.company}</div>
                    <span className="text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full mb-4 inline-block border border-purple-500/20">
                      {exp.period}
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
