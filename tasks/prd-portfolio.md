# PRD (Product Requirement Document): Portofolio Kristianto Wibawa (Gaya Cursor)

Dokumen ini mendefinisikan spesifikasi produk untuk pengerjaan ulang website portofolio pribadi **Kristianto Wibawa (Kris)** dengan mengadopsi estetika sistem desain Cursor (`DESIGN.md`).

---

## 1. Tujuan Produk (Product Goals)
- **Kesesuaian Data 100%**: Menampilkan data profil profesional (Software Engineer di Whiteopen Teknologi, Spring Boot, Microservices, Vue.js, Flutter, tools JetBrains WebStorm/Cursor/Copilot/Figma, bahasa Indonesia/Inggris, filosofi bisnis Ecosystem Play) dan personal (Dota 2 Carry, Kripto Solana DeFi di Binance/Coinbase/OpenSea, JKT48/AKB48 fan konser Wonderland 13th Anniversary/ALL IN TOUR, kebugaran 7-week workout, kuliner lokal bakso/nasi goreng/seblak/soto/satai) milik Kristianto Wibawa secara lengkap.
- **Sistem Desain Cursor**: Menerapkan palet warna warm cream (`#f7f7f4`) dan ink (`#26251e`), Cursor Orange (`#f54e00`), border hairline 1px, tanpa bayangan (no drop shadows), dan tipografi Inter & JetBrains Mono (font serif dihilangkan).
- **Pengalaman Pengguna Interaktif**: Menyediakan switcher mode Professional/Personal yang dinamis, foto profil 3D flip-whirl, dan transisi halus khas Cursor.
- **Mode AI (Fable 5)**: Mempertahankan tombol toggle Mode AI (Fable 5) dengan penyesuaian visual agar tetap menyatu dengan desain Cursor.

---

## 2. Fitur & Cerita Pengguna (User Stories)

### US-001: Konfigurasi Sistem Desain Cursor & Reset Tipografi
**Deskripsi:** Sebagai pengunjung, saya ingin website menampilkan gaya estetika minimalis Cursor sehingga terasa premium, bersih, dan konsisten dengan panduan desain.

**Kriteria Penerimaan:**
- Menggunakan variabel warna dari `DESIGN.md` untuk mode terang dan gelap Cursor.
  - Terang: Canvas Warm Cream (`#f7f7f4`), Ink (`#26251e`), Body (`#5a5852`), Muted (`#807d72`), Hairline (`#e6e5e0`).
  - Gelap (Professional): Canvas Dark (`#1c1b16`), Ink/Teks Terang (`#f7f7f4`), Body (`#a09c92`), Hairline (`#2d2b24`).
- Menghapus kelas font serif (`.font-garamond`, `.font-cormorant`, dsb.) dari seluruh elemen website.
- Menggunakan font **Inter** untuk display dan running text, dengan tracking negatif (`letter-spacing: -1.5%` sampai `-3%`) pada teks display.
- Menggunakan font **JetBrains Mono** untuk semua blok kode, tab editor, tanggal, dan informasi metrik.
- Menghilangkan semua bayangan box-shadow dan menggunakan border hairline 1px tipis di setiap komponen kartu (card).

---

### US-002: Mode Switcher Dinamis (Professional vs Personal)
**Deskripsi:** Sebagai pengunjung, saya ingin dapat beralih antara Mode Professional dan Mode Personal dengan mudah untuk melihat sisi karir dan sisi personal Kris.

**Kriteria Penerimaan:**
- Tombol toggle berada di tengah-tengah area navigasi atas (navbar).
- Diapit oleh ornamen SVG geometris khas di sebelah kiri dan kanan toggle.
- Mode Professional: Mengaktifkan tema gelap (Dark Mode) Cursor secara instan.
- Mode Personal: Mengaktifkan tema terang (Light Mode/Warm Cream) Cursor secara instan.
- Pilihan mode disimpan di `localStorage` agar tetap persisten saat halaman disegarkan.

---

### US-003: Hero & Bio Kris dengan Foto Profil Flip-Whirl
**Deskripsi:** Sebagai pengunjung, saya ingin membaca biografi Kristianto Wibawa dan melihat foto profilnya yang interaktif dan dinamis.

**Kriteria Penerimaan:**
- Tampilkan nama besar "Kristianto Wibawa" (mode Professional) atau "Kris" (mode Personal) menggunakan font Inter display.
- Konten Bio Professional:
  > *"Software Engineer at Whiteopen Teknologi (Bandung). Graduate of STMIK LIKMI with a focus on Information Systems. Strong advocate for Ecosystem Play strategies, preferring one-time software payment models over monthly subscriptions."*
- Mockup IDE Editor `about.ts` memuat detail:
  - `techStack`: Java (Spring Boot / Microservices), Vue.js, Flutter.
  - `tools`: JetBrains WebStorm, Cursor, GitHub Copilot, Figma.
  - `languages`: Indonesian (Native), English (Proficient).
  - `philosophy`: Ecosystem Play (One-time Software Payment).
