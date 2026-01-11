// forEach - Execute for each element
books.forEach((book, index) => {
    console.log(`${index}: ${book.title}`);
});

// map - Transform array
const titles = books.map(book => book.title);
const formatted = books.map((book, i) => `${i+1}. ${book.title}`);

// filter - Select elements
const available = books.filter(book => book.isAvailable);
const oldBooks = books.filter(book => book.year < 2000);

// reduce - Accumulate values
const totalYears = books.reduce((sum, book) => sum + book.year, 0);
const genreCount = books.reduce((acc, book) => {
    acc[book.genre] = (acc[book.genre] || 0) + 1;
    return acc;
}, {});

// find/findIndex - Search
const jsBook = books.find(book => book.title.includes("JavaScript"));
const jsIndex = books.findIndex(book => book.title.includes("JavaScript"));