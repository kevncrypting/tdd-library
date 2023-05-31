const Library = require("./Library");

// The Library...
describe("The Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    });

    // should be able to display its inventory of books
    test("contains books", () => {
        expect(library.displayInventory()).toEqual([]);
    });

    // should be able to have books be added to its inventory.
    test("should be able to have Books be added to its inventory", () => {
        library.addBook([{ title: "Immune", author: "Philipp Dettmer" }]);

        expect(library.inventory).toEqual([
            { title: "Immune", author: "Philipp Dettmer" },
        ]);
    });
});

// The Library should be able to issue()  (check out to patrons) books
// The Library should be able to accept books (accept returned books from patrons), as well.
// The Library should be able to display an accurate inventory of its books at any time
