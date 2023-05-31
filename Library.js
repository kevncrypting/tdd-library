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
}

module.exports = Library;
