const { assert } = require('chai');
const mathEnforcer = require('../mathEnforcer');

describe('check mathEnforcer', () => {
    describe('check addFive param', () => {
        it('is it number', () => {
            assert.isUndefined(mathEnforcer.addFive('str'), 'param is not a number')
        })
    })
    describe('check subtractTen param', () => {
        it('is it number', () => {
            assert.isUndefined(mathEnforcer.subtractTen('str'), 'param is not a number')
        })
    })
    describe('check sum params', () => {
        it('is it number', () => {
            assert.isUndefined(mathEnforcer.sum('str', 1), 'first param is not num')
            assert.isUndefined(mathEnforcer.sum(1, 'str'), 'second param is not num')
        })
    })
    describe('check correct cases', () => {
        it('is it adding 5', () => {
            assert.equal(mathEnforcer.addFive(5), 10, 'pos to pos')
            assert.equal(mathEnforcer.addFive(0), 5, '0 to pos')
            assert.equal(mathEnforcer.addFive(-5), 0, 'negative to 0')
            assert.equal(mathEnforcer.addFive(-10), -5, 'negative to negative')
            assert.closeTo(mathEnforcer.addFive(2.2), 7.2, 0.1, 'pos to pos, floating')
            assert.closeTo(mathEnforcer.addFive(-5.2), -0.2, 0.1, 'negative to negative, floating')
        })
        it('is it subtracting 10', () => {
            assert.equal(mathEnforcer.subtractTen(5), -5, 'pos to neg')
            assert.equal(mathEnforcer.subtractTen(0), -10, '0 to neg')
            assert.equal(mathEnforcer.subtractTen(-5), -15, 'negative to negative')
            assert.equal(mathEnforcer.subtractTen(20), 10, 'pos to pos')
            assert.closeTo(mathEnforcer.subtractTen(-2.2), -12.2, 0.1, 'negative to negative, floating')
        })
        it('is sum correct', () => {
            assert.equal(mathEnforcer.sum(5, 5), 10, 'pos to pos')
            assert.equal(mathEnforcer.sum(-5, -10), -15, 'negative to negative')
            assert.closeTo(mathEnforcer.sum(2.2, 3.3), 5.5, 0.1, 'pos to pos, floating')
            assert.closeTo(mathEnforcer.sum(-2.2, 2.2), 0, 0.1, 'negative to pos, floating')
        })
    })
})
