# PRD: Website Portofolio Interaktif (Minimalis & Bersih)

## 1. Pendahuluan
Dokumen ini menetapkan spesifikasi produk untuk pembuatan website portofolio pribadi. Proyek ini bertujuan untuk memamerkan proyek software engineering dan karya desain visual / UI/UX dengan estetika minimalis, bersih, dan elegan, yang mendukung mode gelap (Dark Mode) dan terang (Light Mode).

---

## 2. Goals
- Memiliki tampilan yang bersih, premium, dan estetik dengan tipografi modern (Inter/Outfit).
- Menyediakan pengalaman pengguna yang dinamis melalui micro-animations (Vanilla CSS transitions).
- Menampilkan portofolio software engineering sekaligus dokumentasi studi kasus desain UI/UX secara interaktif.
- Membantu calon klien atau perekrut menghubungi pemilik melalui formulir kontak yang divalidasi.
- Mendukung fitur aksesibilitas dasar dan performa pemuatan yang cepat.

---

## 3. User Stories

### US-001: Pembersihan Boilerplate & Setup Proyek
**Description:** Sebagai developer, saya ingin membersihkan boilerplate bawaan Vite dan menyiapkan dependensi dasar agar proyek siap dikembangkan dengan struktur folder yang bersih.

**Acceptance Criteria:**
- [ ] Hapus berkas boilerplate yang tidak digunakan (`src/assets/react.svg`, `src/App.css`).
- [ ] Buat file CSS dasar `src/index.css` yang mendefinisikan variabel warna dasar (light theme) dan reset CSS.
- [ ] Buat skrip typecheck otonom di `package.json` (`"typecheck": "tsc --noEmit"`).
- [ ] Lakukan verifikasi build lokal (`npm run build`) dan lint (`npm run lint`), pastikan semuanya berhasil tanpa error.

---

### US-002: Sistem Desain & Tema (Light/Dark Mode Toggle)
**Description:** Sebagai pengunjung, saya ingin dapat mengganti tema website antara Light Mode (default) dan Dark Mode dengan transisi yang halus agar nyaman dibaca dalam kondisi pencahayaan apa pun.

**Acceptance Criteria:**
- [ ] Definisikan CSS variable untuk kedua tema di `src/index.css` (latar belakang bersih/terang, teks kontras tinggi, aksen warna elegan, serta versi dark mode-nya).
- [ ] Buat komponen `ThemeToggle` yang menampilkan ikon yang sesuai (misalnya, matahari/bulan).
- [ ] Gunakan React state dan `localStorage` untuk menyimpan preferensi tema pengguna.
- [ ] Tambahkan transisi CSS halus (`transition: background-color 0.3s ease, color 0.3s ease`) pada elemen global.
- [ ] Pastikan typecheck dan lint berhasil.

---

### US-003: Halaman Beranda (Hero Section & Tentang Saya + Resume)
**Description:** Sebagai pengunjung, saya ingin disambut dengan bagian Hero yang menarik saat pertama kali membuka website agar segera mengetahui keahlian utama pemilik dan dapat mengunduh CV/resume dengan mudah.

**Acceptance Criteria:**
- [ ] Tampilkan tipografi besar yang elegan berisi nama, peran utama (Software Engineer & UI/UX Designer), dan slogan singkat yang menarik.
- [ ] Buat sub-section "Tentang Saya" yang ringkas yang menjelaskan latar belakang profesional secara singkat.
- [ ] Sediakan tombol "Download CV / Resume" yang fungsional dan bergaya premium.
- [ ] Tambahkan animasi masuk (fade-in/slide-up) menggunakan CSS transisi untuk memicu kesan premium pertama kali.
- [ ] Pastikan tata letak responsif dan typecheck berhasil.

---

### US-004: Galeri Proyek & Desain UI/UX (Interaktif dengan Modal)
**Description:** Sebagai perekrut, saya ingin melihat daftar proyek coding dan karya desain UI/UX dalam bentuk kartu-kartu interaktif yang dapat diklik untuk membuka modal detail proyek agar dapat membaca deskripsi, teknologi, serta melihat screenshot.

