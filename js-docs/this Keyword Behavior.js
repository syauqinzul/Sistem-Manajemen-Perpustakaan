// Global context
console.log(this);  // Window (browser)

// Function context
function regularFunc() {
    console.log(this);  // Depends on how called
}

// Object method
const book = {
    title: "JS",
    getTitle: function() {
        return this.title;  // book object
    }
};

// Arrow function (lexical this)
const book2 = {
    title: "CSS",
    getTitle: () => {
        return this.title;  // Window (not book2)
    }
};

