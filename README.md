# Bookshelf API

Bookshelf API adalah sebuah layanan RESTful API sederhana yang dibangun menggunakan Node.js dan Express.js untuk mengelola data buku. Proyek ini dibuat untuk memenuhi kriteria submission akhir pada kelas Back-End Developer di Dicoding.

## 🚀 Fitur Utama

- **Management Buku (CRUD)**:
  - Menambahkan buku baru (`POST /books`)
  - Menampilkan seluruh buku (`GET /books`)
  - Menampilkan detail buku berdasarkan ID (`GET /books/:bookId`)
  - Memperbarui data buku berdasarkan ID (`PUT /books/:bookId`)
  - Menghapus buku berdasarkan ID (`DELETE /books/:bookId`)
- **Fitur Opsional (Filter Query Parameters)**:
  - Filter nama buku non-case sensitive (`?name`)
  - Filter status sedang dibaca (`?reading=0` atau `?reading=1`)
  - Filter status selesai dibaca (`?finished=0` atau `?finished=1`)
- **Code Quality**:
  - Sesuai dengan Airbnb Style Guide menggunakan ESLint.

## 🛠️ Teknologi & Tools

- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Dependencies**: `cors`, `nanoid@3`
- **Linter**: ESLint (Airbnb Base)

## 💻 Cara Menjalankan Proyek Secara Lokal

1. **Clone repository ini**:
   ```bash
   git clone [https://github.com/username-kamu/bookshelf-api.git](https://github.com/username-kamu/bookshelf-api.git)
   cd bookshelf-api
