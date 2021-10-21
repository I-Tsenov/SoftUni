const { assert } = require('chai');
const isOddOrEven = require('../evenOrOdd');

describe('check isOddOrEven', () => {
    it('is it string', () => {
        assert.isUndefined(isOddOrEven(1), 'be !== undefined');
    })
    it('is it even', () => {
        assert.equal(isOddOrEven('taco'), 'even', 'be even');
    })
    it('is it odd', () => {
        assert.equal(isOddOrEven('tac'), 'odd', 'be odd');
    })
})