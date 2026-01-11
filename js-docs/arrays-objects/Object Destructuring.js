const book = {
    title: "JavaScript",
    author: "Douglas Crockford",
    year: 2008,
    genre: "Technology"
};

// Basic destructuring
const { title, author } = book;

// With new variable names
const { title: bookTitle, author: writer } = book;

// Default values
const { title, publisher = "Unknown" } = book;

// Nested destructuring
const library = {
    name: "City Library",
    books: [book]
};
const { name, books: [firstBook] } = library;

// Rest operator
const { title, ...rest } = book;
// rest = { author: "...", year: 2008, genre: "..." }