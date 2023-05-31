class Library {
    constructor() {
        this.inventory = [];
    }

    displayInventory() {
        return this.inventory;
    }

    addBook(book) {
        this.inventory.push(...book);
    }

    issueBook(bookTitle, patron) {
        let selectedBook = this.inventory.find(
            (book) => book.title === bookTitle
        );

        if (selectedBook == null) {
            return "Book Not Found";
        }

        if (selectedBook.isCheckedOut === true) {
            return "Book Not Available";
        }

        if (selectedBook.isCheckedOut === false && patron !== null) {
            selectedBook.isCheckedOut = true;
            selectedBook.possessedBy = patron;
        }
    }
}

module.exports = Library;
