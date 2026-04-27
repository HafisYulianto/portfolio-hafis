import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook
} from "lucide-react";

import profileImg from '../assets/profile.jpg';
import aeroSuohImg from '../assets/aerosuoh.png';
import sertifHimaIfImg from '../assets/sertifHimaIf.png';
import teknoComImg from '../assets/teknocom.png';
import cvBuilderImg from '../assets/cv-builder.png';
import transparansiSkorKinerjaImg from '../assets/transparansiSkorKinerja.png';

// =================================================================================
// 1. DATA PERSONAL
// =================================================================================
export const personalData = {
  name: "Hafis Yulianto",
  profileImage: profileImg, 
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/hafisyulianto",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/hafisyulianto",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/hafisyulianto_",
      icon: Instagram,
    },
  ],
  id: {
    role: "Web Developer | UI/UX Designer | Quality Assurance | Pilot Drone",
    description: "Mahasiswa yang berfokus pada pengembangan website modern.",
  },
  en: {
    role: "Web Developer | UI/UX Designer | Quality Assurance | Drone Pilot",
    description: "A student focusing on modern website development.",
  }
};

// =================================================================================
// 2. SKILLS / KEAHLIAN (Icons remain the same)
// =================================================================================
export const skills = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
];

// =================================================================================
// 3. PENGALAMAN KERJA (WORK EXPERIENCE)
// =================================================================================
export const workExperiences = {
  id: [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "ZaiComTech",
      period: "2021",
      desc: "Mengembangkan dan memelihara aplikasi berbasis web, melakukan debugging, serta berkolaborasi dengan tim dalam penyelesaian proyek internal.",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Freelance Web Developer",
      period: "2022 - 2023",
      desc: "Mengerjakan beberapa project website untuk UMKM dan organisasi lokal.",
    },
    {
      id: 3,
      role: "UI/UX Designer & QA",
      company: "PT Hempart Indonesia",
      period: "2025 - 2026",
      desc: "Merancang interface dan melakukan quality assurance untuk platform website ArkWork: SDM energi & migas.",
    },
    {
      id: 4,
      role: "Backend Developer",
      company: "FSIP - Universitas Teknokrat Indonesia",
      period: "2026 - Sekarang",
      desc: "Merancang Sistem Infromasi Fakultas guna keperluan Akreditasi.",
    }
  ],
  en: [
    {
      id: 1,
      role: "Software Engineer Intern",
      company: "ZaiComTech",
      period: "2021",
      desc: "Developed and maintained web-based applications, performed debugging, and collaborated with the team to complete internal projects.",
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Freelance Web Developer",
      period: "2022 - 2023",
      desc: "Completed several website projects for MSMEs and local organizations.",
    },
    {
      id: 3,
      role: "UI/UX Designer & QA",
      company: "PT Hempart Indonesia",
      period: "2025 - 2026",
      desc: "Designed interfaces and conducted quality assurance for the ArkWork website platform: Human Resources for Energy & Oil and Gas.",
    },
    {
      id: 4,
      role: "Backend Developer",
      company: "FSIP - Universitas Teknokrat Indonesia",
      period: "2026 - Present",
      desc: "Designed the Faculty Information System for Accreditation purposes.",
    }
  ]
};

