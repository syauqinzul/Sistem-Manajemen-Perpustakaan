// Immutable updates
const newBooks = [...books, newBook];  // Add
const updatedBooks = books.map(book => 
    book.id === id ? { ...book, title: newTitle } : book
);  // Update
const filteredBooks = books.filter(book => book.id !== id);  // Remove

// Deep vs Shallow copy
const shallowCopy = { ...book };
const deepCopy = JSON.parse(JSON.stringify(book));

// Performance considerations
// Array: Use push/pop for end operations
// Array: Use unshift/shift for beginning (slower)
// Object: Use Map for frequent additions/deletions