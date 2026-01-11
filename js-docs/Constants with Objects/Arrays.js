const book = { title: "JS" };
book.title = "JavaScript";  // ✅ Allowed (property change)
book = { title: "New" };    // ❌ Error (reassignment)

const numbers = [1, 2, 3];
numbers.push(4);            // ✅ Allowed
numbers = [5, 6];           // ❌ Error