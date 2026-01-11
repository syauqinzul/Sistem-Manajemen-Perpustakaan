// typeof Operator
typeof "hello"        // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" (historical bug)
typeof {}            // "object"
typeof []            // "object"
typeof function(){}  // "function"

// Type Conversion
let str = "123";
let num = Number(str);     // 123
let bool = Boolean(num);   // true
let str2 = String(num);    // "123"

// Truthy/Falsy Values
falsy: false, 0, "", null, undefined, NaN
truthy: everything else