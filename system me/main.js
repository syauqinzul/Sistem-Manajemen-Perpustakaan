// ==================== VARIABEL GLOBAL & ARRAY ====================
let books = []; // Array untuk menyimpan koleksi buku

// ==================== DATA BUKU CONTOH ====================
const bookTitles = [
  // Teknologi & Programming (20 buku)
  "JavaScript: The Good Parts",
  "Clean Code",
  "The Pragmatic Programmer",
  "Eloquent JavaScript",
  "You Don't Know JS",
  "Design Patterns",
  "Refactoring: Improving the Design of Existing Code",
  "Introduction to Algorithms",
  "The Clean Coder",
  "Code Complete",
  "Structure and Interpretation of Computer Programs",
  "The Mythical Man-Month",
  "Head First Design Patterns",
  "Programming Pearls",
  "The Art of Computer Programming",
  "Cracking the Coding Interview",
  "Domain-Driven Design",
  "Working Effectively with Legacy Code",
  "Test-Driven Development",
  "The Software Craftsman",

  // Fiksi & Sastra (15 buku)
  "Laskar Pelangi",
  "Sang Pemimpi",
  "Edensor",
  "Pulang",
  "Pergi",
  "Bumi Manusia",
  "Anak Semua Bangsa",
  "Rumah Kaca",
  "Arok Dedes",
  "Hujan",
  "Mata di Tanah Melus",
  "Negeri 5 Menara",
  "Ranum 1",
  "Cantik itu Luka",
  "Ronggeng Dukuh Paruk",

  // Sains & Non-Fiksi (15 buku)
  "Sapiens: Riwayat Singkat Umat Manusia",
  "Homo Deus: Masa Depan Umat Manusia",
  "21 Lessons for the 21st Century",
  "Cosmos",
  "A Brief History of Time",
  "The Selfish Gene",
  "The Emperor of All Maladies",
  "Guns, Germs, and Steel",
  "Thinking, Fast and Slow",
  "Outliers: The Story of Success",
  "The Power of Habit",
  "Atomic Habits",
  "Deep Work",
  "The 7 Habits of Highly Effective People",
  "How to Win Friends and Influence People",

  // Sejarah & Biografi (10 buku)
  "Sejarah Indonesia Modern",
  "Revolusi Indonesia",
  "Bung Karno: Penyambung Lidah Rakyat",
  "Soeharto: Biografi Singkat",
  "Tan Malaka: Bapak Republik yang Dilupakan",
  "Kartini: Habis Gelap Terbitlah Terang",
  "Steve Jobs",
  "Elon Musk: Tesla, SpaceX",
  "The Diary of a Young Girl",
  "Long Walk to Freedom",

  // Bisnis & Ekonomi (10 buku)
  "Rich Dad Poor Dad",
  "The Intelligent Investor",
  "The Lean Startup",
  "Zero to One",
  "Good to Great",
  "The 4-Hour Workweek",
  "Thinking in Bets",
  "The Psychology of Money",
  "The Millionaire Next Door",
  "Business Adventures",

  // Sains Populer & Pendidikan (10 buku)
  "Fisika untuk Pemula",
  "Kimia Dasar",
  "Biologi Molekuler",
  "Matematika Diskrit",
  "Statistika Terapan",
  "Kalkulus",
  "Astronomi untuk Semua",
  "Neuroscience: Exploring the Brain",
  "The Code Book",
  "The Elegant Universe",

  // Fiksi Internasional (10 buku)
  "To Kill a Mockingbird",
  "1984",
  "Pride and Prejudice",
  "The Great Gatsby",
  "One Hundred Years of Solitude",
  "Brave New World",
  "The Catcher in the Rye",
  "The Alchemist",
  "The Little Prince",
  "Harry Potter and the Philosopher's Stone",

  // Agama & Spiritual (10 buku)
  "Al-Quran dan Terjemahan",
  "Hadis Arbain",
  "Mengenal Diri melalui Tasawuf",
  "The Power of Now",
  "The Art of Happiness",
  "Man's Search for Meaning",
  "The Road Less Traveled",
  "The Four Agreements",
  "The Celestine Prophecy",
  "The Secret",
];