// =================================================================================
// 3b. PENGALAMAN ORGANISASI (ORGANIZATION EXPERIENCE)
// =================================================================================
export const organizationExperiences = {
  id: [
    {
      id: 1,
      role: "Divisi Web Development",
      company: "UKM Programming",
      period: "2023 - 2024",
      desc: "Terlibat dalam pengembangan aplikasi web internal dan pelatihan programming untuk anggota UKM.",
    },
    {
      id: 2,
      role: "Member",
      company: "Novo Club Batch 3 by Paragon",
      period: "2023 - 2024",
      desc: "Mengikuti program pengembangan diri, kepemimpinan, soft skill, dan inovasi mahasiswa bersama Paragon.",
    },
    {
      id: 3,
      role: "Staf Humas",
      company: "HIMA Informatika",
      period: "2023 - 2025",
      desc: "Mengelola komunikasi eksternal, publikasi kegiatan, serta menjaga hubungan organisasi melalui media sosial dan kolaborasi kampus.",
    },
    {
      id: 4,
      role: "Staf Hubungan Luar Incoming",
      company: "Permikomnas",
      period: "2025 - 2026",
      desc: "Membangun relasi dengan organisasi dan instansi eksternal di bidang teknologi dan pendidikan serta mengoordinasikan kerja sama.",
    },
    {
      id: 5,
      role: "Ketua Umum",
      company: "UKM Robotik",
      period: "2025 - 2026",
      desc: "Memimpin UKM Robotik, membuat program kerja, mengembangkan proyek robotika, dan mengadakan workshop, serta mengikuti kompetisi robotik nasional.",
    },
    {
      id: 6,
      role: "Ketua",
      company: "HIMA INFORMATIKA",
      period: "2026 - 2027",
      desc: "Memimpin HIMA Informatika untuk unggul dalam prestasi, serta mampu memberikan dampak nyata bagi masyarakat melalui teknologi.",
    }
  ],
  en: [
    {
      id: 1,
      role: "Web Development Division",
      company: "UKM Programming",
      period: "2023 - 2024",
      desc: "Involved in developing internal web applications and conducting programming training for club members.",
    },
    {
      id: 2,
      role: "Member",
      company: "Novo Club Batch 3 by Paragon",
      period: "2023 - 2024",
      desc: "Participated in a student development program covering leadership, soft skills, and innovation with Paragon.",
    },
    {
      id: 3,
      role: "Public Relations Staff",
      company: "HIMA Informatika",
      period: "2023 - 2025",
      desc: "Managed external communications, event publications, and maintained organizational relationships through social media and campus collaborations.",
    },
    {
      id: 4,
      role: "Incoming External Relations Staff",
      company: "Permikomnas",
      period: "2025 - 2026",
      desc: "Built relationships with external organizations and institutions in technology and education, and coordinated partnerships.",
    },
    {
      id: 5,
      role: "Chairman",
      company: "UKM Robotik",
      period: "2025 - 2026",
      desc: "Led the Robotics Club, created work programs, developed robotics projects, organized workshops, and participated in national robotic competitions.",
    },
    {
      id: 6,
      role: "Chairman",
      company: "HIMA INFORMATIKA",
      period: "2026 - 2027",
      desc: "Led the Informatics Student Association to excel in achievements and make a tangible impact on society through technology.",
    }
  ]
};

// =================================================================================
// 4. PRESTASI / ACHIEVEMENTS
// =================================================================================
export const achievements = {
  id: [
    {
      id: 1,
      title: "Juara 1 Web Programming - Teknokrat Academic Expo",
      issuer: "Universitas Teknokrat Indonesia",
      year: "2025",
      desc: "Kompetisi Web Programming dengan website yang di buat, SiLapor (Sistem Lampung Melapor).",
    },
    {
      id: 2,
      title: "Juara 1 Wilayah 1 KRTI - Divisi VTOL",
      issuer: "Puspresnas",
      year: "2025",
      desc: "Wahana UAV VTOL autonomous yang mampu lepas landas vertikal, terbang horizontal, serta melakukan pick and drop payload secara otomatis.",
    },
    {
      id: 3,
      title: "Finalis KRTI - Divisi Technology Development",
      issuer: "Puspresnas",
      year: "2024",
      desc: "Mengembangkan drone SAR hybrid yang mampu beroperasi di dua medan, darat dan udara, serta dilengkapi sistem deteksi untuk mengidentifikasi keberadaan manusia.",
    }
  ],
  en: [
    {
      id: 1,
      title: "1st Place Web Programming - Teknokrat Academic Expo",
      issuer: "Universitas Teknokrat Indonesia",
      year: "2025",
      desc: "Web Programming competition featuring the created website, SiLapor (Lampung Reporting System).",
    },
    {
      id: 2,
      title: "1st Place Region 1 KRTI - VTOL Division",
      issuer: "Puspresnas",
      year: "2025",
      desc: "An autonomous VTOL UAV capable of vertical takeoff, horizontal flight, and automatic payload pick-and-drop.",
    },
    {
      id: 3,
      title: "KRTI Finalist - Technology Development Division",
      issuer: "Puspresnas",
      year: "2024",
      desc: "Developed a hybrid SAR drone capable of operating in both land and air, equipped with a detection system to identify human presence.",
    }
  ]
};

// =================================================================================
// 4b. SERTIFIKASI / CERTIFICATIONS
// =================================================================================
export const certifications = {
  id: [
    {
      id: 1,
      title: "Sertifikasi Junior Web Developer",
      issuer: "BNSP - Badan Nasional Sertifikasi Profesi",
      year: "2025",
      desc: "Sertifikasi kompetensi di bidang pengembangan web yang mencakup dasar frontend, backend, serta penerapan standar pengembangan aplikasi web."
    },
    {
      id: 2,
      title: "Sertifikasi Pilot Drone Profesional",
      issuer: "APDI - Asosiasi Pilot Drone Indonesia",
      year: "2025",
      desc: "Sertifikasi kompetensi di bidang pilot drone yang mencakup dasar drone, serta kompetensi teknis, mematuhi regulasi penerbangan, dan menjamin keselamatan operasional."
    }
  ],
  en: [
    {
      id: 1,
      title: "Junior Web Developer Certification",
      issuer: "BNSP - Indonesian Professional Certification Authority",
      year: "2025",
      desc: "Competency certification in web development covering frontend and backend basics, and web application development standards."
    },
    {
      id: 2,
      title: "Professional Drone Pilot Certification",
      issuer: "APDI - Indonesian Drone Pilot Association",
      year: "2025",
      desc: "Competency certification in drone piloting covering drone basics, technical competence, flight regulation compliance, and operational safety."
    }
  ]
};

