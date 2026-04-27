# ✨ Premium React Portfolio - Hafis Yulianto

![Portfolio Preview](https://via.placeholder.com/1000x500.png?text=Premium+React+Portfolio+Preview)

Selamat datang di repositori portofolio web premium milik **Hafis Yulianto**. Website ini dirancang khusus untuk memberikan pengalaman pengguna tingkat tinggi (High-End UX) dengan desain *glassmorphism*, animasi yang memukau, dan fitur dwibahasa (*bilingual*).

🔗 **Live Demo:** [portfolio-hafisyulianto.vercel.app](https://portfolio-hafisyulianto.vercel.app/)

---

## 🌟 Fitur Utama (Key Features)

*   **🌐 Sistem Multi-Bahasa (Bilingual):** Dilengkapi dengan Context API untuk berganti antara Bahasa Indonesia (ID) dan English (EN) secara *real-time* tanpa perlu me-refresh halaman. Preferensi bahasa otomatis disimpan di *Local Storage*.
*   **🎬 Premium Animations:** Menggunakan Framer Motion untuk *scroll-reveal*, *cinematic text reveal* pada nama, dan interaksi *hover* yang elegan (termasuk *glassmorphism* efek).
*   **⏳ Glowing Preloader:** Layar pemuatan awal yang modern dengan animasi detak jantung (*pulse*) untuk menyembunyikan *render delay* dan memberikan kesan profesional.
*   **🎵 Background Music:** Pemutar musik latar bawaan yang bisa dinyalakan/dimatikan kapan saja langsung dari Navbar.
*   **📱 Fully Responsive:** Tata letak sempurna mulai dari ukuran layar HP kecil, Tablet, hingga Monitor ultrawide.
*   **📄 Download CV:** Tombol *Call to Action* (CTA) khusus untuk mengunduh CV secara langsung.
*   **🚀 SEO Friendly:** Dilengkapi dengan tag *Open Graph* dan Meta Descriptions agar tampilan *preview link* di WhatsApp/Telegram/Sosial Media terlihat sangat menarik.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Project ini dibangun menggunakan *stack* web modern:

*   **[React.js](https://reactjs.org/)** (dengan **[Vite](https://vitejs.dev/)**) - Framework & Bundler utama yang super cepat.
*   **[Tailwind CSS](https://tailwindcss.com/)** - Framework *utility-first* untuk *styling* cepat dan *custom design*.
*   **[Framer Motion](https://www.framer.com/motion/)** - *Library* kuat untuk animasi level *production*.
*   **[Lucide React](https://lucide.dev/)** - Kumpulan ikon *open-source* yang indah dan konsisten.

---

## 🚀 Panduan Menjalankan Secara Lokal (Local Setup)

Jika Anda ingin mencoba menjalankan project ini di komputer Anda sendiri:

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/HafisYulianto/portfolio-hafis.git
    cd portfolio-hafis
    ```

2.  **Install semua *dependencies*:**
    ```bash
    npm install
    ```

3.  **Jalankan server *development*:**
    ```bash
    npm run dev
    ```

4.  Buka browser Anda dan kunjungi `http://localhost:5173/`

---

## 📂 Struktur Data (Cara Mengubah Konten)

Semua konten (Data Pribadi, Keahlian, Pengalaman, Prestasi, dan Proyek) dipisahkan dari logika UI. Anda bisa mengubah isinya dengan sangat mudah melalui **satu file** ini:

👉 `src/data/index.js`

File data tersebut menggunakan objek bersarang (`id` dan `en`) agar Anda bisa menulis terjemahan dengan rapi:

```javascript
export const personalData = {
  name: "Hafis Yulianto",
  id: { role: "Web Developer" },
  en: { role: "Web Developer" }
}
```

---

## 👨‍💻 Tentang Pengembang

Dibuat dengan ❤️ oleh **Hafis Yulianto**.
Seorang *Web Developer, UI/UX Designer, Quality Assurance,* dan *Pilot Drone Profesional* yang senang menggabungkan fungsionalitas kode dengan estetika visual.

*   **GitHub:** [@hafisyulianto](https://github.com/hafisyulianto)
*   **LinkedIn:** [Hafis Yulianto](https://linkedin.com/in/hafisyulianto)
*   **Instagram:** [@hafisyulianto_](https://instagram.com/hafisyulianto_)

---
*README ini dihasilkan untuk memastikan dokumentasi portofolio se-premium visualnya!* ✨
