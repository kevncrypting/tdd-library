const Library = require("./Library");

// The Library...
describe("The Library", () => {
    let library;

    let newInventory = [
        {
            title: "Immune",
            author: "Philipp Dettmer",
            isCheckedOut: false,
            possessedBy: "Library",
        },
        {
            title: "Drive",
            author: "Daniel Pink",
            isCheckedOut: false,
            possessedBy: "Library",
        },
        {
            title: "Refactoring UI",
            author: ["Steve Schoger", "Adam Watham"],
            isCheckedOut: false,
            possessedBy: "Library",
        },
    ];

    beforeEach(() => {
        library = new Library();
    });

    // should be able to display an accurate inventory of its books at any time
    test("contains books", () => {
        expect(library.displayInventory()).toEqual([]);
    });

    // should be able to have books be added to its inventory
    test("should be able to have Books be added to its inventory", () => {
        library.addBook(newInventory);

        expect(library.inventory).toEqual(newInventory);
    });

    // should be able to issue() (check out to patrons) books
    test("should be able to issue books to patrons)", () => {
        library.addBook(newInventory);
        library.issueBook("Immune", "Kevin");
        
        expect(library.inventory).toEqual([
            {
                title: "Immune",
                author: "Philipp Dettmer",
                isCheckedOut: true,
                possessedBy: "Kevin",
            },
            {
                title: "Drive",
                author: "Daniel Pink",
                isCheckedOut: false,
                possessedBy: "Library",
            },
            {
                title: "Refactoring UI",
                author: ["Steve Schoger", "Adam Watham"],
                isCheckedOut: false,
                possessedBy: "Library",
            },
        ]);
    });
    
    // should be able to accept returned books
    test("should be able to accept returned books", () => {
        library.addBook(newInventory);
        
        library.issueBook("Drive", "Kevin");
        library.acceptBook('Immune', 'Kevin');

        expect(library.inventory).toEqual(newInventory);
        
    })
});
