# 📚 Bookshelf API

Bookshelf API adalah RESTful API sederhana yang dirancang untuk mengelola koleksi buku secara lokal. API ini memungkinkan pengguna untuk menyimpan, mengambil, memperbarui, dan menghapus data buku dengan mudah. Proyek ini dibangun menggunakan **Node.js** dan **Hapi.js** sebagai bagian dari submission akhir kelas **Belajar Membuat Aplikasi Back-End** oleh Dicoding.

---

## 📖 Daftar Isi

- [🚀 Fitur Utama](#-fitur-utama)
- [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [📦 Instalasi](#-instalasi)
- [📑 Penggunaan API (Endpoints)](#-penggunaan-api-endpoints)
- [🧪 Linter & Style Guide](#-linter--style-guide)
- [📁 Struktur Proyek](#-struktur-proyek)
- [📄 Lisensi](#-lisensi)
- [👤 Kontributor](#-kontributor)

---

## 🚀 Fitur Utama

- **Penyimpanan Buku**: Tambah buku baru ke koleksi.
- **Daftar Buku**: Tampilkan seluruh buku dalam koleksi.
- **Detail Buku**: Lihat informasi lengkap satu buku.
- **Pembaruan Buku**: Perbarui data buku yang sudah ada.
- **Penghapusan Buku**: Hapus buku dari koleksi.
- **Filtering & Pencarian**: Filter berdasarkan nama, status sedang dibaca (`reading`), atau selesai dibaca (`finished`) via query parameters.
- **Standard Kode**: Menggunakan ESLint + Airbnb Style untuk memastikan kualitas kode.

---

## 🛠️ Teknologi yang Digunakan

- **Node.js** (v14+)
- **Hapi.js** (v20+)
- **ESLint** dengan konfigurasi **Airbnb Style Guide**
- **npm** untuk manajemen paket

---

## 📦 Instalasi

1. Clone repositori:

```bash
git clone https://github.com/username/bookshelf-api.git
cd bookshelf-api
```

2. Install dependencies:

```bash
npm install
```

3. Jalankan server:

```bash
npm run start
```

> Aplikasi akan berjalan di `http://localhost:9000`

---

## 📑 Penggunaan API (Endpoints)

### 1. Tambah Buku

- **Method**: `POST`
- **Endpoint**: `/books`
- **Request Body**:
```json
{
  "name": "Buku A",
  "year": 2020,
  "author": "John Doe",
  "summary": "Buku A tentang...",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 50,
  "reading": true
}
```

---

### 2. Ambil Semua Buku

- **Method**: `GET`
- **Endpoint**: `/books`
- **Query Opsional**:
  - `?name=` → Filter nama buku (non-case sensitive)
  - `?reading=1|0` → Filter status sedang dibaca
  - `?finished=1|0` → Filter status selesai dibaca

---

### 3. Ambil Detail Buku

- **Method**: `GET`
- **Endpoint**: `/books/{bookId}`

---

### 4. Ubah Data Buku

- **Method**: `PUT`
- **Endpoint**: `/books/{bookId}`
- **Request Body**: Sama seperti POST `/books`

---

### 5. Hapus Buku

- **Method**: `DELETE`
- **Endpoint**: `/books/{bookId}`

---

## 🧪 Linter & Style Guide

Menggunakan **ESLint** dengan konfigurasi **Airbnb Style Guide**.

- Jalankan linter:
```bash
npm run lint
```

- Perbaiki otomatis:
```bash
npx eslint . --fix
```

---

## 📁 Struktur Proyek

```
bookshelf-api/
├── src/
│   ├── books.js          # In-memory data store
│   ├── handler.js        # Logika masing-masing endpoint
│   ├── routes.js         # Routing API
│   └── server.js         # Konfigurasi Hapi & start server
├── .eslintrc.json        # Konfigurasi ESLint
├── package.json          # Metadata & dependensi
└── README.md             # Dokumentasi proyek
```

---

## 📄 Lisensi

Proyek ini didistribusikan di bawah [MIT License](LICENSE). Bebas digunakan, dimodifikasi, dan disebarkan selama menyertakan atribusi yang sesuai.

---

## 👤 Kontributor

Raditya Mulya (Aether Vale)  
Untuk submission akhir kelas Dicoding - Belajar Membuat Aplikasi Back-End