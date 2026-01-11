// Automatic Garbage Collection
let book = { title: "Old Book" };
book = null;  // Old object eligible for GC

// Memory Leak Example
function createLeak() {
    const element = document.getElementById('leak');
    element.onclick = function() {
        // Closure keeps reference to element
    };
}