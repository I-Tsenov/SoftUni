let PaymentPackage = require('../paymentPackage');
let { assert } = require('chai');

describe("PaymentPackage tests", function () {
    let instance = undefined;
    this.beforeEach(() => {
        instance = new PaymentPackage('Name', 100);
    })
    it("constructor", function () {
        assert.equal(instance._name, 'Name');
        assert.equal(instance._value, 100);
        assert.equal(instance._VAT, 20);
        assert.equal(instance._active, true);

    });
    it("Name", function () {
        assert.equal(instance.name, 'Name');

        instance.name = 'Pesho';
        assert.equal(instance.name, 'Pesho');
        assert.throw(() => { instance.name = '' }, 'Name must be a non-empty string');
        assert.throw(() => { instance.name = 2 }, 'Name must be a non-empty string');
    });
    it("Value", function () {
        assert.equal(instance.value, 100);

        instance.value = 150;
        assert.equal(instance.value, 150);
        assert.throw(() => { instance.value = -2 }, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = '2' }, 'Value must be a non-negative number');
        assert.doesNotThrow(() => { instance.value = 0});
    });
    it("VAT", function () {
        assert.equal(instance.VAT, 20);

        instance.VAT = 40;
        assert.equal(instance.VAT, 40);
        assert.throw(() => { instance.VAT = -2 }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = '2' }, 'VAT must be a non-negative number');
    });
    it("Active", function () {
        assert.equal(instance.active, true);
        instance.active = false;

        assert.isFalse(instance.active);
        assert.throw(() => { instance.active = 'tacobel' }, 'Active status must be a boolean');
        assert.throw(() => { instance.active = 0 }, 'Active status must be a boolean');
    });
    it("toString", function () {
        function getString(name, value, VAT, active) {
            return [`Package: ${name}` + (active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${value}`,
            `- Value (VAT ${VAT}%): ${value * (1 + VAT / 100)}`
            ].join('\n');
        }

        assert.equal(instance.toString(), getString('Name', 100, 20, true));
        instance.active = false;
        assert.equal(instance.toString(), getString('Name', 100, 20, false));
        instance.VAT = 200;
        assert.equal(instance.toString(), getString('Name', 100, 200, false));
        instance.name = 'Gosho';
        assert.equal(instance.toString(), getString('Gosho', 100, 200, false));
        instance.value = 40;
        assert.equal(instance.toString(), getString('Gosho', 40, 200, false));
    });
});
