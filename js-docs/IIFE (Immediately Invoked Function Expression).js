// Module Pattern
const BookManager = (function() {
    // Private variables
    let books = [];
    
    // Public methods
    return {
        addBook: function(book) {
            books.push(book);
        },
        getCount: function() {
            return books.length;
        }
    };
})();

BookManager.addBook({title: "JS"});
console.log(BookManager.getCount());  // 1
// books tidak bisa diakses langsung