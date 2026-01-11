function displayInfo() {
    console.log(`${this.title} by ${this.author}`);
}

const book = { title: "JS", author: "Author" };

// 1. call()
displayInfo.call(book);

// 2. apply()
displayInfo.apply(book);

// 3. bind()
const boundFunc = displayInfo.bind(book);
boundFunc();