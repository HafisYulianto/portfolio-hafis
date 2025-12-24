import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data"; // Ambil data skills dari file data

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }} // Animasi cuma jalan sekali pas discroll
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools dan teknologi yang saya gunakan.
          </p>
        </motion.div>

        {/* Grid Card Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors group"
            >
              {/* Header Card (Icon & Judul) */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <skill.icon size={32} />
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>

              {/* List Item Skill (Badges) */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-900 rounded-lg text-gray-300 text-sm border border-gray-700 hover:text-blue-400 hover:border-blue-400/50 transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;