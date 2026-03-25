import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react"; // Import icon biasa
import { personalData } from "../data";   // Import data

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 pt-20 md:pt-0"
    >

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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-3xl opacity-40 animate-pulse"></div>

          {/* Bingkai & Foto */}
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-gray-800 to-gray-900 shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-white/10 group"
          >
            <img
              src={personalData.profileImage}
              alt={personalData.name}
              className="w-full h-full object-cover rounded-full border-4 border-[#030712] transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* KOLOM 2: TEKS KONTEN (Kanan di Laptop, Bawah di HP) */}
        <div className="text-center md:text-left max-w-2xl">
          
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4"
          >
            Halo, saya
          </motion.p>

          {/* Nama */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-500 mb-4 drop-shadow-2xl"
          >
            {personalData.name}
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient"
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
              className="bg-blue-600/90 backdrop-blur-md hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center gap-2 border border-blue-400/30"
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
                  className="p-4 bg-white/5 backdrop-blur-md rounded-full hover:bg-white/10 hover:text-blue-400 transition-all border border-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-gray-400"
                >
                  <social.icon size={22} />
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