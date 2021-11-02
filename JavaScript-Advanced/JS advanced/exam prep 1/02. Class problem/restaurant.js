class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney,
            this.menu = {},
            this.stockProducts = {},
            this.history = []
    }

    loadProducts(products) {

        products.forEach(e => {

            let [name, quantity, totalPrice] = e.split(' ');

            [quantity, totalPrice] = [quantity, totalPrice].map(Number);

            if (totalPrice <= this.budgetMoney) {
                this.budgetMoney -= totalPrice;
                this.history.push(`Successfully loaded ${quantity} ${name}`)

                if (this.stockProducts.hasOwnProperty(name) === false) {
                    this.stockProducts[name] = quantity
                } else {
                    this.stockProducts[name] += quantity;
                }
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
                return this.history.join('\n')
            }
        })

        return this.history.join('\n')
    }
    addToMenu(meal, neededProducts, mealPrice) {

        if (this.menu.hasOwnProperty(meal) === false) {

            this.menu[meal] = {
                products: neededProducts,
                price: mealPrice
            }

            const menuSize = Object.keys(this.menu).length

            if (menuSize === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else if (menuSize === 0 || menuSize > 1) {
                return `Great idea! Now with the ${meal} we have ${menuSize} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }
    showTheMenu() {
        const menuSize = Object.keys(this.menu).length;

        if (menuSize === 0) {
            return "Our menu is not ready yet, please come later..."
        }

        return Object.entries(this.menu).map(([meal, { product, price }]) => `${meal} - $ ${price}`).join('\n')
    }
    makeTheOrder(meal) {

        let isAvailable = true;

        if (this.menu.hasOwnProperty(meal) === false) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {

            const neededProducts = this.menu[meal].products;
            const currentPrice = this.menu[meal].price;

            neededProducts.forEach(e => {
                let [product, quantity] = e.split(' ')

                if (this.stockProducts.hasOwnProperty(product) === false) {
                    isAvailable = false;
                }
            });

            if (isAvailable === true) {
                neededProducts.forEach(e => {
                    let [product, quantity] = e.split(' ')

                    quantity = Number(quantity);

                    if (this.stockProducts[product] - quantity < 0) {
                        isAvailable = false;
                    } else {
                        this.stockProducts[product] -= quantity;
                    }
                })
            }

            if (isAvailable === false) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            } else {
                this.budgetMoney += currentPrice;
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${currentPrice}.`
            }
        }

    }
}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Yogurt 120 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('chushki', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.showTheMenu())


