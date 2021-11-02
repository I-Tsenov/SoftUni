const { assert } = require('chai');
const testNumbers = require('../testNumbers');

describe("Tests …", () => {
    describe("sumNumbers", () => {
        it("when params are not numbers", () => {
            assert.isUndefined(testNumbers.sumNumbers('a', 1))
            assert.isUndefined(testNumbers.sumNumbers(1, []))
        });
        it("when num are positive or negative", () => {
            assert.equal(testNumbers.sumNumbers(-1, 2), 1.00)
            assert.equal(testNumbers.sumNumbers(1, -2), -1.00)
            assert.equal(testNumbers.sumNumbers(1, 2), 3.00)
            assert.equal(testNumbers.sumNumbers(-1, -2), -3.00)
            assert.equal(testNumbers.sumNumbers(-1.5, -2.5), -4.00)
            assert.equal(testNumbers.sumNumbers(5.8, 2.2), 8.00)
            assert.equal(testNumbers.sumNumbers(0, 1), 1.00)
        });
    });
    describe("numberChecker", () => {
        it("check if number is parsed and validated", () => {
            assert.equal(testNumbers.numberChecker('1'), "The number is odd!")
        })
        it("check num is even or odd", () => {
            assert.equal(testNumbers.numberChecker(0), "The number is even!")
            assert.equal(testNumbers.numberChecker(2), "The number is even!")
            assert.equal(testNumbers.numberChecker(1), "The number is odd!")
        });
        it("check if param is a number or not", () => {
            assert.throw(() => testNumbers.numberChecker('a'), "The input is not a number!")
            assert.throw(() => testNumbers.numberChecker(NaN), "The input is not a number!")
            assert.throw(() => testNumbers.numberChecker(['a']), "The input is not a number!")
        });
    });
    describe("averageSumArray", () => {
        it("check if average sum is as expected", () => {
            assert.equal(testNumbers.averageSumArray([1,2,3,4]), 2.5)
        });
    });
});
