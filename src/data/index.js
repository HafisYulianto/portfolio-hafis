// 1. IMPORT ICON & GAMBAR
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook
} from "lucide-react";

// GANTI BARIS IMPORT FOTO MENJADI INI:
import profileImg from '../assets/profile.jpg'; // <--- Perhatikan akhiran .jpg
import aeroSuohImg from '../assets/aerosuoh.png';
import sertifHimaIfImg from '../assets/sertifHimaIf.png';
import teknoComImg from '../assets/teknocom.png';



// =================================================================================
// DATA PERSONAL
// =================================================================================
export const personalData = {
  name: "Hafis Yulianto",
  role: "Web Developer | UI/UX Designer | Quality Assurance | Drone Pilot",
  
  // --- TAMBAHAN BARU: FOTO PROFIL ---
  profileImage: profileImg, 
  
  description: "Mahasiswa yang berfokus pada pengembangan website modern.",
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
};

// =================================================================================
// 2. SKILLS / KEAHLIAN
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
export const workExperiences = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    company: "PT Teknologi Maju",
    period: "Agustus 2024 - Sekarang",
    desc: "Membangun dashboard admin menggunakan React.js, mengintegrasikan API, dan memperbaiki bug pada tampilan mobile.",
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Fiverr / Projects",
    period: "Januari 2024 - Juli 2024",
    desc: "Mengerjakan project landing page untuk UMKM menggunakan HTML, CSS, dan JavaScript.",
  },
];

// =================================================================================
// 3b. PENGALAMAN ORGANISASI (ORGANIZATION EXPERIENCE)
// =================================================================================
export const organizationExperiences = [
  {
    id: 1,
    role: "Ketua Divisi Kominfo",
    company: "Himpunan Mahasiswa Informatika",
    period: "Januari 2023 - Desember 2023",
    desc: "Memimpin tim beranggotakan 10 orang untuk mengelola sosial media dan website himpunan.",
  },
  {
    id: 2,
    role: "Anggota Divisi Acara",
    company: "Panitia Seminar Nasional TI",
    period: "Mei 2023 - Agustus 2023",
    desc: "Mengkoordinasikan rundown acara dan memastikan peralatan teknis berjalan lancar saat hari H.",
  },
];

// =================================================================================
// 4. PRESTASI / ACHIEVEMENTS
// =================================================================================
export const achievements = [
  {
    id: 1,
    title: "Juara 1  Web Programming - Teknokrat Academic Expo",
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
    title: "Finalis KRTI  - Divisi Technology Development",
    issuer: "Puspresnas",
    year: "2024",
    desc: "Mengembangkan drone SAR hybrid yang mampu beroperasi di dua medan, darat dan udara, serta dilengkapi sistem deteksi untuk mengidentifikasi keberadaan manusia.",
  }
];

// =================================================================================
// 4b. SERTIFIKASI / CERTIFICATIONS
// =================================================================================
export const certifications = [
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
];

// =================================================================================
// 5. PROJECT PORTOFOLIO
// =================================================================================
export const projects = [
  {
    id: 1,
    title: "AeroSuoh",
    desc: "Platform pariwisata pintar dan dasbor pemantauan geotermal masa depan untuk kawasan Suoh.",
    // NOTE: Untuk menambahkan foto nanti, import foto di atas file ini lalu ganti 'null' di bawah dengan nama variabel fotonya.
    // Contoh: image: fotoAeroSuoh
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
  }
];



