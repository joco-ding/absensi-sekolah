# Aplikasi Absensi Sekolah

Aplikasi ini dirancang untuk memudahkan proses absensi siswa di sekolah dengan fitur-fitur yang lengkap dan mudah digunakan.

## Fitur

1. **Halaman Utama**: Menampilkan sambutan dan informasi aplikasi.
2. **Data Siswa**: Mengelola data siswa dengan kemampuan untuk menambah, mengedit, dan menghapus data siswa.
3. **Data Absen**: Melakukan absensi siswa dengan memindai kode QR.
4. **Cetak Kode QR**: Mencetak kode QR untuk setiap siswa yang dapat digunakan untuk proses absensi.

## Teknologi yang Digunakan

- HTML5
- Bootstrap v5.3.1
- Bootstrap Icons v1.11.1
- xlsx v0.18.5
- qrcodejs
- ZXing Library v0.18.3

## Cara Menggunakan

1. Buka aplikasi dan Anda akan disambut di halaman utama.
2. Untuk mengelola data siswa, klik pada "Data Siswa" di navbar.
3. Untuk melakukan absensi, klik pada "Data Absen" di navbar dan lakukan pemindaian kode QR siswa.
4. Untuk mencetak kode QR siswa, klik pada "Cetak Kode QR" di navbar.

## Pengembangan

Aplikasi ini masih dalam tahap pengembangan dan akan terus diperbarui dengan fitur-fitur baru dan perbaikan.

## Lisensi

Aplikasi ini bersifat open-source dan dapat digunakan dan dimodifikasi sesuai kebutuhan.

## Kontribusi

Kontribusi dari komunitas sangat dihargai. Jika Anda memiliki saran atau perbaikan, silakan buat pull request atau buka issue di repositori ini.

## Minifikasi dan Penggabungan File JavaScript

Selama proses pengembangan, semua file JavaScript yang berada di folder `src` akan digabungkan menjadi satu file yaitu `js/combined.js`. Proses ini dilakukan dengan menggunakan aplikasi [minify](https://github.com/tdewolff/minify/tree/master) dari GitHub.

### Cara Melakukan Minifikasi

1. Pastikan Anda telah mengunduh dan menginstal aplikasi `minify` dari [sini](https://github.com/tdewolff/minify/tree/master).
2. Buka terminal atau command prompt di direktori root dari aplikasi Anda.
3. Jalankan perintah berikut:

```
minify.exe -r -b -o .\js\combined.js --match '\\*.js' .\src\
```

4. Setelah perintah dijalankan, semua file JavaScript di folder `src` akan digabungkan dan diminifikasi ke dalam file `js/combined.js`.

Dengan melakukan minifikasi, ukuran file JavaScript akan menjadi lebih kecil sehingga meningkatkan kecepatan pemuatan halaman web.

### Rekap Absen

1. Unduh file rekap yang sudah dilengkapi dengan formula-nya di [sini](https://joco-ding.github.io/absensi-sekolah/rekap.xlsx) atau bisa gunakan formula dari Google Drive di [sini](https://docs.google.com/spreadsheets/d/1gSLKPaMi7M17Lz6B9FRP2uIb0wB8Mtmw/edit?usp=sharing&ouid=114760612632842404236&rtpof=true&sd=true).
2. Buka file tersebut dan salin seluruh isi dari sheet "Rekap" dengan cara mengklik pojok kiri atas sel sehingga seluruh sheet terpilih.
3. Buat sheet baru pada file absen Anda dan paste seluruh isi yang telah disalin.

---

Dibuat oleh Joko Nugroho
