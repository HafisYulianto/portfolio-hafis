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
import blueAgencyImg from '../assets/blueAgency.png';
import himaIfImg from '../assets/hima-if.png';

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
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
      { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ]
  },
  {
    category: "Tools & Design",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" }
    ]
  }
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
    },
    {
      id: 5,
      role: "Asisten Dosen FTIK",
      company: "Universitas Teknokrat Indonesia",
      period: "2025 - Sekarang",
      desc: "Membantu kegiatan perkuliahan dan praktikum mahasiswa di lingkungan Fakultas Teknik dan Ilmu Komputer.",
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
    },
    {
      id: 5,
      role: "FTIK Teaching Assistant",
      company: "Universitas Teknokrat Indonesia",
      period: "2025 - Present",
      desc: "Assisted in lectures and student practicums within the Faculty of Engineering and Computer Science.",
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
      title: "Juara 1 Web Design - TeknoCom International Competition",
      issuer: "TeknoCom International",
      year: "2026",
      desc: "Meraih Juara 1 dalam kategori Web Design pada kompetisi internasional TeknoCom 2026 dengan mengusung tema 'Next-Generation Technologies for Global Challenges'.",
    },
    {
      id: 2,
      title: "Juara 1 Web Programming - Teknokrat Academic Expo",
      issuer: "Universitas Teknokrat Indonesia",
      year: "2025",
      desc: "Kompetisi Web Programming dengan website yang di buat, SiLapor (Sistem Lampung Melapor).",
    },
    {
      id: 3,
      title: "Juara 1 Wilayah 1 KRTI - Divisi VTOL",
      issuer: "Puspresnas",
      year: "2025",
      desc: "Wahana UAV VTOL autonomous yang mampu lepas landas vertikal, terbang horizontal, serta melakukan pick and drop payload secara otomatis.",
    },
    {
      id: 4,
      title: "Finalis KRTI - Divisi Technology Development",
      issuer: "Puspresnas",
      year: "2024",
      desc: "Mengembangkan drone SAR hybrid yang mampu beroperasi di dua medan, darat dan udara, serta dilengkapi sistem deteksi untuk mengidentifikasi keberadaan manusia.",
    }
  ],
  en: [
    {
      id: 1,
      title: "1st Place Web Design - TeknoCom International Competition",
      issuer: "TeknoCom International",
      year: "2026",
      desc: "Achieved 1st Place in the Web Design category at the TeknoCom 2026 International Competition under the theme 'Next-Generation Technologies for Global Challenges'.",
    },
    {
      id: 2,
      title: "1st Place Web Programming - Teknokrat Academic Expo",
      issuer: "Universitas Teknokrat Indonesia",
      year: "2025",
      desc: "Web Programming competition featuring the created website, SiLapor (Lampung Reporting System).",
    },
    {
      id: 3,
      title: "1st Place Region 1 KRTI - VTOL Division",
      issuer: "Puspresnas",
      year: "2025",
      desc: "An autonomous VTOL UAV capable of vertical takeoff, horizontal flight, and automatic payload pick-and-drop.",
    },
    {
      id: 4,
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
      fullDesc: "AeroSuoh adalah platform digital pelopor yang menggabungkan potensi pariwisata alam dan pemantauan aktivitas geotermal di kawasan Suoh, Lampung Barat. Aplikasi ini menyediakan informasi destinasi wisata secara interaktif, peta navigasi lokasi geotermal, rekomendasi rute jelajah, hingga visualisasi data kondisi area dan pemantauan sensor lingkungan untuk menjamin keamanan para wisatawan dan peneliti.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Pariwisata", "Dashboard"],
      github: null,
      demo: "https://aero-suoh.vercel.app/",
    },
    {
      id: 2,
      title: "AeroSuoh V2",
      desc: "Pengembangan generasi baru platform pariwisata pintar dan geotermal Suoh yang kini full dinamis dengan Dasbor Admin.",
      fullDesc: "AeroSuoh V2 merupakan evolusi besar dari versi pertama yang kini sepenuhnya dinamis dan terintegrasi dengan Content Management System (CMS) serta Dasbor Admin tingkat lanjut. Melalui dasbor ini, pengelola web dapat secara real-time mengupdate destinasi wisata, memantau & mengkonfirmasi transaksi pembayaran, mengelola artikel & berita, mengatur sistem peringatan keselamatan geotermal, serta mengedit seluruh konten visual website tanpa perlu menyentuh kode program.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Full Dynamic", "Admin CMS"],
      github: null,
      demo: "https://aerosuoh.vercel.app/",
    },
    {
      id: 3,
      title: "Sertifikat Generator",
      desc: "Aplikasi web berbasis Client-Side murni untuk membuat dan mengunduh ratusan sertifikat secara otomatis.",
      fullDesc: "Sertifikat Generator adalah alat bantu digital berkinerja tinggi yang dirancang untuk memproses dan menggenerasi ratusan sertifikat kegiatan secara masal langsung dari browser (100% Client-Side). Pengguna cukup mengunggah berkas data nama peserta (CSV/Excel) dan template sertifikat, lalu sistem akan memetakan tata letak teks secara presisi dan menghasilkan file PDF/Gambar siap unduh dalam hitungan detik tanpa membebankan server.",
      image: sertifHimaIfImg,
      tags: ["Web Dev", "Sertifikat Generator", "Client-Side"],
      github: null,
      demo: "https://sertifikat-generator-hima-informati.vercel.app/",
    },
    {
      id: 4,
      title: "TeknoCom",
      desc: "Platform informasi berbasis web untuk mempromosikan kegiatan dan informasi seputar kompetisi International dibidang IT.",
      fullDesc: "TeknoCom adalah hub informasi kompetisi IT internasional yang dikembangkan untuk mahasiswa dan komunitas teknologi Universitas Teknokrat Indonesia. Platform ini menyajikan direktori lengkap perlombaan tingkat dunia (seperti Programming, UI/UX, Web Dev, Cyber Security), timeline pendaftaran, panduan perlombaan, serta berita seputar prestasi mahasiswa di kancah internasional.",
      image: teknoComImg,
      tags: ["Web Dev", "Informasi Kompetisi", "International"],
      github: null,
      demo: "https://teknocom.teknokrat.ac.id/",
    },
    {
      id: 5,
      title: "Cv-Builder",
      desc: "Web app ringan untuk membuat CV secara cepat: isi form di kiri, lihat preview real‑time di kanan, pilih tema & template, lalu ekspor ke PDF.",
      fullDesc: "Cv-Builder adalah platform pembuat resume/CV profesional secara instan. Mengusung antarmuka dua panel (form input di sisi kiri dan preview dokumen real-time di sisi kanan), pengguna dapat memilih dari berbagai pilihan warna dan font ATS-friendly. Seluruh data yang diinput otomatis tersimpan secara aman di browser localStorage dan dapat diekspor langsung ke format PDF dengan tata letak yang rapi.",
      image: cvBuilderImg,
      tags: ["Web Dev", "Cv-Builder", "Auto-Generate"],
      github: null,
      demo: "https://cv-builder-by-hy.vercel.app/",
    },
    {
      id: 6,
      title: "Transparansi Skor & Kinerja",
      desc: "Platform digital untuk memantau keaktifan dan kontribusi seluruh anggota HIMA Informatika secara real-time.",
      fullDesc: "Platform Transparansi Skor & Kinerja HIMA Informatika adalah sistem evaluasi keanggotaan berbasis web yang transparan. Sistem ini mengukur dan menampilkan skor keaktifan pengurus, absensi rapat, partisipasi program kerja, serta kontribusi harian dalam bentuk papan peringkat (leaderboard) dan grafik performa guna mendorong akuntabilitas dan semangat berorganisasi.",
      image: transparansiSkorKinerjaImg, 
      tags: ["Web Dev", "HIMA IF", "Real-time"],
      github: null,
      demo: "https://app.himaif.web.id/",
    },
    {
      id: 7,
      title: "Blue Agency",
      desc: "Platform web agensi digital modern untuk manajemen layanan, portofolio, dan konsultasi klien.",
      fullDesc: "Blue Agency adalah landing page dan platform layanan digital serba guna yang dirancang dengan estetika corporate modern. Dibuat untuk memenuhi kebutuhan agensi teknologi, website ini mencakup showcase portofolio interaktif, rincian paket layanan (Web Development, Mobile App, Branding, Digital Marketing), testimoni klien, serta fitur formulir estimasi proyek dan pemesanan konsultasi secara cepat.",
      image: blueAgencyImg, 
      tags: ["Web Dev", "Agensi Digital", "Modern"],
      github: null,
      demo: "https://bluegenc.vercel.app/",
    },
    {
      id: 8,
      title: "HIMA Informatika UTI",
      desc: "Website resmi Himpunan Mahasiswa Informatika (HIMA Informatika) Universitas Teknokrat Indonesia.",
      fullDesc: "Website Resmi HIMA Informatika Universitas Teknokrat Indonesia merupakan pusat portal informasi, komunikasi, dan berita terintegrasi organisasi. Menampilkan profil kepengurusan, struktur divisi, dokumentasi galeri kegiatan, kalender agenda mendatang, blog edukasi teknologi, serta kanal pendaftaran keanggotaan dan kepanitiaan secara terstruktur.",
      image: himaIfImg, 
      tags: ["Portal Informasi", "Organisasi Mahasiswa", "Web Dev"],
      github: null,
      demo: "https://hima-if.teknokrat.ac.id/",
    }
  ],
  en: [
    {
      id: 1,
      title: "AeroSuoh",
      desc: "A smart tourism platform and futuristic geothermal monitoring dashboard for the Suoh region.",
      fullDesc: "AeroSuoh is a pioneering digital platform that combines nature tourism potential with geothermal activity monitoring in the Suoh region, West Lampung. The application provides interactive tourist destination guides, geothermal navigation maps, recommended trail routes, and real-time environmental sensor data visualizations to ensure safety for both tourists and researchers.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Tourism", "Dashboard"],
      github: null,
      demo: "https://aero-suoh.vercel.app/",
    },
    {
      id: 2,
      title: "AeroSuoh V2",
      desc: "The next-generation upgrade of the Suoh smart tourism platform, engineered to be fully dynamic with an Admin Dashboard.",
      fullDesc: "AeroSuoh V2 represents a major evolution of the original platform, now fully dynamic and powered by an advanced Admin Dashboard and Content Management System (CMS). Through this dashboard, web administrators can perform real-time updates to tourist destinations, track & verify payment transactions, publish news & articles, manage geothermal safety alerts, and edit all website visual content without editing source code.",
      image: aeroSuohImg, 
      tags: ["Web Dev", "Full Dynamic", "Admin CMS"],
      github: null,
      demo: "https://aerosuoh.vercel.app/",
    },
    {
      id: 3,
      title: "Certificate Generator",
      desc: "A pure Client-Side web app to automatically generate and download hundreds of certificates in bulk.",
      fullDesc: "Certificate Generator is a high-performance digital utility designed to process and bulk-generate hundreds of event certificates directly inside the browser (100% Client-Side). Users simply upload participant lists (CSV/Excel) and a base certificate template, after which the system precisely maps text layouts and exports downloadable PDF/Image files in seconds without server overhead.",
      image: sertifHimaIfImg,
      tags: ["Web Dev", "Generator", "Client-Side"],
      github: null,
      demo: "https://sertifikat-generator-hima-informati.vercel.app/",
    },
    {
      id: 4,
      title: "TeknoCom",
      desc: "A web-based information platform promoting activities and news regarding International IT competitions.",
      fullDesc: "TeknoCom is an international IT competition information hub built for students and tech communities at Universitas Teknokrat Indonesia. The platform features a curated directory of global tech contests (Programming, UI/UX, Web Dev, Cyber Security), registration timelines, competition guides, and news highlighting student achievements on the international stage.",
      image: teknoComImg,
      tags: ["Web Dev", "Competition Info", "International"],
      github: null,
      demo: "https://teknocom.teknokrat.ac.id/",
    },
    {
      id: 5,
      title: "Cv-Builder",
      desc: "A lightweight web app to quickly build ATS-friendly CVs with live preview and PDF export.",
      fullDesc: "Cv-Builder is a web application for crafting professional, ATS-friendly resumes instantly. Utilizing a side-by-side dual panel design (input form on the left and live document preview on the right), users can choose custom accent colors and ATS-optimized fonts. All entered data auto-saves securely to browser localStorage and can be exported directly into print-ready PDF files.",
      image: cvBuilderImg,
      tags: ["Web Dev", "CV-Builder", "Auto-Generate"],
      github: null,
      demo: "https://cv-builder-by-hy.vercel.app/",
    },
    {
      id: 6,
      title: "Score & Performance Transparency",
      desc: "A digital platform to monitor the activity and contribution of all organization members in real-time.",
      fullDesc: "The Score & Performance Transparency Platform is a web-based membership evaluation system for HIMA Informatika. It measures and visualizes member activity scores, meeting attendance, work program participation, and daily contributions through interactive leaderboards and performance charts to drive accountability and organizational excellence.",
      image: transparansiSkorKinerjaImg, 
      tags: ["Web Dev", "Organization", "Real-time"],
      github: null,
      demo: "https://app.himaif.web.id/",
    },
    {
      id: 7,
      title: "Blue Agency",
      desc: "A modern digital agency web platform for service management, portfolio showcase, and client consultation.",
      fullDesc: "Blue Agency is a versatile digital agency platform designed with modern corporate aesthetics. Tailored for tech agencies, the website includes interactive portfolio showcases, detailed service tiers (Web Development, Mobile App, Branding, Digital Marketing), client testimonials, and quick project estimation & consultation booking features.",
      image: blueAgencyImg, 
      tags: ["Web Dev", "Digital Agency", "Modern"],
      github: null,
      demo: "https://bluegenc.vercel.app/",
    },
    {
      id: 8,
      title: "HIMA Informatika UTI",
      desc: "Official website of the Informatics Student Association at Universitas Teknokrat Indonesia.",
      fullDesc: "The Official Website of HIMA Informatika Universitas Teknokrat Indonesia serves as an integrated portal for organization news, communication, and resources. It features official board profiles, division structures, activity photo galleries, event calendars, tech education blogs, and structured recruitment portals for new members and event committees.",
      image: himaIfImg, 
      tags: ["Information Portal", "Student Organization", "Web Dev"],
      github: null,
      demo: "https://hima-if.teknokrat.ac.id/",
    }
  ]
};