
### File: `js-docs/03-arrays-objects.md`
```markdown
# 📊 ARRAYS & OBJECTS

## 1. Array Creation & Methods

### Basic Array Operations
```javascript
// Array Creation
let books = [];                     // Empty array
let numbers = [1, 2, 3];           // Array literal
let mixed = ["text", 123, true];   // Mixed types
let fromConstructor = new Array(5); // [empty × 5]

// Array Methods in Project
const availableBooks = books.filter(book => book.isAvailable);
const sortedBooks = [...books].sort((a, b) => a.year - b.year);
books.splice(bookId, 1);  // Remove 1 element at index