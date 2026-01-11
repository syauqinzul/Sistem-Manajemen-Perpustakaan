// Function Declaration (HOISTED)
sayHello();  // Works
function sayHello() {
    console.log("Hello");
}

// Function Expression (NOT HOISTED)
sayHi();     // Error
const sayHi = function() {
    console.log("Hi");
};