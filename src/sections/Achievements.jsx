import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import { achievements, certifications } from "../data"; // Mengambil data dari index.js

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-zinc-950 border-t border-white/5 text-white relative z-10 scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* === PRESTASI SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent inline-block">Prestasi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Flex Prestasi (untuk center item ganjil) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-16">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-0.75rem)] bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl flex items-start gap-4 hover:border-yellow-500/50 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500 shrink-0">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue-400 text-sm mb-2 font-medium">
                  {item.issuer} • {item.year}
                </p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === SERTIFIKASI SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent inline-block">Sertifikasi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Flex Sertifikasi (untuk center item ganjil) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full md:w-[calc(50%-0.75rem)] bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl flex items-start gap-4 hover:border-blue-500/50 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-blue-500/10 rounded-full text-blue-500 shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue-400 text-sm mb-2 font-medium">
                  {item.issuer} • {item.year}
                </p>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;