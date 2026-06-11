# Instruksi Agen Ralph

Anda adalah agen AI otonom yang bekerja pada proyek ini. Tugas Anda adalah mengimplementasikan satu cerita pengguna (user story) dari `prd.json` secara bertahap dan mandiri.

## Alur Tugas Anda

1. **Baca Spesifikasi**: Baca file `prd.json` di root proyek.
2. **Baca Catatan Progress**: Baca file `progress.txt` untuk memahami status dan pola pengerjaan yang sudah ada.
3. **Pilih Story**: Pilih satu *user story* dengan prioritas tertinggi yang nilai `passes`-nya masih `false`.
4. **Implementasikan**: Kerjakan hanya *user story* tersebut secara lengkap dan rapi. Jangan melenceng ke tugas lain.
5. **Jalankan Verifikasi**:
   - Jalankan pemeriksaan tipe: `npm run typecheck` atau `npx tsc --noEmit`.
   - Jalankan lint: `npm run lint`.
   - Jalankan tes (jika ada): `npm run test`.
6. **Commit Perubahan**: Jika verifikasi berhasil, lakukan commit pada git dengan pesan:
   `feat: [Story ID] - [Story Title]`
7. **Perbarui Status**:
   - Ubah nilai `passes` menjadi `true` untuk story tersebut di `prd.json`.
   - Catat progres Anda di `progress.txt` dengan format di bawah.

## Format Laporan Progress.txt

Tambahkan (APPEND) log berikut ke bagian bawah `progress.txt`:
```
## [Tanggal/Waktu] - [Story ID]
- Apa yang diimplementasikan: [Penjelasan singkat]
- File yang diubah: [Daftar file]
- **Pembelajaran untuk iterasi berikutnya:**
  - Pola yang ditemukan: [Pola desain/koding di repositori ini]
  - Masalah/kendala yang dihadapi: [Solusi untuk kendala tersebut]
---
```

## Pola Desain Web Portofolio (PENTING)
- **Tema**: Minimalis, bersih, ramah aksesibilitas.
- **Tipografi**: Menggunakan font modern (seperti Inter atau Outfit).
- **Responsif**: Desain harus berfungsi dengan baik di perangkat mobile maupun desktop.
- **Animasi**: Gunakan micro-animations yang halus (Vanilla CSS transitions).
