// Object literal (most common)
const book = {
    title: "JavaScript",
    author: "Author",
    year: 2023
};

// Constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}
const book1 = new Book("JS", "Author", 2023);

// Object.create()
const bookProto = {
    getInfo: function() {
        return `${this.title} (${this.year})`;
    }
};
const book2 = Object.create(bookProto);
book2.title = "CSS";
book2.year = 2022;

// Class syntax (ES6)
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getInfo() {
        return `${this.title} (${this.year})`;
    }
}