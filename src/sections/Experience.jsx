import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

// ===========================
// DATA PENGALAMAN KERJA
// ===========================
const workExperiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "ZaiComTech",
    period: "2021",
    desc: "Mengembangkan dan memelihara aplikasi berbasis web, melakukan debugging, serta berkolaborasi dengan tim dalam penyelesaian proyek internal."
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Freelance Web Developer",
    period: "2022 - 2023",
    desc: "Mengerjakan beberapa project website untuk UMKM dan organisasi lokal."
  },
  {
    id: 3,
    role: "UI/UX Designer & QA",
    company: "PT Hempart Indonesia",
    period: "2025 - 2026",
    desc: "Merancang interface dan melakukan quality assurance untuk platform website ArkWork: SDM energi & migas."
  },
  {
    id: 4,
    role: "Backend Developer",
    company: "FSIP - Universitas Teknokrat Indonesia",
    period: "2026 - Sekarang",
    desc: "Merancang Sistem Infromasi Fakultas guna keperluan Akreditasi."
  }
];

// ===========================
// DATA ORGANISASI
// ===========================
const organizationExperiences = [
  {
    id: 1,
    role: "Divisi Web Development",
    company: "UKM Programming",
    period: "2023 - 2024",
    desc: "Terlibat dalam pengembangan aplikasi web internal dan pelatihan programming untuk anggota UKM."
  },
  {
    id: 2,
    role: "Member",
    company: "Novo Club Batch 3 by Paragon",
    period: "2023 - 2024",
    desc: "Mengikuti program pengembangan diri, kepemimpinan, soft skill, dan inovasi mahasiswa bersama Paragon."
  },
  {
    id: 3,
    role: "Staf Humas",
    company: "HIMA Informatika",
    period: "2023 - 2025",
    desc: "Mengelola komunikasi eksternal, publikasi kegiatan, serta menjaga hubungan organisasi melalui media sosial dan kolaborasi kampus."
  },
  {
    id: 4,
    role: "Staf Hubungan Luar Incoming",
    company: "Permikomnas",
    period: "2025 - 2026",
    desc: "Membangun relasi dengan organisasi dan instansi eksternal di bidang teknologi dan pendidikan serta mengoordinasikan kerja sama."
  },
  {
    id: 5,
    role: "Ketua Umum",
    company: "UKM Robotik",
    period: "2025 - 2026",
    desc: "Memimpin UKM Robotik, membuat program kerja, mengembangkan proyek robotika, dan mengadakan workshop, serta mengikuti kompetisi robotik nasional."
  },
  {
    id: 6,
    role: "Ketua",
    company: "HIMA INFORMATIKA",
    period: "2026 - 2027",
    desc: "Memimpin HIMA Informatika untuk unggul dalam prestasi, serta mampu memberikan dampak nyata bagi masyarakat melalui teknologi."
  },
];

// ===========================
// COMPONENT EXPERIENCE
// ===========================
const Experience = () => {
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
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">Riwayat Pengalaman</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: PENGALAMAN KERJA */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-400">
              <Briefcase /> Kerja
            </h3>
            
            <div className="relative border-l-2 border-white/10 ml-3 space-y-10">
              {workExperiences.map((exp, index) => (
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
              <Users /> Organisasi
            </h3>

            <div className="relative border-l-2 border-white/10 ml-3 space-y-10">
              {organizationExperiences.map((exp, index) => (
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
