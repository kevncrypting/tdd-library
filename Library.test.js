const Library = require('./Library')

describe("The Library", () => {
    let library;

    beforeEach(() => {
        library = new Library();
    })

    // contains Books
    test("contains books", () => {
        expect(library.displayContents()).toEqual([])
    })


})


// The Library should be able to have Books be added to its inventory.
// The Library should be able to issue()  (check out to patrons) books
// The Library should be able to accept books (accept returned books from patrons), as well.
// The Library should be able to display an accurate inventory of its books at any time