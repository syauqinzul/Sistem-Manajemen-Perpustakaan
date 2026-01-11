# 🎯 SEMANTIC HTML TAGS

## Mengapa Semantic HTML?
1. **Accessibility:** Screen readers memahami struktur
2. **SEO:** Search engines memahami konten
3. **Maintainability:** Kode lebih readable
4. **Future-proof:** Browser compatibility

## Tags yang Digunakan:

### 1. `<header>`
```html
<header>
    <h1>📚 Sistem Manajemen Perpustakaan</h1>
    <p class="subtitle">Proyek JavaScript...</p>
</header>

Fungsi: Bagian pengenalan/pembuka halaman

<!-- <section> -->
  <section class="form-section">
    <h2>Tambah Buku Baru</h2>
    <!-- Form content -->
</section>

Fungsi: Grup konten tematik
Aturan: Harus punya heading (h2-h6)

<!-- <form> -->

  <form id="bookForm">
    <!-- Input fields -->
    <button type="submit">Tambah Buku</button>
</form>

Atribut Penting:

id: Untuk JavaScript/CSS

action: URL untuk submit (kosong = current page)

method: "GET" atau "POST"

 <!-- Input Elements -->

  <!-- Text Input -->
<input type="text" id="title" placeholder="Judul buku" required>

<!-- Number Input -->
<input type="number" id="year" min="1900" max="2025">

<!-- Select Dropdown -->
<select id="genre" required>
    <option value="">Pilih genre</option>
    <option value="Fiksi">Fiksi</option>
</select>

<!-- Submit Button -->
<button type="submit">Tambah Buku</button>

Input Types:

type="text": Text input biasa

type="number": Hanya angka, bisa dengan spinner

type="submit": Trigger form submission

Validation Attributes:

required: Field wajib diisi

min/max: Batasan angka

placeholder: Hint text

<!-- List Elements -->
 <ul id="bookList" class="book-list">
    <!-- Dynamic content dari JavaScript -->
</ul>

Perbedaan UL vs OL:

ul: Unordered list (bullet points)

ol: Ordered list (numbered)

li: List item (child dari ul/ol)