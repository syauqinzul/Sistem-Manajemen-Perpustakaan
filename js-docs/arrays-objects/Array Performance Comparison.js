// For loop (fastest)
for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
}

// for...of (clean, moderate)
for (const book of books) {
    console.log(book.title);
}

// forEach (functional, slower)
books.forEach(book => console.log(book.title));

// while loop (flexible)
let i = 0;
while (i < books.length) {
    console.log(books[i].title);
    i++;
}