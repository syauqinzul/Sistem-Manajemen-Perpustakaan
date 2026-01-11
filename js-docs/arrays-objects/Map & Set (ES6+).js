// Map (key-value pairs, any key type)
const bookMap = new Map();
bookMap.set("js", { title: "JavaScript" });
bookMap.set(123, { title: "Book 123" });
console.log(bookMap.get("js"));

// Set (unique values)
const genres = new Set();
genres.add("Technology");
genres.add("Fiction");
genres.add("Technology");  // Duplicate ignored
console.log(genres.size);  // 2