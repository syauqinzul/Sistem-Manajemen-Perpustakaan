const book = { title: "JS", author: "Author" };

// Dot notation
console.log(book.title);    // "JS"

// Bracket notation (dynamic)
const prop = "author";
console.log(book[prop]);    // "Author"

// Computed property names
const dynamicKey = "genre";
const book2 = {
    title: "CSS",
    [dynamicKey]: "Technology"  // genre: "Technology"
};

// Property existence
console.log("title" in book);      // true
console.log(book.hasOwnProperty("title"));  // true
console.log(book.toString);        // false (inherited)