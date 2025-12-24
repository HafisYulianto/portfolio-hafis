import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users } from "lucide-react";

// ===========================
// DATA PENGALAMAN KERJA
// ===========================
const workExperiences = [
  {
    id: 1,
    role: "Software Engineer",
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
    period: "2025 - Present",
    desc: "Merancang interface dan melakukan quality assurance untuk platform website ArkWork: SDM energi & migas."
  }
];

// ===========================
// DATA ORGANISASI
// ===========================
const organizationExperiences = [
  {
    id: 1,
    role: "Staf Humas",
    company: "HIMA Informatika",
    period: "2023 - 2025",
    desc: "Mengelola komunikasi eksternal, publikasi kegiatan, serta menjaga hubungan organisasi melalui media sosial dan kolaborasi kampus."
  },
  {
    id: 2,
    role: "Staf Hubungan Luar Incoming",
    company: "Permikomnas",
    period: "2025 - 2026",
    desc: "Membangun relasi dengan organisasi dan instansi eksternal di bidang teknologi dan pendidikan serta mengoordinasikan kerja sama."
  },
  {
    id: 3,
    role: "Member",
    company: "Novo Club Batch 3 by Paragon",
    period: "2023 - 2024",
    desc: "Mengikuti program pengembangan diri, kepemimpinan, soft skill, dan inovasi mahasiswa bersama Paragon."
  },
  {
    id: 4,
    role: "Ketua Umum",
    company: "UKM Robotik",
    period: "2025 - 2026",
    desc: "Memimpin UKM Robotik, membuat program kerja, mengembangkan proyek robotika, dan mengadakan workshop, serta mengikuti kompetisi robotik nasional."
  },
  {
    id: 5,
    role: "Divisi Web Development",
    company: "UKM Programming",
    period: "2023 - 2024",
    desc: "Terlibat dalam pengembangan aplikasi web internal dan pelatihan programming untuk anggota UKM."
  }
];

// ===========================
// COMPONENT EXPERIENCE
// ===========================
const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Judul Utama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Riwayat Pengalaman</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* KOLOM KIRI: PENGALAMAN KERJA */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-blue-400">
              <Briefcase /> Pengalaman Kerja
            </h3>
            
            <div className="relative border-l-2 border-gray-800 ml-3 space-y-10">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950"></div>
                  
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
                  <span className="text-xs font-medium text-blue-300 bg-blue-500/10 px-2 py-1 rounded mb-3 inline-block">
                    {exp.period}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* KOLOM KANAN: PENGALAMAN ORGANISASI */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2 text-purple-400">
              <Users /> Organisasi
            </h3>

            <div className="relative border-l-2 border-gray-800 ml-3 space-y-10">
              {organizationExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  {/* Dot (Warna Ungu biar beda) */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-gray-950"></div>
                  
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
                  <span className="text-xs font-medium text-purple-300 bg-purple-500/10 px-2 py-1 rounded mb-3 inline-block">
                    {exp.period}
                  </span>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {exp.desc}
                  </p>
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
