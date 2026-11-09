# BengkelKu - Pilih Jadwal Servis

Implementasi UI mobile untuk pemesanan servis motor di BengkelKu Margonda, Depok. Proyek ini dibuat berdasarkan desain Figma dan brief tugas UI/UX Designer.

## Tujuan

Membantu pengguna memilih jadwal servis rutin dengan cepat melalui tampilan mobile berukuran 360 x 800 px. Pengguna dapat melihat informasi bengkel, memilih tanggal dan jam yang tersedia, lalu melakukan booking servis.

## Informasi servis

- Bengkel: BengkelKu Margonda, Depok
- Rating: 4,7 dari 512 ulasan
- Layanan: servis rutin (ganti oli, cek rem, cek busi)
- Estimasi pengerjaan: 60 menit
- Biaya servis: Rp85.000 (belum termasuk suku cadang)
- Jam buka: Senin - Jumat, 08.00 - 17.00 WIB

## Fitur

- Menampilkan lima pilihan tanggal servis.
- Slot tanggal dan jam yang penuh tidak dapat dipilih.
- Tombol **Booking sekarang** hanya aktif setelah pengguna memilih tanggal dan jam yang tersedia.
- Menampilkan halaman konfirmasi setelah booking berhasil.
- Tombol **Tambahkan ke kalender Anda** menampilkan notifikasi sukses.
- Kartu bengkel dapat diklik untuk membuka halaman detail bengkel.
- Halaman detail berisi peta, alamat, jam buka, rating, dan ulasan pelanggan.
- Area ulasan dapat di-scroll apabila kontennya melebihi tinggi layar.

## Alur penggunaan

1. Pengguna membuka halaman pilih jadwal servis.
2. Pengguna memilih tanggal yang masih memiliki slot.
3. Pengguna memilih jam servis yang tersedia.
4. Tombol booking aktif, lalu pengguna menekan **Booking sekarang**.
5. Aplikasi menampilkan halaman booking berhasil beserta tanggal dan jam yang dipilih.

## Struktur proyek

```text
TestDeveloper/
├── index.html       # Struktur halaman dan tiga layar aplikasi
├── styles.css       # Gaya tampilan responsif mobile
├── app.js           # Logika pemilihan jadwal, booking, detail, dan toast
└── assets/          # Gambar bengkel, peta, ilustrasi, dan ikon
```

## Teknologi

- HTML5
- CSS3
- JavaScript vanilla

## Catatan desain

Warna hijau digunakan sebagai penanda aksi utama dan status jadwal tersedia. Slot yang penuh menggunakan warna abu-abu agar tidak terlihat dapat dipilih. Informasi penting seperti layanan, estimasi pengerjaan, harga, serta tanggal dan jam booking dibuat jelas untuk membantu pengguna menyelesaikan pemesanan dengan yakin.