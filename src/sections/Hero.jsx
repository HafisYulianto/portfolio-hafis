import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react"; // Import icon biasa
import { personalData } from "../data";   // Import data

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden px-6 pt-20 md:pt-0"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      {/* Container Utama: Flex jadi 2 kolom di desktop (Laptop) */}
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 z-10">

        {/* KOLOM 1: FOTO PROFIL (Kiri di Laptop, Atas di HP) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative shrink-0"
        >
          {/* Efek Cahaya di Belakang Foto */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 scale-110"></div>

          {/* Bingkai & Foto */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500/30 overflow-hidden shadow-2xl shadow-blue-500/20">
            <img
              src={personalData.profileImage}
              alt={personalData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* KOLOM 2: TEKS KONTEN (Kanan di Laptop, Bawah di HP) */}
        <div className="text-center md:text-left max-w-2xl">
          
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium text-lg mb-4"
          >
            Halo, saya
          </motion.p>

          {/* Nama */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {personalData.name}
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
          >
            {personalData.role}
          </motion.h2>

          {/* Deskripsi */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
          >
            {personalData.description}
          </motion.p>

          {/* Tombol & Sosmed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center md:items-start gap-6 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30 flex items-center gap-2"
            >
              Lihat Project <ArrowDown size={20} />
            </a>

            <div className="flex gap-4">
              {personalData.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-blue-400 transition-colors border border-gray-700"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;