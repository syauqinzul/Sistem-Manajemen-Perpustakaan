// What happens:
console.log(x);      // undefined (not error)
var x = 5;
console.log(x);      // 5

// How JavaScript sees it:
var x;               // Declaration hoisted
console.log(x);      // undefined
x = 5;              // Assignment stays
console.log(x);      // 5

// let/const don't hoist the same way
console.log(y);      // ReferenceError
let y = 10;