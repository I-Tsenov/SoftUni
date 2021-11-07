const dealership = require('../dealership');
const { assert } = require('chai');

describe("Tests", () => {
    describe("newCarCost", () => {
        it("returning old car", () => {
            assert.equal(dealership.newCarCost('Audi A4 B8', 30000), 15000)
        });
        it("not returning old car", () => {
            assert.equal(dealership.newCarCost('mazda', 30000), 30000)
        });
    });
    describe("carEquipment", () => {
        it("returning right extras", () => {
            let extras = ['heated seats', 'sliding roof', 'sport rims', 'navigation']
            let indexes = [0, 3]
            assert.deepEqual(dealership.carEquipment(extras, indexes), ['heated seats', 'navigation'])
            assert.deepEqual(dealership.carEquipment(extras, indexes), ['heated seats', 'navigation'])
        });
    });
    describe("euroCategory", () => {
        it("ecology of car", () => {
            assert.equal(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!')
            assert.equal(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`)
            assert.equal(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`)
        });
    })
})