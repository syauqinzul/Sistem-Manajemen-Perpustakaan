// Object to JSON string
const book = { title: "JS", author: "Author" };
const jsonString = JSON.stringify(book);
// '{"title":"JS","author":"Author"}'

// JSON string to Object
const parsedBook = JSON.parse(jsonString);

// With formatting
const prettyJSON = JSON.stringify(book, null, 2);
/*
{
  "title": "JS",
  "author": "Author"
}
*/

// Reviver function
const book = JSON.parse(jsonString, (key, value) => {
    if (key === "year") return parseInt(value);
    return value;
});