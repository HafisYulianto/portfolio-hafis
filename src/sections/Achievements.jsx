import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "../data"; // Mengambil data dari index.js

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Prestasi & Sertifikasi</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-start gap-4 hover:border-yellow-500/50 transition-colors"
            >
              {/* Icon Piala */}
              <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-500 shrink-0">
                <Trophy size={24} />
              </div>
              
              {/* Teks */}
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