**Acceptance Criteria:**
- [ ] Tampilkan daftar proyek dalam bentuk grid responsif yang estetik (hover effect: scale/shadow tipis).
- [ ] Setiap kartu proyek harus memiliki label pembeda: "Software" atau "UI/UX Design".
- [ ] Saat kartu diklik, buka sebuah modal interaktif (glassmorphism/overlay minimalis) yang menampilkan detail proyek: ringkasan, gambar/mockup, teknologi/alat yang digunakan, link live demo, dan link repositori (jika ada).
- [ ] Modal dapat ditutup dengan tombol tutup ("x"), menekan tombol Escape, atau mengklik di luar area modal.
- [ ] Pastikan navigasi modal ramah aksesibilitas (fokus terkelola) dan typecheck berhasil.

---

### US-005: Visualisasi Keahlian (Skills Section Interaktif)
**Description:** Sebagai pengunjung, saya ingin melihat keahlian pemilik yang dikelompokkan secara teratur dengan visualisasi interaktif agar mudah dipahami secara visual.

**Acceptance Criteria:**
- [ ] Buat layout grid yang mengelompokkan keahlian ke dalam 3 kategori: "Frontend Engineering", "UI/UX Design", dan "Tools & Lainnya".
- [ ] Gunakan visualisasi interaktif seperti kartu keahlian yang menyala/berubah warna saat di-hover, atau grafik lingkaran/persentase minimalis yang memiliki animasi isi (fill-in animation) saat masuk ke viewport.
- [ ] Integrasikan ikon modern untuk masing-masing keahlian (menggunakan Lucide React atau sejenisnya).
- [ ] Pastikan tata letak rapi, responsif, dan typecheck berhasil.

---

### US-006: Halaman/Formulir Kontak (Validasi & Feedback Sukses)
**Description:** Sebagai calon klien, saya ingin mengirim pesan melalui formulir kontak yang intuitif di website agar dapat berkolaborasi atau menawarkan pekerjaan secara langsung.

**Acceptance Criteria:**
- [ ] Buat formulir kontak dengan input: Nama, Email, Subjek, dan Pesan.
- [ ] Terapkan validasi input secara real-time (email valid, nama & pesan tidak boleh kosong) dengan pesan error yang jelas.
- [ ] Tampilkan status pengiriman (loading state) dan pesan sukses/gagal yang dianimasikan dengan indah (toast/notification banner minimalis) setelah tombol submit ditekan.
- [ ] Simulasikan pengiriman form dengan mock API (delay 1.5 detik) yang berhasil menyimpan/menampilkan data di console log.
- [ ] Pastikan formulir ramah aksesibilitas dan typecheck berhasil.

---

## 4. Persyaratan Fungsional (FR)
- **FR-1**: Website harus memiliki navigasi yang menempel di bagian atas (sticky navbar) dengan tautan cepat (anchor links) ke bagian: Beranda, Proyek, Keahlian, dan Kontak.
- **FR-2**: Preferensi tema harus tersimpan secara lokal dan otomatis dimuat pada kunjungan berikutnya.
- **FR-3**: Modal detail proyek harus dapat ditutup dengan menekan tombol `Escape` di keyboard.
- **FR-4**: Seluruh tautan eksternal (sosial media, repositori, resume) harus terbuka di tab baru dengan atribut `rel="noopener noreferrer"`.

---

## 5. Kebutuhan Non-Fungsional (NFR)
- **Desain**: Gaya minimalis, bersih (clean light background untuk light mode, dan deep dark gray/slate background untuk dark mode).
- **Tipografi**: Menggunakan Google Fonts "Inter" atau "Outfit" melalui integrasi stylesheet.
- **Responsivitas**: Berfungsi sempurna pada resolusi layar mulai dari 320px (Mobile SE) hingga 1920px (Desktop Ultra).
- **Performa**: Harus lolos proses build webpack/vite tanpa peringatan kritis dan lolos typecheck TypeScript (`tsc --noEmit`).
