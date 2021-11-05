class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];   // [{},{},{}...]
        this.transactions = {};
    }

    set bankName(value) {
        return this._bankName = value;
    }

    newCustomer({ firstName, lastName, personalId }) {

        const transactionCount = 1

        if (this.findCustomer(personalId) === undefined) {
            this.allCustomers.push({ firstName, lastName, personalId, transactionCount });
            return { firstName, lastName, personalId };
        } else {
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
    }

    findCustomer(personalId) {
        return this.allCustomers.find(c => c.personalId === personalId);
    }

    depositMoney(personalId, amount) {

        const customer = this.findCustomer(personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
            if (customer.hasOwnProperty('totalMoney') === false) {
                customer.totalMoney = amount;
            } else {
                customer.totalMoney += amount;
            }

            if (this.transactions.hasOwnProperty(personalId) === false) {
                this.transactions[personalId] = [];
            }

            this.transactions[personalId].push(`${customer.transactionCount++}. ${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)

            return `${customer.totalMoney}$`;
        }
    }

    withdrawMoney(personalId, amount) {

        const customer = this.findCustomer(personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
            if (customer.totalMoney < amount) {
                throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
            } else {
                customer.totalMoney -= amount;
            }

            if (this.transactions.hasOwnProperty(personalId) === false) {
                this.transactions[personalId] = [];
            }

            this.transactions[personalId].push(`${customer.transactionCount++}. ${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)

            return `${customer.totalMoney}$`;
        }
    }

    customerInfo(personalId) {

        let result = [];
        const customer = this.findCustomer(personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!')
        } else {
            const { firstName, lastName, personalId, totalMoney } = customer;
            result.push(`Bank name: ${this._bankName}`)
            result.push(`Customer name: ${firstName} ${lastName}`)
            result.push(`Customer ID: ${personalId}`)
            result.push(`Total Money: ${totalMoney}$`)
            result.push(`Transactions:`);
            result.push(this.transactions[personalId].reverse().join('\n'))

            return result.join('\n')
        }
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(4151596));