const bookAuthors = [
  // Penulis Teknologi
  "Douglas Crockford",
  "Robert C. Martin",
  "Andrew Hunt",
  "Marijn Haverbeke",
  "Kyle Simpson",
  "Erich Gamma",
  "Martin Fowler",
  "Thomas H. Cormen",
  "Robert C. Martin",
  "Steve McConnell",
  "Harold Abelson",
  "Frederick P. Brooks",
  "Eric Freeman",
  "Jon Bentley",
  "Donald Knuth",
  "Gayle Laakmann McDowell",
  "Eric Evans",
  "Michael Feathers",
  "Kent Beck",
  "Sandro Mancuso",

  // Penulis Indonesia
  "Andrea Hirata",
  "Andrea Hirata",
  "Andrea Hirata",
  "Tere Liye",
  "Tere Liye",
  "Pramoedya Ananta Toer",
  "Pramoedya Ananta Toer",
  "Pramoedya Ananta Toer",
  "Pramoedya Ananta Toer",
  "Tere Liye",
  "Okky Madasari",
  "Ahmad Fuadi",
  "Laksmi Pamuntjak",
  "Eka Kurniawan",
  "Ahmad Tohari",

  // Penulis Sains & Non-Fiksi
  "Yuval Noah Harari",
  "Yuval Noah Harari",
  "Yuval Noah Harari",
  "Carl Sagan",
  "Stephen Hawking",
  "Richard Dawkins",
  "Siddhartha Mukherjee",
  "Jared Diamond",
  "Daniel Kahneman",
  "Malcolm Gladwell",
  "Charles Duhigg",
  "James Clear",
  "Cal Newport",
  "Stephen R. Covey",
  "Dale Carnegie",

  // Penulis Sejarah & Biografi
  "M.C. Ricklefs",
  "Benedict Anderson",
  "Cindy Adams",
  "O.G. Roeder",
  "Harry A. Poeze",
  "Armijn Pane",
  "Walter Isaacson",
  "Ashlee Vance",
  "Anne Frank",
  "Nelson Mandela",

  // Penulis Bisnis
  "Robert Kiyosaki",
  "Benjamin Graham",
  "Eric Ries",
  "Peter Thiel",
  "Jim Collins",
  "Tim Ferriss",
  "Annie Duke",
  "Morgan Housel",
  "Thomas J. Stanley",
  "John Brooks",

  // Penulis Pendidikan
  "Prof. Dr. Anwar",
  "Dr. Budi Santoso",
  "Dr. Sari Dewi",
  "Prof. Joko Widodo",
  "Dr. Linda Susanti",
  "Prof. Ahmad",
  "Dr. Brian Cox",
  "Mark F. Bear",
  "Simon Singh",
  "Brian Greene",

  // Penulis Fiksi Internasional
  "Harper Lee",
  "George Orwell",
  "Jane Austen",
  "F. Scott Fitzgerald",
  "Gabriel García Márquez",
  "Aldous Huxley",
  "J.D. Salinger",
  "Paulo Coelho",
  "Antoine de Saint-Exupéry",
  "J.K. Rowling",

  // Penulis Spiritual
  "Tim Kementerian Agama",
  "Imam Nawawi",
  "Prof. Dr. Quraish Shihab",
  "Eckhart Tolle",
  "Dalai Lama",
  "Viktor Frankl",
  "M. Scott Peck",
  "Don Miguel Ruiz",
  "James Redfield",
  "Rhonda Byrne",
];

const bookGenres = [
  "Teknologi",
  "Programming",
  "Computer Science",
  "Software Engineering",
  "Fiksi",
  "Sastra",
  "Roman",
  "Drama",
  "Sejarah",
  "Biografi",
  "Sains",
  "Populer Science",
  "Filsafat",
  "Psikologi",
  "Bisnis",
  "Ekonomi",
  "Keuangan",
  "Entrepreneurship",
  "Pendidikan",
  "Matematika",
  "Fisika",
  "Kimia",
  "Biologi",
  "Sejarah",
  "Politik",
  "Budaya",
  "Agama",
  "Spiritual",
  "Self-Help",
  "Pengembangan Diri",
  "Motivasi",
  "Fantasi",
  "Misteri",
  "Petualangan",
  "Klasik",
];

// ==================== FUNGSI GENERATE DATA OTOMATIS ====================
/**
 * Menghasilkan data buku acak untuk pengujian
 * @param {number} count - Jumlah buku yang ingin digenerate
 * @returns {Array} Array of book objects
 */