- Konten Bio Personal:
  > *"Dota 2 Carry player, Solana DeFi trader on Binance/Coinbase/OpenSea, JKT48/AKB48 fan (Wonderland 13th Anniversary and ALL IN TOUR), 7-week workout planner, and local Indonesian culinary enthusiast (bakso, nasi goreng, seblak, soto, satai)."*
- Foto Profil memuat efek interaktif:
  - Berputar lambat/sedang/cepat dengan SVG whirl-slow/medium/fast.
  - Animasi putaran terjeda (pause) saat mouse melakukan hover di atas foto.
  - Melakukan flip 3D saat di-hover untuk menampilkan foto personal (terang/santai) atau professional (gelap/formal).

---

### US-004: Grid Proyek 'Stuff I've Made' Kris
**Deskripsi:** Sebagai perekrut atau kolaborator, saya ingin melihat proyek portofolio utama milik Kris secara rapi dan interaktif.

**Kriteria Penerimaan:**
- Menampilkan 4 proyek utama:
  1. **Beautypedia**: *"A cosmetics marketplace platform. Designed the database structure and integrated Xendit payment gateway."*
  2. **Trustpos**: *"Led the complete migration of the system from a monolith Hibernate architecture to a microservices architecture."*
  3. **System Integration**: *"Implemented Google OAuth authentication, including writing migration scripts and service layer logic."*
  4. **AI Development**: *"Configured autonomous AI Agents and Model Context Protocol (MCP) using Hermes and OpenClaw."* (Status: Prototype)
- Setiap kartu memiliki lencana status: **Active** (hijau/success) atau **Prototype** (merah/error).
- Setiap kartu memiliki hairline border 1px dan ornamen vintage SVG di 4 sudut luar kartu.
- Tautan proyek mengarah ke URL eksternal atau deskripsi detail yang valid.

---

### US-005: Seksi Posts / Artikel Kris Berdasarkan Mode
**Deskripsi:** Sebagai pembaca, saya ingin melihat daftar tulisan Kris yang teratur dan rapi sesuai mode aktif.

**Kriteria Penerimaan:**
- Menampilkan daftar tulisan asli Kris:
  - **Professional Posts**:
    1. *Migrating from Monolith Hibernate to Spring Boot with Java 17* (8 min read, 15 Mar 2026)
    2. *Designing a Highly Scalable Database for Beautypedia Cosmetic Marketplace* (6 min read, 2 Feb 2026)
    3. *Implementing Clean Google OAuth Authentication in Spring Boot* (5 min read, 12 Jan 2026)
    4. *Configuring Autonomous AI Agents and MCP using Hermes and OpenClaw* (7 min read, 3 Dec 2025)
  - **Personal Posts**:
    1. *My Solana DeFi Trading Strategy: Navigating the SOL Ecosystem on Binance, Coinbase, and OpenSea* (4 min read, 28 May 2026, Pinned)
    2. *Playing Carry in Dota 2: Tips for Grinding MMR* (5 min read, 14 Apr 2026)
    3. *Concert Review: Wonderland JKT48 13th Anniversary and ALL IN TOUR* (6 min read, 20 Mar 2026)
    4. *Survival Guide: Surviving the Intense 7-Week Workout Schedule* (3 min read, 10 Feb 2026)
    5. *Bandung Culinary Tour: Finding the Best Bakso, Nasi Goreng, Seblak, Soto, and Satai* (4 min read, 15 Jan 2026)
- Setiap entri pos menggunakan font Inter untuk judul, efek link menyala (illuminated link), dan font JetBrains Mono untuk metrik/waktu baca/tanggal.

---

### US-006: Tombol Toggle Mode AI (Fable 5)
**Deskripsi:** Sebagai pengguna, saya ingin dapat beralih ke Mode AI (Fable 5) dari navbar untuk mengaktifkan fitur tambahan interaktif.

**Kriteria Penerimaan:**
- Tombol toggle berlabel "Mode AI (Fable 5)" diletakkan di sisi kanan navbar.
- Skema warna toggle dan UI aktif menggunakan warna Cursor Orange (`#f54e00`) agar terintegrasi indah dengan tema utama.
- Menjaga fungsi interaktif Fable 5 yang sudah dibuat sebelumnya.

---

## 3. Persyaratan Non-Fungsional (Non-Functional Requirements)
- **Tipografi**: Bebas dari font serif. Gunakan Inter dan JetBrains Mono.
- **Responsivitas**: Tampilan di desktop (tiga kolom proyek) harus runtuh dengan indah menjadi dua kolom pada tablet, dan satu kolom pada perangkat mobile.
- **Performa**: Waktu pemuatan halaman cepat, tidak ada dependensi yang tidak terpakai, dan lolos uji `npm run build` serta `npm run typecheck` tanpa kesalahan.
