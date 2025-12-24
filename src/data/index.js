// 1. IMPORT ICON & GAMBAR
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook,
  Layout, 
  Database, 
  Server, 
  PenTool, 
  CheckCircle, 
  Cpu 
} from "lucide-react"; 

// GANTI BARIS IMPORT FOTO MENJADI INI:
import profileImg from '../assets/profile.jpg'; // <--- Perhatikan akhiran .jpg



// =================================================================================
// DATA PERSONAL
// =================================================================================
export const personalData = {
  name: "Hafis Yulianto",
  role: "Frontend Developer | UI/UX Designer | Quality Assurance",
  
  // --- TAMBAHAN BARU: FOTO PROFIL ---
  profileImage: profileImg, 
  
  description: "Mahasiswa yang fokus membangun website interaktif dengan React dan mendesain antarmuka modern.",
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
  {
    category: "Frontend Developer",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "Vue.js",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Responsive Web Design"
    ],
    icon: Layout,
  },
  {
    category: "UI/UX Designer",
    items: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Design System",
      "Figma"
    ],
    icon: PenTool,
  },
  {
    category: "Quality Assurance",
    items: [
      "Manual Testing",
      "Test Case Writing",
      "Bug Reporting",
      "UI/UX Testing",
      "Functional Testing"
    ],
    icon: CheckCircle,
  },
  {
    category: "Robotics",
    items: [
      "Arduino",
      "ESP32",
      "Sensor Integration",
      "Embedded Programming",
      "Autonomous System"
    ],
    icon: Cpu,
  },
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
  },
  {
  id: 4,
  title: "Sertifikasi Junior Web Development",
  issuer: "Komdigi",
  year: "2025",
  desc: "Sertifikasi kompetensi di bidang pengembangan web yang mencakup dasar frontend, backend, serta penerapan standar pengembangan aplikasi web."
},

];

// =================================================================================
// 5. PROJECT PORTOFOLIO
// =================================================================================
export const projects = [
  {
    id: 1,
    title: "ArkWork – UI/UX & QA Platform SDM Energi",
    desc: "Platform digital pengembangan ekosistem SDM sektor energi dan migas. Berperan sebagai UI/UX Designer dan Quality Assurance untuk memastikan desain konsisten, usability optimal, dan sistem siap launching.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    tags: ["UI/UX", "QA", "Figma", "Web App"],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: "VTOL UAV KRTI – Autonomous Pick & Drop",
    desc: "Pengembangan wahana UAV VTOL autonomous untuk KRTI dengan kemampuan lepas landas vertikal, terbang horizontal, serta sistem pick and drop payload otomatis.",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    tags: ["VTOL", "Robotics", "Autonomous System", "KRTI"],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: "Drone SAR Hybrid (Darat & Udara)",
    desc: "Drone SAR hybrid yang mampu beroperasi di dua medan (darat dan udara) serta dilengkapi sistem deteksi untuk mengidentifikasi keberadaan manusia dalam misi pencarian dan penyelamatan.",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80",
    tags: ["SAR Drone", "Robotics", "Sensor", "Embedded"],
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: "Web Silapor - Sistem Lampung Melapor",
    desc: "Website pengaduan masyarakat berbasis web untuk memudahkan warga melaporkan masalah di lingkungan mereka secara online.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Frontend", "Firebase", "JavaScript", "Web App"],
    github: null,
    demo: null,
  },
];