function generateRandomBooks(count) {
  const generatedBooks = [];

  for (let i = 0; i < count; i++) {
    // Random index untuk memilih data
    const titleIndex = Math.floor(Math.random() * bookTitles.length);
    const authorIndex = Math.floor(Math.random() * bookAuthors.length);
    const genreIndex = Math.floor(Math.random() * bookGenres.length);

    // Generate data acak
    const title = bookTitles[titleIndex];
    const author = bookAuthors[authorIndex];
    const year = Math.floor(Math.random() * (2024 - 1950 + 1)) + 1950;
    const genre = bookGenres[genreIndex];
    const isAvailable = Math.random() > 0.3; // 70% tersedia, 30% dipinjam

    generatedBooks.push({
      title: `${title} #${i + 1}`,
      author,
      year,
      genre,
      isAvailable,
    });
  }

  return generatedBooks;
}

/**
 * Menambahkan data buku contoh yang terstruktur
 */
function addStructuredSampleBooks() {
  console.log("Menambahkan buku contoh terstruktur...");

  // Data tetap dengan beberapa buku penting
  const essentialBooks = [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008,
      genre: "Programming",
      isAvailable: true,
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      genre: "Software Engineering",
      isAvailable: true,
    },
    {
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      year: 1999,
      genre: "Programming",
      isAvailable: false,
    },
    {
      title: "Sapiens: Riwayat Singkat Umat Manusia",
      author: "Yuval Noah Harari",
      year: 2011,
      genre: "Sejarah",
      isAvailable: true,
    },
    {
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      year: 2005,
      genre: "Fiksi",
      isAvailable: true,
    },
    {
      title: "Bumi Manusia",
      author: "Pramoedya Ananta Toer",
      year: 1980,
      genre: "Sastra",
      isAvailable: true,
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      year: 1997,
      genre: "Keuangan",
      isAvailable: false,
    },
  ];

  // Tambahkan buku-buku penting
  essentialBooks.forEach((book) => {
    addBook(book.title, book.author, book.year, book.genre, book.isAvailable);
  });

  // Generate buku tambahan secara acak
  const additionalBooks = generateRandomBooks(43); // 43 + 7 = 50 buku total
  additionalBooks.forEach((book) => {
    addBook(book.title, book.author, book.year, book.genre, book.isAvailable);
  });

  console.log(`Total ${books.length} buku telah ditambahkan`);
}

// ==================== ELEMENT DOM REFERENCES ====================
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const showAllBtn = document.getElementById("showAllBtn");
const availableBooksBtn = document.getElementById("availableBooksBtn");
const sortByYearBtn = document.getElementById("sortByYearBtn");
const resetBtn = document.getElementById("resetBtn");
const totalBooks = document.getElementById("totalBooks");
const availableBooks = document.getElementById("availableBooks");
const oldestBook = document.getElementById("oldestBook");

// ==================== OBJECT CONSTRUCTOR ====================
/**
 * Constructor function untuk membuat objek Book
 * @param {string} title - Judul buku
 * @param {string} author - Penulis buku
 * @param {number} year - Tahun terbit
 * @param {string} genre - Genre buku
 * @param {boolean} isAvailable - Status ketersediaan
 */
function Book(title, author, year, genre, isAvailable) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.isAvailable = isAvailable;
}

// ==================== PROTOTYPE METHODS ====================
Book.prototype.toggleAvailability = function () {
  this.isAvailable = !this.isAvailable;
  return this.isAvailable;
};

Book.prototype.getBookInfo = function () {
  const { title, author, year, genre, isAvailable } = this;
  return `${title} oleh ${author} (${year}) - ${genre} - ${
    isAvailable ? "Tersedia" : "Dipinjam"
  }`;
};

// ==================== FUNCTIONS UTAMA ====================
function addBook(title, author, year, genre, isAvailable) {
  const newBook = new Book(title, author, year, genre, isAvailable);
  books.push(newBook);
  return newBook;
}

