import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { personalData } from "../data";

const Contact = () => {
  return (
    <footer id="contact" className="py-20 bg-gradient-to-b from-transparent to-black text-white relative scroll-mt-24">
      <div className="container mx-auto px-6 text-center">
        
        {/* Judul & Ajakan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Tertarik Bekerja Sama?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Saya selalu terbuka untuk mendiskusikan project baru, ide kreatif, 
            atau kesempatan menjadi bagian dari tim Anda.
          </p>

          {/* Tombol Email Besar (VERSI GMAIL DIRECT LINK) */}
          <a
            // Link ini akan memaksa browser membuka Gmail Compose
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hafisyulianto540@gmail.com&su=Tawaran%20Kerjasama&body=Halo%20Hafis,%20saya%20tertarik%20untuk%20mendiskusikan%20project..."
            target="_blank" // Membuka di tab baru
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-md hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 border border-blue-400/30"
          >
            <Mail size={24} />
            Hubungi Saya
          </a>
        </motion.div>

        <hr className="border-gray-800 my-12" />

        {/* Footer Bawah */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-blue-400 font-medium">{personalData.name}</span>. All rights reserved.
          </p>

          {/* Social Icons Kecil */}
          <div className="flex gap-4">
            {personalData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;