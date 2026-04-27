import React from "react";
import { motion } from "framer-motion";
import { User, Target, Plane, Monitor } from "lucide-react";
import { personalData } from "../data";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { language } = useLanguage();
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
            {language === 'id' ? "Tentang Saya" : "About Me"}
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
            {language === 'id' ? (
              <>
                <p>
                  Halo! Saya <span className="text-blue-400 font-semibold">{personalData.name}</span>, seorang profesional muda dengan multi-disiplin di bidang teknologi. Fokus utama saya adalah menciptakan pengalaman digital yang menarik, responsif, dan mudah digunakan melalui peran saya sebagai <span className="text-white font-medium">Web Developer</span> dan <span className="text-white font-medium">UI/UX Designer</span>.
                </p>
                <p>
                  Selain berkecimpung di dunia *coding* dan desain antarmuka, saya juga memiliki sertifikasi dan pengalaman aktif sebagai <span className="text-purple-400 font-semibold">Pilot Drone Profesional</span>. Ketertarikan saya pada teknologi UAV (Unmanned Aerial Vehicle) dan pengembangan web sering kali berpadu, seperti saat saya mengembangkan Dasbor Pemantauan Geotermal atau berkontribusi di divisi VTOL.
                </p>
                <p>
                  Prinsip saya dalam bekerja adalah selalu menggabungkan kreativitas dengan standar kualitas yang tinggi (sebagai *Quality Assurance*), memastikan setiap *line of code* tidak hanya bekerja dengan baik, tetapi juga memberikan *"wow-factor"* bagi penggunanya.
                </p>
              </>
            ) : (
              <>
                <p>
                  Hello! I am <span className="text-blue-400 font-semibold">{personalData.name}</span>, a young professional with multi-disciplinary skills in technology. My main focus is creating engaging, responsive, and user-friendly digital experiences through my roles as a <span className="text-white font-medium">Web Developer</span> and <span className="text-white font-medium">UI/UX Designer</span>.
                </p>
                <p>
                  Besides coding and interface design, I also hold certification and active experience as a <span className="text-purple-400 font-semibold">Professional Drone Pilot</span>. My interest in UAV (Unmanned Aerial Vehicle) technology often blends with web development, such as when I developed a Geothermal Monitoring Dashboard or contributed to the VTOL division.
                </p>
                <p>
                  My working principle is to always combine creativity with high quality standards (as a *Quality Assurance*), ensuring every *line of code* not only works well but also delivers a *"wow-factor"* to its users.
                </p>
              </>
            )}
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
              <p className="text-sm text-gray-400">{language === 'id' ? "Membangun website modern dengan React, Next.js, dan Tailwind." : "Building modern websites with React, Next.js, and Tailwind."}</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all group">
              <Plane className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Drone Pilot</h3>
              <p className="text-sm text-gray-400">{language === 'id' ? "Sertifikasi APDI, mengoperasikan drone untuk pemetaan & SAR." : "APDI certified, operating drones for mapping & SAR operations."}</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all group">
              <Target className="text-indigo-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-400">{language === 'id' ? "Merancang antarmuka estetis dan pengalaman pengguna yang intuitif." : "Designing aesthetic interfaces and intuitive user experiences."}</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-300/50 transition-all group">
              <User className="text-blue-300 mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-400">{language === 'id' ? "Memastikan performa aplikasi berjalan mulus dan bebas dari bug." : "Ensuring application performance runs smoothly and bug-free."}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