function renderBooks(bookArray = books) {
  // Clear current list
  bookList.innerHTML = "";

  // Tampilkan informasi pagination
  const currentPage = 1;
  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, bookArray.length);
  const displayedBooks = bookArray.slice(startIndex, endIndex);

  // Render books dengan for loop
  for (let i = 0; i < displayedBooks.length; i++) {
    const book = displayedBooks[i];
    const globalIndex = bookArray.indexOf(book);
    createBookElement(book, globalIndex);
  }

  // Add pagination info
  if (bookArray.length > itemsPerPage) {
    const paginationInfo = document.createElement("div");
    paginationInfo.className = "pagination-info";
    paginationInfo.innerHTML = `
            <p>Menampilkan ${startIndex + 1}-${endIndex} dari ${
      bookArray.length
    } buku</p>
            <div class="pagination-controls">
                <button class="btn" id="prevPage">Sebelumnya</button>
                <button class="btn" id="nextPage">Berikutnya</button>
            </div>
        `;
    bookList.appendChild(paginationInfo);
  }

  updateStatistics();

  // Jika tidak ada buku
  if (bookArray.length === 0) {
    const emptyMessage = document.createElement("li");
    emptyMessage.className = "book-item";
    emptyMessage.innerHTML =
      '<div class="book-title">Tidak ada buku dalam koleksi</div>';
    bookList.appendChild(emptyMessage);
  }
}

function createBookElement(book, index) {
  const li = document.createElement("li");
  li.className = "book-item";

  const { title, author, year, genre, isAvailable } = book;
  const statusClass = isAvailable ? "available" : "unavailable";
  const statusText = isAvailable ? "Tersedia" : "Dipinjam";

  li.innerHTML = `
        <div class="book-title">${title}</div>
        <div class="book-info">
            <span><strong>Penulis:</strong> ${author}</span>
            <span><strong>Tahun:</strong> ${year}</span>
            <span><strong>Genre:</strong> ${genre}</span>
            <span class="${statusClass}"><strong>Status:</strong> ${statusText}</span>
        </div>
        <div class="book-actions">
            <button class="btn toggle-btn" data-id="${index}">
                ${isAvailable ? "📚 Tandai Dipinjam" : "✅ Tandai Tersedia"}
            </button>
            <button class="btn btn-danger delete-btn" data-id="${index}">
                🗑️ Hapus
            </button>
        </div>
    `;

  bookList.appendChild(li);
}

function findOldestBook() {
  if (books.length === 0) return null;

  let oldestBook = books[0];
  let i = 1;

  while (i < books.length) {
    if (books[i].year < oldestBook.year) {
      oldestBook = books[i];
    }
    i++;
  }

  return oldestBook;
}

function findNewestBook() {
  if (books.length === 0) return null;

  let newestBook = books[0];

  for (let i = 1; i < books.length; i++) {
    if (books[i].year > newestBook.year) {
      newestBook = books[i];
    }
  }

  return newestBook;
}

function updateStatistics() {
  // Update total books
  totalBooks.textContent = books.length;

  // Count available books using filter()
  const availableCount = books.filter((book) => book.isAvailable).length;
  availableBooks.textContent = availableCount;

  // Find oldest book
  const oldest = findOldestBook();
  const newest = findNewestBook();

  // Update display with oldest and newest
  oldestBook.textContent = oldest
    ? `${oldest.title.substring(0, 15)}... (${oldest.year})`
    : "-";

  // Add newest book info if exists
  if (newest) {
    const newestBookElement = document.createElement("div");
    newestBookElement.className = "stat-label";
    newestBookElement.textContent = `Terbaru: ${newest.year}`;
    oldestBook.parentElement.appendChild(newestBookElement);
  }

  // Log statistics
  console.log(
    `📊 Statistik: Total=${books.length}, Tersedia=${availableCount}`
  );
}

// ==================== EVENT HANDLERS ====================
function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const year = parseInt(document.getElementById("year").value);
  const genre = document.getElementById("genre").value;
  const isAvailable = document.getElementById("isAvailable").value === "true";

  // Validasi
  if (!title || !author || !year || !genre) {
    alert("Harap isi semua field!");
    return;
  }

  if (year < 1900 || year > new Date().getFullYear()) {
    alert(`Tahun terbit harus antara 1900 dan ${new Date().getFullYear()}`);
    return;
  }

  // Add book
  addBook(title, author, year, genre, isAvailable);
  renderBooks();

  // Reset form
  e.target.reset();
  document.getElementById("title").focus();

  // Show success message
  showNotification(`Buku "${title}" berhasil ditambahkan!`, "success");
}

