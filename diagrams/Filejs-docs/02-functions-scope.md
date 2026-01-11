
### File: `js-docs/02-functions-scope.md`
```markdown
# 🎯 FUNCTIONS & SCOPE

## 1. Function Declarations
```javascript
// Function Declaration (hoisted)
function addBook(title, author) {
    return `${title} by ${author}`;
}

// Function Expression (not hoisted)
const addBook = function(title, author) {
    return `${title} by ${author}`;
};

// Arrow Function (ES6+)
const addBook = (title, author) => {
    return `${title} by ${author}`;
};

// Concise Arrow Function
const addBook = (title, author) => `${title} by ${author}`;