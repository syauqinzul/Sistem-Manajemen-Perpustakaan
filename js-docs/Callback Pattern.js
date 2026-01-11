function processBooks(books, callback) {
    const results = [];
    for (let book of books) {
        results.push(callback(book));
    }
    return results;
}

const titles = processBooks(books, book => book.title);
const years = processBooks(books, book => book.year);