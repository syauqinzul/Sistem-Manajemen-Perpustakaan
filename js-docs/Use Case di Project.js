// Event handler dengan closure
function setupDeleteHandler(bookId) {
    return function() {
        deleteBook(bookId);  // Masih ingat bookId
    };
}

// Setiap button punya handler dengan ID berbeda
deleteButtons.forEach((btn, index) => {
    btn.onclick = setupDeleteHandler(index);
});