// Global Scope
const GLOBAL = "I'm global";

function outer() {
    // Outer function scope
    const OUTER = "I'm in outer";
    
    function inner() {
        // Inner function scope
        const INNER = "I'm in inner";
        
        // Access all scopes
        console.log(GLOBAL);   // ✅
        console.log(OUTER);    // ✅  
        console.log(INNER);    // ✅
    }
    
    inner();
    console.log(INNER);  // ❌ Error
}

// Lexical Scope Visualization:
// inner() has access to:
// 1. Its own scope (INNER)
// 2. outer() scope (OUTER)  
// 3. Global scope (GLOBAL)