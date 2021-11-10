const pizzUni = require('../pizzaPlace');
const { assert } = require('chai');

describe("Tests", () => {
    describe("makeAnOrder", () => {
        it("order includes products", () => {
            let order0 = {};
            let order1 = { orderedDrink: 'Coca Cola' };
            let order2 = { orderedPizza: 'margarita' };
            let order3 = { orderedPizza: 'margarita', orderedDrink: 'Coca Cola' };

            assert.throw(() => pizzUni.makeAnOrder(order0), 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => pizzUni.makeAnOrder(order1), 'You must order at least 1 Pizza to finish the order.');
            assert.equal(pizzUni.makeAnOrder(order2), `You just ordered ${order2.orderedPizza}`, 'pizza');
            assert.equal(pizzUni.makeAnOrder(order3), `You just ordered ${order3.orderedPizza} and ${order3.orderedDrink}.`, ' both')
        });
    });
    describe("getRemainingWork", () => {

        it('status update', () => {
            let status0 = [{ pizzaName: 'margarita', status: 'preparing' }, { pizzaName: 'pepperoni', status: 'preparing' }];
            let status1 = [{ pizzaName: 'margarita', status: 'preparing' }, { pizzaName: 'pepperoni', status: 'ready' }];
            let status2 = [{ pizzaName: 'margarita', status: 'ready' }, { pizzaName: 'pepperoni', status: 'ready' }];

            assert.equal(pizzUni.getRemainingWork(status0), `The following pizzas are still preparing: margarita, pepperoni.`);
            assert.equal(pizzUni.getRemainingWork(status1), `The following pizzas are still preparing: margarita.`);
            assert.equal(pizzUni.getRemainingWork(status2), 'All orders are complete!');
        });
    });

    describe("orderType", () => {
        it("discount order correctly", () => {
            assert.equal(pizzUni.orderType(20, 'Carry Out'), 18)
            assert.equal(pizzUni.orderType(20, 'Delivery'), 20)
        });
    });
});