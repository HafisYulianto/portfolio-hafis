import React from "react";
import { motion } from "framer-motion";
import { User, Target, Plane, Monitor } from "lucide-react";
import { personalData } from "../data";

const About = () => {
  return (
    <section id="about" className="py-20 relative scroll-mt-24 z-10">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Tentang Saya
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Bagian Kiri: Teks Narasi */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 text-gray-300 text-lg leading-relaxed"
          >
            <p>
              Halo! Saya <span className="text-blue-400 font-semibold">{personalData.name}</span>, seorang profesional muda dengan multi-disiplin di bidang teknologi. Fokus utama saya adalah menciptakan pengalaman digital yang menarik, responsif, dan mudah digunakan melalui peran saya sebagai <span className="text-white font-medium">Web Developer</span> dan <span className="text-white font-medium">UI/UX Designer</span>.
            </p>
            <p>
              Selain berkecimpung di dunia *coding* dan desain antarmuka, saya juga memiliki sertifikasi dan pengalaman aktif sebagai <span className="text-purple-400 font-semibold">Pilot Drone Profesional</span>. Ketertarikan saya pada teknologi UAV (Unmanned Aerial Vehicle) dan pengembangan web sering kali berpadu, seperti saat saya mengembangkan Dasbor Pemantauan Geotermal atau berkontribusi di divisi VTOL.
            </p>
            <p>
              Prinsip saya dalam bekerja adalah selalu menggabungkan kreativitas dengan standar kualitas yang tinggi (sebagai *Quality Assurance*), memastikan setiap *line of code* tidak hanya bekerja dengan baik, tetapi juga memberikan *"wow-factor"* bagi penggunanya.
            </p>
          </motion.div>

          {/* Bagian Kanan: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
          >
            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group">
              <Monitor className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Web Development</h3>
              <p className="text-sm text-gray-400">Membangun website modern dengan React, Next.js, dan Tailwind.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group">
              <Plane className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Drone Pilot</h3>
              <p className="text-sm text-gray-400">Sertifikasi APDI, mengoperasikan drone untuk pemetaan & SAR.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all group">
              <Target className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-400">Merancang antarmuka estetis dan pengalaman pengguna yang intuitif.</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-300/50 transition-all group">
              <User className="text-blue-300 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-400">Memastikan performa aplikasi berjalan mulus dan bebas dari bug.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
