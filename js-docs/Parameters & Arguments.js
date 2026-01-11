// Default Parameters (ES6)
function createBook(title, author, year = 2023) {
    return { title, author, year };
}

// Rest Parameters
function addBooks(...books) {
    // books is an array
    return books.length;
}

// Destructuring Parameters
function displayBook({ title, author, year }) {
    console.log(`${title} (${year})`);
}