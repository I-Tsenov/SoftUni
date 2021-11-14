const { assert } = require('chai');
const library = require('../library')

describe('tests', () => {
    describe('calcPriceOfBook', () => {
        it('when publication year is less or equal to 1980', () => {
            assert.equal(library.calcPriceOfBook('a', 1979), `Price of a is 10.00`);
            assert.equal(library.calcPriceOfBook('a', 1980), `Price of a is 10.00`);
            assert.equal(library.calcPriceOfBook('a', 1981), `Price of a is 20.00`);
        })
        it('when nameOfBook is not a string or Year is not an integer', () => {
            assert.throw(() => library.calcPriceOfBook(1, 10), "Invalid input", 'bookName is not a string');
            assert.throw(() => library.calcPriceOfBook('a', 1.5), "Invalid input", 'year is not an integer');
        })
    })
    describe('findBook', () => {
        it('when there are no books in the array', () => {
            assert.throw(() => library.findBook([], 'a'), "No books currently available");
        })
        it('when books is found', () => {
            assert.equal(library.findBook(["a", "b"], "a"), "We found the book you want.");
        })
        it('when book is not found', () => {
            assert.equal(library.findBook(["a", "b"], "c"), "The book you are looking for is not here!");
        })
    })
    describe('arrangeTheBooks', () => {
        it('when count is incorrect', () => {
            assert.throw(() => library.arrangeTheBooks(1.5), "Invalid input", 'count is floating number');
            assert.throw(() => library.arrangeTheBooks(-1), "Invalid input", 'count is negative');
        })
        it('is the space on the shelves enough for the books', () => {
            assert.equal(library.arrangeTheBooks(39), "Great job, the books are arranged.", 'space is enough')
            assert.equal(library.arrangeTheBooks(40), "Great job, the books are arranged.", 'space is enough')
            assert.equal(library.arrangeTheBooks(41), "Insufficient space, more shelves need to be purchased.", 'space is NOT enough')
        })
    })
})
