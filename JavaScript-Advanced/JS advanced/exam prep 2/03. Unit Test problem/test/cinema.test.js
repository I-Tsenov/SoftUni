const { assert } = require('chai');
const cinema = require('../cinema')

describe('tests', () => {
    describe('showMovies', () => {
        it('on empty array', () => {
            assert.equal(cinema.showMovies([]), 'There are currently no movies to show.')
        })
        it('array with elements', () => {
            const arr = ['a', 'b', 'c']
            assert.equal(cinema.showMovies(arr), 'a, b, c')
        })
    }),
        describe('ticketPrice', () => {
            it('when type is present in schedule', () => {
                assert.equal(cinema.ticketPrice("Premiere"), 12.00)
                assert.equal(cinema.ticketPrice("Normal"), 7.50)
                assert.equal(cinema.ticketPrice("Discount"), 5.50)
            })
            it('when type is NOT present in schedule', () => {
                assert.throw(() => cinema.ticketPrice("holiday"), "Invalid projection type.")
            })

        }),
        describe('swapSeatsInHall', () => {
            it('when one of the numbers does not exist', () => {
                assert.equal(cinema.swapSeatsInHall(1), 'Unsuccessful change of seats in the hall.')
            })
            it('when the numbers are not integers', () => {
                assert.equal(cinema.swapSeatsInHall(1.5, 1), 'Unsuccessful change of seats in the hall.', 'first num is not an integer.')
                assert.equal(cinema.swapSeatsInHall(1, 1.5), 'Unsuccessful change of seats in the hall.', 'second num is not an integer.')
                assert.equal(cinema.swapSeatsInHall(1.5, 1.5), 'Unsuccessful change of seats in the hall.', 'both numbers are not integers.')
            })
            it('when one of the numbers is greater than hall capacity - 20', () => {
                assert.equal(cinema.swapSeatsInHall(21, 1), 'Unsuccessful change of seats in the hall.', 'first num is out of capacity.')
                assert.equal(cinema.swapSeatsInHall(1, 21), 'Unsuccessful change of seats in the hall.', 'second num is out of capacity.')
                assert.equal(cinema.swapSeatsInHall(21, 21), 'Unsuccessful change of seats in the hall.', 'both are out of capacity.')
            })
            it('when one of the numbers is less or equal to 0', () => {
                assert.equal(cinema.swapSeatsInHall(-1, 1), 'Unsuccessful change of seats in the hall.', 'first num is less than 0.')
                assert.equal(cinema.swapSeatsInHall(1, -1), 'Unsuccessful change of seats in the hall.', 'second num is less than 0.')
                assert.equal(cinema.swapSeatsInHall(-1, -2), 'Unsuccessful change of seats in the hall.', 'both numbers are less than 0.')
                assert.equal(cinema.swapSeatsInHall(0, 1), 'Unsuccessful change of seats in the hall.', 'first num is equal to 0.')
                assert.equal(cinema.swapSeatsInHall(1, 0), 'Unsuccessful change of seats in the hall.', 'second num is equal to 0.')
                assert.equal(cinema.swapSeatsInHall(0, 0), 'Unsuccessful change of seats in the hall.', 'both numbers are equal to 0.')
            })
            it('when everything is correct', () => {
                assert.equal(cinema.swapSeatsInHall(1, 2), 'Successful change of seats in the hall.')
                assert.equal(cinema.swapSeatsInHall(20, 1), 'Successful change of seats in the hall.')
                assert.equal(cinema.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.')
            })
        })
})