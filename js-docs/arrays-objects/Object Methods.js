// Object.keys()
const keys = Object.keys(book);  // ["title", "author", "year"]

// Object.values()
const values = Object.values(book);  // ["JavaScript", "Douglas...", 2008]

// Object.entries()
const entries = Object.entries(book);
// [["title", "JavaScript"], ["author", "Douglas..."], ...]

// Object.assign() - Shallow copy
const bookCopy = Object.assign({}, book);
const merged = Object.assign({}, book1, book2);

// Spread operator (better)
const bookCopy = { ...book };
const merged = { ...book1, ...book2 };

// Object.freeze()
Object.freeze(book);
book.title = "New Title";  // Fails silently or throws error in strict mode
// Object.seal()
Object.seal(book);
delete book.author;
book.year = 2020;  // Allowed