function handleBookListClick(e) {
  const target = e.target;

  if (target.classList.contains("toggle-btn")) {
    const bookId = parseInt(target.getAttribute("data-id"));

    if (bookId >= 0 && bookId < books.length) {
      books[bookId].toggleAvailability();
      showNotification(`Status buku "${books[bookId].title}" diubah`, "info");
      renderBooks();
    }
  }

  if (target.classList.contains("delete-btn")) {
    const bookId = parseInt(target.getAttribute("data-id"));

    if (bookId >= 0 && bookId < books.length) {
      const bookTitle = books[bookId].title;

      if (confirm(`Apakah Anda yakin ingin menghapus buku "${bookTitle}"?`)) {
        const removedBook = books.splice(bookId, 1)[0];
        showNotification(
          `Buku "${removedBook.title}" telah dihapus`,
          "warning"
        );
        renderBooks();
      }
    }
  }
}

function handleShowAvailableBooks() {
  const availableBooks = books.filter((book) => book.isAvailable);
  renderBooks(availableBooks);
  showNotification(
    `Menampilkan ${availableBooks.length} buku tersedia`,
    "info"
  );
}

function handleSortByYear() {
  // Create a copy of books array using spread operator
  const sortedBooks = [...books].sort((a, b) => a.year - b.year);
  renderBooks(sortedBooks);
  showNotification(
    "Buku diurutkan berdasarkan tahun (tertua → terbaru)",
    "info"
  );
}

function handleResetData() {
  if (books.length === 0) {
    alert("Tidak ada data yang bisa direset");
    return;
  }

  if (
    confirm(`Apakah Anda yakin ingin menghapus semua ${books.length} buku?`)
  ) {
    books = [];
    showNotification("Semua data buku telah direset", "error");
    renderBooks();
  }
}

// ==================== FUNGSI BANTUAN ====================
/**
 * Menampilkan notifikasi sementara
 * @param {string} message - Pesan notifikasi
 * @param {string} type - Tipe notifikasi (success, error, warning, info)
 */
function showNotification(message, type = "info") {
  // Remove existing notification
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles dynamically
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${getNotificationColor(type)};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

function getNotificationColor(type) {
  const colors = {
    success: "#2ecc71",
    error: "#e74c3c",
    warning: "#f39c12",
    info: "#3498db",
  };
  return colors[type] || colors.info;
}

/**
 * Mencari buku berdasarkan kata kunci
 * @param {string} keyword - Kata kunci pencarian
 */
function searchBooks(keyword) {
  if (!keyword.trim()) {
    renderBooks();
    return;
  }

  const searchTerm = keyword.toLowerCase();
  const results = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm) ||
      book.genre.toLowerCase().includes(searchTerm) ||
      book.year.toString().includes(searchTerm)
  );

  renderBooks(results);
  showNotification(
    `Ditemukan ${results.length} buku untuk "${keyword}"`,
    "info"
  );
}

// ==================== SEARCH FUNCTIONALITY ====================
function addSearchFunctionality() {
  // Create search input
  const searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  searchContainer.innerHTML = `
        <input type="text" id="searchInput" placeholder="Cari buku (judul, penulis, genre, tahun)...">
        <button id="searchBtn" class="btn">🔍 Cari</button>
        <button id="clearSearchBtn" class="btn btn-danger">✕ Hapus Pencarian</button>
    `;

  // Insert after header
  const header = document.querySelector("header");
  header.parentNode.insertBefore(searchContainer, header.nextSibling);

  // Add event listeners
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const clearSearchBtn = document.getElementById("clearSearchBtn");

  searchBtn.addEventListener("click", () => {
    searchBooks(searchInput.value);
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBooks(searchInput.value);
    }
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderBooks();
    showNotification("Pencarian dihapus", "info");
  });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  bookForm.addEventListener("submit", handleFormSubmit);
  bookList.addEventListener("click", handleBookListClick);
  showAllBtn.addEventListener("click", () => {
    renderBooks();
    showNotification("Menampilkan semua buku", "info");
  });
  availableBooksBtn.addEventListener("click", handleShowAvailableBooks);
  sortByYearBtn.addEventListener("click", handleSortByYear);
  resetBtn.addEventListener("click", handleResetData);
}

// ==================== INITIALIZATION ====================
function init() {
  console.log("🚀 Aplikasi Manajemen Perpustakaan dimulai...");

  // Setup search functionality
  addSearchFunctionality();

  // Setup event listeners
  setupEventListeners();

  // Add sample books (50 buku)
  addStructuredSampleBooks();

  // Initial render
  renderBooks();

  console.log(`✅ Aplikasi siap dengan ${books.length} buku`);
  showNotification(`Aplikasi siap dengan ${books.length} buku!`, "success");
}

// Start the application
document.addEventListener("DOMContentLoaded", init);
