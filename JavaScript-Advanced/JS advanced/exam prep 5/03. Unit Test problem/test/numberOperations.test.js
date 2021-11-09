const numberOperations = require('../numberOperations');
const { assert } = require('chai');

describe("Tests", () => {
    describe("powNumber", () => {
        it("number on power", () => {
            assert.equal(numberOperations.powNumber(2), 4);
            assert.equal(numberOperations.powNumber(0), 0);
        });
    });
    describe("numberChecker", () => {
        it("is parse to Number successful", () => {
            // If the input is not a number the function throws an error
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
            assert.throw(() => numberOperations.numberChecker('undefined'), 'The input is not a number!');
            assert.equal(numberOperations.numberChecker('1'), 'The number is lower than 100!');
        });
        it('is below 100', () => {
            // if the input is a number, checks if it is lower than 100. If so the function returns the string: "The number is lower than 100!"
            assert.equal(numberOperations.numberChecker(5), 'The number is lower than 100!');
            assert.equal(numberOperations.numberChecker(-5), 'The number is lower than 100!');
        });
        it('is equal or above 100', () => {
            // otherwise the function returns: "The number is greater or equal to 100!"            
            assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
        });
    });
    describe("sumArrays", () => {

        it("sum correct", () => {
            assert.deepEqual(numberOperations.sumArrays([1], [1]), [2]);
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2]), [2, 4]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2]), [2, 4, 3]);
            assert.deepEqual(numberOperations.sumArrays([1, 2], [1, 2, 3]), [2, 4, 3]);
        });
    });
});