// =================================================================================
// 5. PROJECT PORTOFOLIO
// =================================================================================
export const projects = {
  id: [
    {
      id: 1,
      title: "AeroSuoh",
      desc: "Platform pariwisata pintar dan dasbor pemantauan geotermal masa depan untuk kawasan Suoh.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Pariwisata", "Dashboard"],
      github: null,
      demo: "https://aero-suoh.vercel.app/",
    },
    {
      id: 2,
      title: "Sertifikat Generator",
      desc: "Aplikasi web berbasis Client-Side murni untuk membuat dan mengunduh ratusan sertifikat secara otomatis. Dibuat khusus untuk mempermudah panitia kegiatan HIMA Informatika Universitas Teknokrat Indonesia (UTI).",
      image: sertifHimaIfImg,
      tags: ["Web Dev", "Sertifikat Generator", "Client-Side"],
      github: null,
      demo: "https://sertifikat-generator-hima-informati.vercel.app/",
    },
    {
      id: 3,
      title: "TeknoCom",
      desc: "Platform informasi berbasis web untuk mempromosikan kegiatan dan informasi seputar kompetisi International dibidang IT",
      image: teknoComImg,
      tags: ["Web Dev", "Informasi Kompetisi", "International"],
      github: null,
      demo: "https://teknocom.teknokrat.ac.id/",
    },
    {
      id: 4,
      title: "Cv-Builder",
      desc: "Web app ringan untuk membuat CV secara cepat: isi form di kiri, lihat preview real‑time di kanan, pilih tema & template, lalu ekspor ke PDF. Data otomatis tersimpan di browser (localStorage).",
      image: cvBuilderImg,
      tags: ["Web Dev", "Cv-Builder", "Auto-Generate"],
      github: null,
      demo: "https://cv-builder-by-hy.vercel.app/",
    },
    {
      id: 5,
      title: "Transparansi Skor & Kinerja",
      desc: "Platform digital untuk memantau keaktifan dan kontribusi seluruh anggota HIMA Informatika secara real-time.",
      image: transparansiSkorKinerjaImg, 
      tags: ["Web Dev", "HIMA IF", "Real-time"],
      github: null,
      demo: "https://app.himaif.web.id/",
    }
  ],
  en: [
    {
      id: 1,
      title: "AeroSuoh",
      desc: "A smart tourism platform and futuristic geothermal monitoring dashboard for the Suoh region.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Tourism", "Dashboard"],
      github: null,
      demo: "https://aero-suoh.vercel.app/",
    },
    {
      id: 2,
      title: "Certificate Generator",
      desc: "A pure Client-Side web app to automatically generate and download hundreds of certificates. Built specifically to assist event committees at the Informatics Student Association.",
      image: sertifHimaIfImg,
      tags: ["Web Dev", "Generator", "Client-Side"],
      github: null,
      demo: "https://sertifikat-generator-hima-informati.vercel.app/",
    },
    {
      id: 3,
      title: "TeknoCom",
      desc: "A web-based information platform to promote activities and news regarding International IT competitions.",
      image: teknoComImg,
      tags: ["Web Dev", "Competition Info", "International"],
      github: null,
      demo: "https://teknocom.teknokrat.ac.id/",
    },
    {
      id: 4,
      title: "Cv-Builder",
      desc: "A lightweight web app to quickly build a CV: fill the form on the left, see a real-time preview on the right, pick a theme, and export to PDF. Data auto-saves to localStorage.",
      image: cvBuilderImg,
      tags: ["Web Dev", "CV-Builder", "Auto-Generate"],
      github: null,
      demo: "https://cv-builder-by-hy.vercel.app/",
    },
    {
      id: 5,
      title: "Score & Performance Transparency",
      desc: "A digital platform to monitor the activity and contribution of all Informatics Student Association members in real-time.",
      image: transparansiSkorKinerjaImg, 
      tags: ["Web Dev", "Organization", "Real-time"],
      github: null,
      demo: "https://app.himaif.web.id/",
    }
  ]
};