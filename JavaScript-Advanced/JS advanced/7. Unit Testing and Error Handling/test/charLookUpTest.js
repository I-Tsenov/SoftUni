const { assert } = require('chai');
const lookupChar = require('../charLookUp')

describe('check charLookUp', () => {
    it('is undefined', () => {
        assert.isUndefined(lookupChar(1, 1), 'first param is NOT a string ');
        assert.isUndefined(lookupChar('str', 'str'), 'second param is NOT a number');
        assert.isUndefined(lookupChar('str', 1.2), 'second param is NOT am integer');
        assert.isUndefined(lookupChar(1, 'str'), 'both params are NOT correct');
    })
    it('is index corret', () => {
        assert.equal(lookupChar('str', -1), "Incorrect index", 'second param is negative');
        assert.equal(lookupChar('str', 3), "Incorrect index", 'second param is out of boundries');
    })
    it('is correct', () => {
        assert.equal(lookupChar('str', 2), "r");
        assert.equal(lookupChar('str', 0), "s");
    })
})


/*
o	If the first parameter is NOT a string or the second parameter is NOT a number - return undefined.
o	If both parameters are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "Incorrect index".
o	If both parameters have correct types and values - return the character at the specified index in the string.
 */